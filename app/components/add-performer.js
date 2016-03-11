import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveRecord() {
      const flashMessages = Ember.get(this, 'flashMessages');
      // var organization = this.get('group').organization;
      // console.log(organization);
      var performer = this.get('store').createRecord('performer', {
        session: this.get('session'),
        group: this.get('group'),
      });
      performer.save()
      .then(() => {
        flashMessages.success('Success');
      })
      .catch(() => {
        flashMessages.danger('Error');
      });
    },
    searchGroup(term) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.run.debounce(this, this._performSearch, term, 'group', resolve, reject, 600);
      });
    },
    searchOrganization(term) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.run.debounce(this, this._performSearch, term, 'organization', resolve, reject, 600);
      });
    }
  },
  _performSearch(term, model, resolve, reject) {
    if (Ember.isBlank(term)) { return resolve([]); }
    this.get('store').query(model, {'name__icontains': term})
      .then(data => resolve(data), reject);
  }
});