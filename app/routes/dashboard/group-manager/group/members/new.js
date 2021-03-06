import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').createRecord('member', {
      'status': 'Provisional',
      'group': this.modelFor('dashboard.group-manager.group'),
    });
  },
});
