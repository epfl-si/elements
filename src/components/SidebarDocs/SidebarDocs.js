import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Collapse from 'react-css-collapse';
import PropTypes from 'prop-types';

class SidebarDocs extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    }

    this.toggleComponentsList = this.toggleComponentsList.bind(this);
  }

  toggleComponentsList() {
    this.setState({
      active: !this.state.active,
    });
  }

  componentDidMount() {
    const regex = new RegExp(`^/doc/`);
    const isCurrent = this.props.location.pathname.match(regex);

    this.setState({
      active: !!isCurrent
    })
  }

  titlelize(string) {
    const title = string.split('.')[0].replace('-', ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  renderDocDir(dir, fullpath) {
    return (
      <ul className="tlbx-sidebar-item-list">
        {Object.keys(dir).map((item, i) => {
          if (item === 'f') {
            return (
              <span key={i}>
                {dir[item].map((file, j) => {
                  if (file !== 'index.md' && file !== 'index.html') {
                    return (
                      <li key={j}>
                        <NavLink to={`/doc/${fullpath}${file}`}>{this.titlelize(file)}</NavLink>
                      </li>
                    );
                  }

                  return false;
                })}
              </span>
            );
          }

          const hasIndexMd = dir[item].f.includes('index.md');
          const hasIndexHtml = dir[item].f.includes('index.html');
          const index = hasIndexMd ? '--index.md' : hasIndexHtml ? '--index.html' : '';

          return (
            <li key={i}>
              {hasIndexMd || hasIndexHtml
              ?
                <NavLink to={`/doc/${item}${index}`}>
                  {this.titlelize(item)}
                </NavLink>
              :
                <em>{this.titlelize(item)}</em>
              }
              {this.renderDocDir(dir[item], `${fullpath}${item}--`)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (Object.keys(this.props.docs.docs_list).length <= 0) return false;

    return (
      <div className={this.state.active ? ' tlbx-open' : ''}>
        <button className="tlbx-sidebar-item" onClick={() => this.toggleComponentsList()}>
          <strong>Documentation</strong>
        </button>
        <Collapse className="tlbx-sidebar-collapse" isOpen={this.state.active}>
          {this.renderDocDir(this.props.docs.docs_list, '')}
        </Collapse>
      </div>
    );
  }
}

SidebarDocs.propTypes = {
  location: PropTypes.object.isRequired
};

function mapState(state) {
  return {
    docs: state.docs,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapState, mapDispatch)(SidebarDocs);
