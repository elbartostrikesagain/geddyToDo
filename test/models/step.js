var assert = require("assert"), 
    Step = geddy.model.Step;

describe('Step', function(){
  describe('validations', function(){
    it('should not save when title is less than 4 chars', function(){
      var step = Step.create({title: "fail", status: "open"})
      step.save(function (err, data) {
        assert.equal(err["title"], "\"title\" must be at least 5 characters long.");
      })
    })

    it('should not save when status is other', function(){
      var step = Step.create({title: "valid title", status: "other"})
      step.save(function (err, data) {
        assert.equal(err["status"], "Status must be 'open' or 'done.'");
      })
    })
  })
})