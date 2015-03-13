
var bmc = require('bmc');

module.exports = function test() {

  var MyModel = bmc.Model.extend({
    initialize: function() {
      this.set('initialized', true);
    }
  });

  var MyCollection = bmc.Collection.extend({
    model: MyModel
  });

  var c = new MyCollection();

  c.add({'test': true});

  return c;

};

if (window.console) {
  window.c = module.exports();
  console.log('running bmc', window.c);
}
