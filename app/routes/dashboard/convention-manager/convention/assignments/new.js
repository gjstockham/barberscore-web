import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').createRecord('assignment', {
      'status': 'Active',
      'convention': this.modelFor('dashboard.convention-manager.convention'),
    });
  },
});