Meteor.publish('theTodos', function() {
  //check(listId, String);

  return Todos.find({userid: this.userId});
});

Meteor.publish('userData', function () { return Meteor.users.find({_id: this.userId }, {fields: {profile: 1, services: 1}}); });
