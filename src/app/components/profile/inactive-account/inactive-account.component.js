import template from './inactive-account.html';
import controller from './inactive-account.controller';
import './inactive-account.scss';

export default {
  bindings: {
    showInactiveAccountForm: '=',
  },
  template,
  controller,
};
