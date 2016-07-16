import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sortPerformersBy(performerSortProperties) {
      this.set('performerSortProperties', [performerSortProperties]);
    },
    penalizeEligibility(performer) {
      performer.penalizeEligibility();
    },
  },
  performerSortProperties: [
    'performer.totRank:asc',
    'group.nomen:asc',
  ],
  sortedPerformers: Ember.computed.sort(
    'model.performers',
    'performerSortProperties'
  ),
});
id