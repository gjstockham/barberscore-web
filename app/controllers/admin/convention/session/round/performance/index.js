import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  judgeSortProperties: ['kind', 'category','slot',],
  sortedJudges: Ember.computed.sort(
    'model.round.session.judges',
    'judgeSortProperties'
  ),
  songSortProperties: ['order',],
  sortedSongs: Ember.computed.sort(
    'model.songs',
    'songSortProperties'
  ),
  performanceSortProperties: [
    'slot',
  ],
  sortedItems: Ember.computed.sort(
    'model.round.performances',
    'performanceSortProperties'
  ),
  actions: {
    previousItem(sortedItems, cursor) {
      let nowCur = sortedItems.indexOf(cursor);
      let newCur = sortedItems.objectAt(nowCur-1);
      this.transitionToRoute('admin.convention.session.round.performance', newCur);
    },
    nextItem(sortedItems, cursor) {
      let nowCur = sortedItems.indexOf(cursor);
      let newCur = sortedItems.objectAt(nowCur+1);
      this.transitionToRoute('admin.convention.session.round.performance', newCur);
    },
    savePerformance() {
      this.model.save()
      .then(response => {
        response.get('songs').invoke('save');
      })
      .catch(response => {
        console.log(response);
      });
    },
    saveSong(song, submission) {
      song.set('chart', submission.get('chart'));
      song.save();
    },
    startPerformance() {
      this.model.start()
      .then(response => {
        this.store.pushPayload('performance', response);
      })
      .catch(response => {
        console.log(response);
      });
    },
    finishPerformance() {
      this.model.finish()
      .then(response => {
        this.store.pushPayload('performance', response);
      })
      .catch(response => {
        console.log(response);
      });
    },
    completePerformance() {
      this.model.complete()
      .then(response => {
        this.store.pushPayload('performance', response);
      })
      .catch(response => {
        console.log(response);
      });
    },
  },
});
