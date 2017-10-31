import styled from 'styled-components';

const config = window.theme || {};
const base = {
  black: "#010a15",
  white: "#fff",
  primary: "#003baf",
  secondary: "#3474a8",
  grayLighter: "#f2f2f4",
  alto: "#d8d8d8",
};

export const Theme = styled.div`
  background: ${config.bodyBackground || base.white};
  color: ${config.bodyForeground || base.black};

  h1, h2, h3, h4, h5, h6 {
    color: ${config.headingForeground || base.black};
  }

  .tlbx-toolbar-wrapper { background: ${config.primary || base.primary}; }
  .tlbx-sidebar-item-list a.active,
  .tlbx-sidebar-item-list a:hover {
    color: ${config.secondary || base.secondary};
    &:before { border-left-color: ${config.secondary || base.secondary}; }
  }
  .tlbx-sidebar-item:after { border-top-color: ${config.secondary || base.secondary} }
  .tlbx-sidebar-wrapper {
    background: ${config.sidebarBackground || base.grayLighter};
    color: ${config.sidebarForeground || base.black};
    a, button { color: ${config.sidebarForeground || base.black}; }
  }

  .tlbx-actions-link {
    border-color: ${config.secondary || base.secondary};
    color: ${config.secondary || base.secondary};
  }

  .tlbx-item-preview {
    background: ${config.itemBackground || base.white};
    border-color: ${config.itemBorder || base.alto};
  }
`;
