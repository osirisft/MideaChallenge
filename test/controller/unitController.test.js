const expect = require("chai").expect;
const sinon = require("sinon");
const mocks = require('node-mocks-http');

let UnitModel = require("../../src/main/model/unitModel");
let UnitController = require("../../src/main/controller/unitController");

describe("UT for unitController", function() {
  describe("'index' method of unitController", function() {
    beforeEach(function() {
      sinon.stub(UnitModel, "find");
    });

    afterEach(function() {
      UnitModel.find.restore();
    });

    it("should send all units", function() {
      let a = {
        measureUnit: "1",
        unitTxt: "txt"
      };
      let b = {
        measureUnit: "2",
        unitTxt: "txt"
      };
      let expectedModels = [a, b];
      UnitModel.find.yields(null, expectedModels);

      let req = {
        params: {}
      };
      let res = mocks.createResponse();
      // let res = { json:sinon.stub()};
      UnitController.index(req, res);
      // console.log(JSON.parse( res._getData()));
      // sinon.assert.calledWith(res.json, expectedModels);
      expect(JSON.parse(res._getData()).data).to.deep.equal(expectedModels);
    });

    it("should return error", function() {
      let expectedModels = {
        status: "500",
        message: "Error",
      }
      UnitModel.find.yields("Error", null);

      let req = {
        params: {}
      };
      let res = {
        json: sinon.stub()
      };
      UnitController.index(req, res);
      sinon.assert.calledWith(res.json, expectedModels);
    });
  })

  describe("'new' method of unitController", function() {
    let mongoose = require('mongoose');
    let saveStub;

    beforeEach(function() {
      saveStub = sinon.stub(mongoose.Model.prototype, 'save');
    });

    afterEach(function() {
      saveStub.restore();
    });


    it("should create new unit", function() {
      saveStub.yields(null);
      let req = {
        body: {
          measureUnit: "1",
          unitTxt: "txt"
        }
      };
      let res = mocks.createResponse();
      UnitController.new(req, res);
      expect(JSON.parse(res._getData()).data.measureUnit).to.equal("1");
      expect(JSON.parse(res._getData()).data.unitTxt).to.equal("txt");
    });

    it("should return error", function() {
      let expectedModels = {
        status: "500",
        message: "Error",
      };
      saveStub.yields("Error");
      let req = {
        body: {
          measureUnit: "1",
          unitTxt: "txt"
        }
      };
      let res = {
        json: sinon.stub()
      };
      UnitController.new(req, res);
      sinon.assert.calledWith(res.json, expectedModels);
    });
  })

  describe("'delete' method of unitController", function() {
    let mongoose = require('mongoose');
    let delStub;
    beforeEach(function() {
      delStub = sinon.stub(UnitModel, 'remove');
    });

    afterEach(function() {
      delStub.restore();
    });


    it("should delete a unit", function() {
      delStub.yields(null);
      let expect = {
        status: "200",
        message: "Unit deleted"
      };
      let req = {
        params: {
          measureUnit: "1"
        }
      };
      let res = {
        json: sinon.stub()
      };
      UnitController.delete(req, res);
      sinon.assert.calledWith(res.json, expect);
    });

    it("should return error", function() {
      delStub.yields("Error");
      let expect = {
        status: "500",
        message: "Error"
      };
      let req = {
        params: {
          measureUnit: "1"
        }
      };
      let res = {
        json: sinon.stub()
      };
      UnitController.delete(req, res);
      sinon.assert.calledWith(res.json, expect);
    });
  })

});
