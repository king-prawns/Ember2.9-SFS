import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('users');
  this.route('posts');
  this.route('user', function() {
      this.route('detail', {path: ':detail_id'}, function() {
            this.route('todos');
      });
  });
});

export default Router;
