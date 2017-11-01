import { extendObservable, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
      base_path: '',
      components: [],
      showAllCode: true,
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
  }
}

export default new Store();
