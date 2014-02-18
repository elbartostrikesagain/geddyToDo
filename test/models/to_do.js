var assert = require("assert"), 
    ToDo = geddy.model.ToDo;

describe('TODO', function(){
  describe('validations', function(){
    it('should not save when title is less than 4 chars', function(){
      var todo = ToDo.create({title: "fail", status: "open"})
      todo.save(function (err, data) {
        assert.equal(err["title"], "\"title\" must be at least 5 characters long.");
      })
    })

    it('should not save when status is other', function(){
      var todo = ToDo.create({title: "valid title", status: "other"})
      todo.save(function (err, data) {
        assert.equal(err["status"], "Status must be 'open' or 'done.'");
      })
    })
  })
})