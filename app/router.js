import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('faq');
  this.route('conventions', { path: '/convention/' });

  this.route('convention', { path: '/convention/:convention_id' }, function() {
    this.route('session', { path: '/:session_id' }, function() {
      this.route('round', { path: '/:round_id' }, function() {
      });
    });
  });
});

export default Router;
