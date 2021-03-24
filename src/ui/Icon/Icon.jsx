import React from 'react';

import { icons } from 'constants/icons';

const Icon = ({ iconName, ...props }) => {
  const Component = icons[iconName];
  return Component ? <Component style={{ fontSize: '18px' }} {...props} /> : null;
};

export { Icon };
