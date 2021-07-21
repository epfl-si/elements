import styled from 'styled-components';
import theme from '../../../assets/config/theme.json'

const base = {
  black: '#010a15',
  white: '#fff',
  primary: '#003baf',
  secondary: '#3474a8',
  grayLighter: '#f2f2f4',
  alto: '#d8d8d8',
};

export const Theme = styled.div`
  background: ${theme.bodyBackground || base.white};
  color: ${theme.bodyForeground || base.black};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.headingForeground || base.black};
  }

  .tlbx-toolbar-btn {
    color: ${theme.toolbarIconsForeground || base.white};
  }
  .tlbx-toolbar-wrapper {
    background: ${theme.primary || base.primary};
  }
  .tlbx-sidebar-item-list a.active,
  .tlbx-sidebar-item-list a:hover {
    color: ${theme.secondary || base.secondary};
    &:before {
      border-left-color: ${theme.secondary || base.secondary};
    }
  }
  .tlbx-sidebar-item:after {
    border-top-color: ${theme.secondary || base.secondary};
  }
  .tlbx-sidebar-wrapper {
    background: ${theme.sidebarBackground || base.grayLighter};
    color: ${theme.sidebarForeground || base.black};
    a,
    button,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.sidebarForeground || base.black};
    }
  }

  .tlbx-actions-link {
    border-color: ${theme.secondary || base.secondary};
    color: ${theme.secondary || base.secondary};
  }

  .tlbx-item-preview {
    background: ${theme.itemBackground || base.white};
    border-color: ${theme.itemBorder || base.alto};
  }
`;
