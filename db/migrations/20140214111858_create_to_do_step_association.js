var CreateToDoStepAssociation = function () {
  this.up = function (next) {
    this.addColumn('steps', 'toDoId', 'string', function (err, data) {
      if (err) { throw err; }
      next();
    });
  };

  this.down = function (next) {
    this.removeColumn('steps', 'toDoId', function (err, data) {
      if (err) { throw err; }
      next();
    });
  };
};

exports.CreateToDoStepAssociation = CreateToDoStepAssociation;