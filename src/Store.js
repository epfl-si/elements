import { extendObservable, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
      base_path: '',
      components: [],
      docs: {},
      showAllCode: true,
      showMenu: false,
    });

    this.addPath = action((path) => {
      this.base_path = path;
    });

    this.addComponents = action((components) => {
      this.components = components;
    });

    this.addDocs = action((docs) => {
      this.docs = docs;
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
