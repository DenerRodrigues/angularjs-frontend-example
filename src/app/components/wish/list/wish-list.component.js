import template from './wish-list.html';
import controller from './wish-list.controller';
import './wish-list.scss';

export default {
  bindings: {
    showForm: '=',
    wishSelected: '=',
  },
  template,
  controller,
};
