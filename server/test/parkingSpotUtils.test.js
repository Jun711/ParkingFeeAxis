var expect = require('chai').expect;
var parkingSpotUtils = require('../util/parkingSpotUtils');
var mockPreParkingSpots = require('./mockData/preProcessedParkingSpots');
var mockPostParkingSpots = require('./mockData/postProcessedParkingSpots');

describe('processParkingSpotDescription test', function () {
  it('should remove br tags and add rateByTime properties', function () {

    var preProcessedParkingSpots = mockPreParkingSpots.parkingSpots;
    var postProcessedParkingSpots = mockPostParkingSpots.parkingSpots;

    var processedParkingSpots = parkingSpotUtils.processParkingSpotDescription(preProcessedParkingSpots);

    expect(processedParkingSpots[0].properties.id).to.be.equal(postProcessedParkingSpots[0].properties.id);
    expect(processedParkingSpots[0].properties.type).to.be.equal(postProcessedParkingSpots[0].properties.type);
    expect(processedParkingSpots[0].properties.description).to.be.equal(postProcessedParkingSpots[0].properties.description);
    expect(processedParkingSpots[0].properties).to.deep.include({"weekdayOfficeHourRate": "2.50"});
    expect(processedParkingSpots[0].properties).to.deep.include({"freeParking": "0"});
  });
});