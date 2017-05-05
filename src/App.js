/* global twig */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderComponents() {
    // Sources and Data are defined in index.html
    return window.sources.map((path) => {
      const slug = path.split('/')[path.split('/').length - 1].replace('.twig', '');
      const content = twig({
        id: slug,
        href: path,
        async: false,
        namespaces: { 'styleguide': '/components/' },
      });

      return (
        <div key={slug} className="component">
          <h3>{slug}</h3>
          <div dangerouslySetInnerHTML={{ __html: content.render(window.data) }} />
          <pre><code>{content.render(window.data)}</code></pre>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Styleguide</h2>
        {this.renderComponents()}
      </div>
    );
  }
}

export default App;
