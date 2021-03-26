import * as roles from './roles';
import * as permissions from './permissions';

export const rolePermissions = {
  [roles.hrbp]: [permissions.createPositionWithApprovalRequest],
  [roles.budgetOwner]: [
    permissions.createPositionWithoutApproval,
    permissions.grantPositionApproval,
    permissions.closePosition,
  ],
  [roles.admin]: Object.values(permissions),
};
