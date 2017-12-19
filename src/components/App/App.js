import React, { Component } from 'react';
import Twig from 'twig';
// import yaml from 'yamljs';
import { Route } from 'react-router-dom';
import { Theme } from './Theme';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Toolbar from '../Toolbar/Toolbar';
import Single from '../../views/Single/Single';
import Doc from '../../views/Doc/Doc';
import SingleFull from '../../views/SingleFull/SingleFull';
import Page from '../../views/Page/Page';
import Colors from '../../views/Colors/Colors';

class App extends Component {
  constructor() {
    super();

    this.state = {
      components: {
        atoms: [],
        molecules: [],
        organisms: [],
        pages: [],
      },
      docs: {},
    };
  }

  componentWillMount() {
    // const baseUrl = window.location.href.replace(`#${this.props.location.pathname}`, '');
    // this.props.store.addPath(baseUrl);
    // if (window.docs) this.props.store.addDocs(window.docs);

    // const components = Object.keys(window.sources).reduce((acc, group) => {
    //   const componentArray = window.sources[group].map(slug => {
    //     const path = `components/${group}/${slug}/`;
    //     const config = yaml.load(`${path}/${slug}.yml`);
    //     const content = this.getMarkup(path, slug);
    //     const variants = config && config.variants ? config.variants.map(key => {
    //       // Make sure we put the slug to lowercase, to avoid issues on
    //       // Case Sensitive systems (GH Pages)
    //       const variantSlug = (`${slug}-${key}`).toLowerCase();

    //       return {
    //         slug: variantSlug,
    //         title: key,
    //         content: this.getMarkup(path, variantSlug),
    //       };
    //     }) : null;

    //     return {
    //       ...config,
    //       slug,
    //       content,
    //       variants
    //     };
    //   });

    //   return {
    //     ...acc,
    //     [group]: componentArray
    //   }
    // }, this.state.components);

    // this.props.store.addComponents(components);
  }

  getMarkup(path, slug) {
    return new Promise((resolve, reject) => {
      Twig.twig({
        id: slug,
        href: this.fixPath(`${path}/${slug}.twig`),
        namespaces: {
          'atoms': this.fixPath('./components/atoms/'),
          'molecules': this.fixPath('./components/molecules/'),
          'organisms': this.fixPath('./components/organisms/'),
          'pages': this.fixPath('./components/pages/'),
        },
        load: function(template) {
          resolve(template);
        }
      });
    });
  }

  fixPath(path) {
    return path.replace('./', this.props.store.base_path);
  }

  render() { return <h1>Hello</h1> }
  renderOld() {
    // Remove styleguide shell from pages and full render of components
    const hasStyleguideShell = !this.props.location.pathname.includes('/pages/') && !this.props.location.pathname.match(/\/full\/?$/);

    if (hasStyleguideShell) {
      return (
        <Theme className="styleguide">
          <div className="tlbx-toolbar-wrapper">
            <Toolbar />
          </div>
          <div className={`tlbx-sidebar-wrapper${this.props.store.showMenu ? ' tlbx-sidebar-open' : ''}`}>
            <Sidebar />
          </div>
          <div className="tlbx-content-wrapper">
            <Route path="/" exact component={Doc} />
            <Route path="/atoms/:slug" exact component={Single} />
            <Route path="/molecules/:slug" exact component={Single} />
            <Route path="/organisms/:slug" exact component={Single} />
            <Route path="/doc/:slug" exact component={Doc} />
            <Route path="/colors" exact component={Colors} />
          </div>
        </Theme>
      );
    } else {
      return (
        <div>
          <Route path="/pages/:slug" exact component={Page} />
          <Route path="/:type/:slug/:variant?/full" exact component={SingleFull} />
        </div>
      );
    }
  }
}

export default App;
