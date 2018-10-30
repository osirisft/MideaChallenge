let expect = require("chai").expect;
let UnitModel = require("../../src/main/model/unitModel");

describe("UT for unitModel", function() {
    it("should be invalid if measureUnit is empty", function(done) {
        let model = new UnitModel();
        model.validate(function(err) {
            expect(err.errors.measureUnit).to.exist;
            done();
        });
    });
});
