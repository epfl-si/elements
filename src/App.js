/* global twig */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        label: 'my button',
        placeholder: 'type something',
        search_placeholder: 'seach info here',
        search_label: 'search !',
      }
    }
  }

  renderComponents() {
    return window.sources.map((path) => {
      const slug = path.split('/')[path.split('/').length - 1].replace('.twig', '');
      const content = twig({
        id: slug,
        href: path,
        async: false,
        namespaces: { 'styleguide': '/components/' },
      });

      return (
        <div key={slug} dangerouslySetInnerHTML={{ __html: content.render(this.state.data) }} />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h1>hello Toolbox</h1>
        {this.renderComponents()}
      </div>
    );
  }
}

export default App;
