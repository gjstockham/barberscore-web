import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    var map = {
      0: 'New',
      5: 'Invited',
      7: 'Declined',
      10: 'Submitted',
      20: 'Approved',
      30: 'Rejected',
      40: 'Withdrew',
      50: 'Verified',
      52: 'Scratched',
      55: 'Disqualified',
      57: 'Started',
      60: 'Finished',
      70: 'Completed',
      90: 'Announced',
    };
    return map[serialized];
  },

  serialize: function(deserialized) {
    var map = {
      'New': 0,
      'Invited': 5,
      'Declined': 7,
      'Submitted': 10,
      'Approved': 20,
      'Rejected': 30,
      'Withdrew': 40,
      'Verified': 50,
      'Scratched': 52,
      'Disqualified': 55,
      'Started': 576,
      'Finished': 60,
      'Completed': 70,
      'Announced': 90,
    };
    return map[deserialized];
  }
});
