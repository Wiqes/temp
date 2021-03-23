import { action, configure, observable } from 'mobx';

configure({ enforceActions: true });

const loginState = observable({
  count: 0,
  incCount: action('Increment Counter', () => {
    loginState.count += 1;
  }),
  get countByThree() {
    return this.count * 3;
  },
});

export { loginState };
