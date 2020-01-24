import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hello');
  this.route('user');
  this.route('client', function() {
    this.route('details');
  });
  this.route('ex1');

  this.route('utils', function() {
    this.route('note-class');
  });
});

export default Router;
