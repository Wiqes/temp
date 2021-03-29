import { iconsNames } from '@ui/Icon/iconsNames';

export const Icon = ({ iconName, fontSize = '18px', onClick, ...props }) => {
  const Component = iconsNames[iconName];
  return Component ? <Component style={{ fontSize }} onClick={onClick} {...props} /> : null;
};
