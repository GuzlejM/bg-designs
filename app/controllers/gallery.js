import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      class:"col-start-1 row-span-3 col-span-4",
      src: 'assets/ph/1.jpg',
      w: 768,
      h: 768,
    },
    // {
    //   class:"col-start-5 row-span-3 col-span-2",
    //   src: 'assets/ph/3.jpg',
    //   w: 768,
    //   h: 768,
    // },
    {
      class:"col-start-1 row-span-2 col-span-3 self-center",
      src: 'assets/ph/4.jpg',
      w: 768,
      h: 768,
    },
    {
      class:"col-start-4 row-span-2 col-span-3",
      src: 'assets/ph/2.jpg',
      w: 768,
      h: 768,
    },
    {
      class:"col-start-1 row-span-1 col-span-2",
      src: 'assets/ph/5.jpg',
      w: 768,
      h: 768,
    },
    {
      class:"col-start-3 row-span-1 col-span-2",
      src: 'assets/ph/6.jpg',
      w: 768,
      h: 768,
    },
    {
      class:"col-start-5 row-span-1 col-span-2",
      src: 'assets/ph/8.jpg',
      w: 768,
      h: 768,
    },
    {
      class:"col-start-1 row-span-1 col-span-6",
      src: 'assets/ph/7.jpg',
      w: 768,
      h: 768,
    }
  ]
});