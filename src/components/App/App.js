import React, { Component } from 'react';
import Twig from 'twig';
import yaml from 'yamljs';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Single from '../../views/Single/Single';

class App extends Component {
  constructor() {
    super();

    this.state = {
      components: {
        atoms: [],
        molecules: [],
        organisms: [],
      },
    };
  }

  componentWillMount() {
    const baseUrl = window.location.href.replace(`#${this.props.location.pathname}`, '');
    this.props.store.base_path = baseUrl;

    this.props.store.components = window.sources.reduce((acc, val) => {
      const slug = val.split('/')[val.split('/').length - 1];
      const content = this.getMarkup(val, slug);
      const config = yaml.load(this.fixPath(`${val}/${slug}.yml`));
      const variants = config && config.variants ? Object.keys(config.variants).map((key) => {
        return {
          title: config.variants[key],
          twig: this.getMarkup(val, `${slug}-${key}`),
        };
      }) : null;
      const component = { config, content, slug, variants };

      if (val.includes('/atoms/')) acc.atoms.push(component);
      if (val.includes('/molecules/')) acc.molecules.push(component);
      if (val.includes('/organisms/')) acc.organisms.push(component);

      return acc;
    }, this.state.components);

    this.props.store.data = window.data;
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

  render() {
    return (
      <div className="styleguide">
        <div className="toolbox-sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="toolbox-content-wrapper">
          <Route path="/:type/:slug" extact component={Single} />
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(App));
