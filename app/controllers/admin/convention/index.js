import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    editConvention() {
      this.set('isEditing', true);
    },
    cancelConvention() {
      this.model.rollbackAttributes();
      this.set('isEditing', false);
    },
    updateDate(start, end) {
      this.model.set('date.lower', start);
      this.model.set('date.upper', end);
    },
    saveConvention() {
      const flashMessages = Ember.get(this, 'flashMessages');
      this.model.save()
      .then(() => {
        this.set('isEditing', false);
        flashMessages.success('Saved');
      })
      .catch(() => {
        flashMessages.danger('Error');
      });
    },
    deleteParticipant(participant) {
      participant.destroyRecord();
    },
    deleteSession(session) {
      session.destroyRecord();
    },
    // startConvention() {
    //   this.model.start()
    //   .then(response => {
    //     this.store.pushPayload('convention', response);
    //   })
    //   .catch(response => {
    //     console.log(response);
    //   });
    // },
    // finishConvention() {
    //   this.model.finish()
    //   .then(response => {
    //     this.store.pushPayload('convention', response);
    //   })
    //   .catch(response => {
    //     console.log(response);
    //   });
    // },
  },
  sessionSortProperties: ['kind:asc',],
  sortedSessions: Ember.computed.sort(
    'model.sessions',
    'sessionSortProperties'
  ),
});
