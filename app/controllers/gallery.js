import Ember from 'ember';
 
export default Ember.Controller.extend({
  items: [
    {
      src: 'assets/ph/1.jpg',
      w: 1024,
      h: 768,
    },
    {
      src: 'assets/ph/3.jpg',
      w: 768,
      h: 1024,
    },
    {
      src: 'assets/ph/4.jpg',
      w: 768,
      h: 768,
    },
  ]
});