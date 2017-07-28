import { extendObservable, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
        base_path: '',
        components: [],
    });

    this.addPath = action((path) => {
      this.base_path = path;
    });

    this.addComponents = action((components) => {
      this.components = components;
    });
  }
}

export default new Store();
