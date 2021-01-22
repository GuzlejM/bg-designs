import EmberRouter from '@ember/routing/router';
import config from 'bg/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('gallery', function() {
    this.route('bane', { path: '/Bottle-Bane' });
    this.route('fono', { path: '/Bathroom-Fono' });
    this.route('selec', { path: '/Bathroom-Selec' });
    this.route('c1', { path: '/Bench-C1' });
    this.route('chill', { path: '/Chillout-Zone' });
    this.route('ghetto', { path: '/Toy-Ghetto' });
    this.route('kids', { path: '/Kids-room' });
    this.route('ludo', { path: '/Stool-Ludo' });
    this.route('paul', { path: '/House-Paulen' });
    this.route('raja', { path: '/Chair-Raja' });
  });
});
