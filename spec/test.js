// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

var myCar;

describe('Car', function(){

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car("Tesla", "Model D", 2015, "Black");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(2015);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  }); 

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.be.empty;
    });
  });

  describe('#currentOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.be.empty;
    });
  });

  describe('#sale', function(){
    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Billy");
      expect(myCar.previousOwners).to.eql(["manufacturer"]);
    });
    it('should update currentOwner with the new owner', function(){
      myCar.sale("Billy");
      expect(myCar.currentOwner).to.equal("Billy");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("rocket red");
      expect(myCar.color).to.equal("rocket red");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      myCar.off();
      expect(myCar.park()).to.equal("parked!!");
    });

  });

  describe('#pick_up', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pick_up("Flora");
      expect(myCar.passengers).to.eql(["Flora"]);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off();
      myCar.pick_up("Winston");
      expect(myCar.passengers).to.eql(["Flora"]);
    });
  });

  describe('#drop_off', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.pick_up("Phillip");
      myCar.pick_up("Monique");
      myCar.drop_off("Monique");
      expect(myCar.passengers).to.eql(["Phillip"]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pick_up("Phillip");
      myCar.pick_up("Monique");
      myCar.off();
      myCar.drop_off("Phillip");
      expect(myCar.passengers).to.eql(["Phillip","Monique"]);
    });
  });

});