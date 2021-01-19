import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | swiper', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:swiper');
    assert.ok(route);
  });
});
