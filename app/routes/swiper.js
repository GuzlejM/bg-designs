import Route from '@ember/routing/route';

export default class SwiperRoute extends Route {
  model() {
      return ["assets/paul.jpg", "assets/chill.jpg", "assets/kid.jpg", "assets/paul.jpg"];
    }
}
