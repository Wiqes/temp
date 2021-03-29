import * as permissions from '@constants/permissions';

import { Headcount } from '@components/Headcount/Headcount';
import { Employees } from '@components/Employees/Employees';
import { Plan } from '@components/Plan/Plan';
import { Positions } from '@components/Positions/Positions';
import { Teams } from '@components/Teams/Teams';
import { SystemUsers } from '@components/SystemUsers/SystemUsers';
import { Login } from '@pages/Login/Login';
import { ForgotPassword } from '@pages/ForgotPassword/ForgotPassword';

import * as paths from './paths';

export const login = {
  path: paths.login,
  title: 'Login',
  component: Login,
  icon: null,
  authenticated: false,
  permission: null,
};
export const forgotPassword = {
  path: paths.forgotPassword,
  title: 'Forgot Password',
  component: ForgotPassword,
  icon: null,
  authenticated: false,
  permission: null,
};
export const headcount = {
  path: paths.headcount,
  title: 'Headcount',
  component: Headcount,
  icon: 'Explore',
  authenticated: true,
  permission: null,
};
export const plan = {
  path: paths.plan,
  title: 'Plan',
  component: Plan,
  icon: 'Assignment',
  authenticated: true,
  permission: null,
};
export const employees = {
  path: paths.employees,
  title: 'Employees',
  component: Employees,
  icon: 'User',
  authenticated: true,
  permission: null,
};
export const positions = {
  path: paths.positions,
  title: 'Positions',
  component: Positions,
  icon: 'BlackTie',
  authenticated: true,
  permission: null,
};
export const teams = {
  path: paths.teams,
  title: 'Teams',
  component: Teams,
  icon: 'Group',
  authenticated: true,
  permission: permissions.crudTeam,
};
export const systemUsers = {
  path: paths.systemUsers,
  title: 'System Users',
  component: SystemUsers,
  icon: 'UserCircle',
  authenticated: true,
  permission: permissions.crudSystemUser,
};
