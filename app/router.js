import EmberRouter from '@ember/routing/router';
import config from 'bg/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('gallery', function() {
    this.route('bane');
    this.route('fono');
    this.route('selec');
    this.route('c1');
    this.route('chill');
    this.route('ghetto');
    this.route('kids');
    this.route('ludo');
    this.route('paul');
    this.route('raja');
  });
});
