import { extendObservable } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
        base_path: '',
        components: [],
        data: {},
    })
  }
}

export default new Store();