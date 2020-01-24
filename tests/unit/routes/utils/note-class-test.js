import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | utils/note-class', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:utils/note-class');
    assert.ok(route);
  });
});
