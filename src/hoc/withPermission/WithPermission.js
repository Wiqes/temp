import { authState } from '@store/authState';
import { computed } from 'mobx';

export const WithPermission = ({ permission, children }) => {
  const hasPermission = computed(() => authState.hasPermission(permission)).get();
  return hasPermission ? children : null;
};
