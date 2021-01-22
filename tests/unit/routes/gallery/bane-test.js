import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gallery/bane', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gallery/bane');
    assert.ok(route);
  });
});
