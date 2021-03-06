import Ember from 'ember';
import Model from 'ember-data/model';
import DS from 'ember-data';
import {memberAction} from 'ember-api-actions';
const {computed} = Ember;

export default Model.extend({
  nomen: DS.attr('string'),
  status: DS.attr('appearance-status'),
  num: DS.attr('number'),
  draw: DS.attr('number'),
  actualStart: DS.attr('date'),
  actualFinish: DS.attr('date'),
  isAdvancing: DS.attr('boolean'),
  rank: DS.attr('number'),
  musPoints: DS.attr('number'),
  perPoints: DS.attr('number'),
  sngPoints: DS.attr('number'),
  totPoints: DS.attr('number'),
  musScore: DS.attr('number'),
  perScore: DS.attr('number'),
  sngScore: DS.attr('number'),
  totScore: DS.attr('number'),
  varPdf: DS.attr('string'),

  round: DS.belongsTo('round', {async: true}),
  entry: DS.belongsTo('entry', {async: true}),
  slot: DS.belongsTo('slot', {async: true}),
  songs: DS.hasMany('song', {async: true}),
  permissions: DS.attr(),

  scratch: memberAction({path: 'scratch'}),
  start: memberAction({path: 'start', type: 'post'}),
  verify: memberAction({path: 'verify', type: 'post'}),
  finish: memberAction({path: 'finish', type: 'post'}),
  confirm: memberAction({path: 'confirm', type: 'post'}),
  complete: memberAction({path: 'complete', type: 'post'}),
  printVar: memberAction({path: 'print_var', type: 'post'}),

  statusOptions: [
    'New',
    'Validated',
    'Started',
    'Finished',
    'Confirmed',
    'Flagged',
    'Cleared',
    'Announced',
  ],


  entryTotPoints: Ember.computed.alias(
    'entry.totPoints'
  ),
  entryRank: Ember.computed.alias(
    'entry.rank'
  ),
  isAdvancer: Ember.computed.gt(
    'draw',
    0,
  ),
  isFinisher: Ember.computed.lt(
    'draw',
    0,
  ),
  slotNum: Ember.computed.alias(
    'slot.num'
  ),
  repertoriesFiltered: Ember.computed.alias(
    'entry.group.repertories'
  ),
  chartsMapped: Ember.computed.mapBy(
    'repertoriesFiltered',
    'chart'
  ),
  chartOptionsProperties: [
    'title',
  ],
  chartOptions: Ember.computed.sort(
    'chartsMapped',
    'chartOptionsProperties'
  ),
  // totSongsPoints: computed.mapBy(
  //   'songs',
  //   'totPoints',
  // ),
  // totSongsCount: computed.mapBy(
  //   'songs',
  //   'totCount',
  // ),
  // totPoints: computed.sum(
  //   'totPoints',
  // ),
  // totCount: computed.sum(
  //   'totCount',
  // ),
  // totScore: Ember.computed(
  //   'totPoints',
  //   'totCount',
  //   function() {
  //       return (this.get('totPoints') / this.get('totCount')).toFixed(1);
  //     }
  //  ),

  tp: computed.mapBy(
    'songs',
    'totPoints'
  ),
  tc: computed.mapBy(
    'songs',
    'totCount'
  ),
  totPointsCP: computed.sum(
    'tp'
  ),
  stc: computed.sum(
    'tc'
  ),
  totScoreCP: computed(
    'totPoints',
    'stc',
    function() {
      return (this.get('totPoints') / this.get('stc')).toFixed(1);
    }
  ),
  mp: computed.mapBy(
    'songs',
    'musPoints'
  ),
  mc: computed.mapBy(
    'songs',
    'musCount'
  ),
  musPointsCP: computed.sum(
    'mp'
  ),
  smc: computed.sum(
    'mc'
  ),
  musScoreCP: computed(
    'musPoints',
    'smc',
    function() {
      return (this.get('musPoints') / this.get('smc')).toFixed(1);
    }
  ),
  pp: computed.mapBy(
    'songs',
    'perPoints'
  ),
  pc: computed.mapBy(
    'songs',
    'perCount'
  ),
  perPointsCP: computed.sum(
    'pp'
  ),
  spc: computed.sum(
    'pc'
  ),
  perScoreCP: computed(
    'perPoints',
    'spc',
    function() {
      return (this.get('perPoints') / this.get('spc')).toFixed(1);
    }
  ),
  sp: computed.mapBy(
    'songs',
    'sngPoints'
  ),
  sc: computed.mapBy(
    'songs',
    'sngCount'
  ),
  sngPointsCP: computed.sum(
    'sp'
  ),
  ssc: computed.sum(
    'sc'
  ),
  sngScoreCP: computed(
    'sngPoints',
    'ssc',
    function() {
      return (this.get('sngPoints') / this.get('ssc')).toFixed(1);
    }
  ),
});
