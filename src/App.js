/* global twig */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: 'yo',
    }
  }

  componentWillMount() {
    this.content = twig({
      id: 'button',
      href: '/components/button.twig',
      async: true,
      load: (template) => {
        const content = template.render({ label: 'my button' });
        this.setState({ content });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>hello Toolbox</h1>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </div>
    );
  }
}

export default App;
