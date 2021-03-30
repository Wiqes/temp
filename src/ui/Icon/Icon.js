import { iconsNames } from '@ui/Icon/iconsNames';

export const Icon = ({ iconName, fontSize = '18px', color, onClick, ...props }) => {
  const Component = iconsNames[iconName];
  return Component ? <Component style={{ fontSize, color }} onClick={onClick} {...props} /> : null;
};
