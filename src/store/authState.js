import { action, configure, observable } from 'mobx';
import { actionsNames } from '@constants/actions';

configure({ enforceActions: true });

const authState = observable({
  auth: false,
  makeAuthTruthy: action(actionsNames.makeAuthTruthy, () => {
    authState.auth = true;
  }),
  makeAuthFalsy: action(actionsNames.makeAuthFalsy, () => {
    authState.auth = false;
  }),
});

export { authState };
