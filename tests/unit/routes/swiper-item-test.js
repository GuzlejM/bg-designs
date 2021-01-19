import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | swiper-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:swiper-item');
    assert.ok(route);
  });
});
