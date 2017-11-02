import { extendObservable, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
      base_path: '',
      components: [],
      showAllCode: true,
      showMenu: false,
    });

    this.addPath = action((path) => {
      this.base_path = path;
    });

    this.addComponents = action((components) => {
      this.components = components;
    });

    this.toggleAllCode = action(() => {
      this.showAllCode = !this.showAllCode;
    });

    this.toggleMenu = action(() => {
      this.showMenu = !this.showMenu;
    });
  }
}

export default new Store();
