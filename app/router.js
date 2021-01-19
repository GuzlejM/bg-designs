import EmberRouter from '@ember/routing/router';
import config from 'bg/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('gallery');
  this.route('swiper-item');
  this.route('swiper');
});
