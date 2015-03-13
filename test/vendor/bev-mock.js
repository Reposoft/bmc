// mock bev module
window.bev = {
  mixin: function(o) {
    return _.extend(o, Backbone.Events);
  }
};
