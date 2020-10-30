import { createContext } from 'react';
import { action, observable } from 'mobx';

class LoadingContext {
  @observable loading = false;

  constructor() {
    this.loading = false;
  }

  @action
  setLoading = (loading: boolean) => {
    this.loading = loading;
  }
}
const ctx = createContext(new LoadingContext());
export default ctx;
