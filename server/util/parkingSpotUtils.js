var processText = function (text) {
  let textArr = text.split('<br>');
  let weekdayOfficeHourRate = '0';
  let weekdayAfterOfficeRate = '0';
  let satOfficeHourRate = '0';
  let satAfterOfficeRate = '0';
  let sunOfficeHourRate = '0';
  let sunAfterOfficeRate = '0';
  let freeParking = '0';
  let doParsing = false;
  let parseDone = false;

  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] && !textArr[i].endsWith('\n'))
      textArr[i] += '\n';

    if (!parseDone && textArr[i] && textArr[i].startsWith('Rates'))
      doParsing = true;

    if (textArr[i] && textArr[i].startsWith('Effect')) {
      parseDone = true;
      doParsing = false;
    }

    if (doParsing) {
      if (textArr[i] && textArr[i].toLowerCase().startsWith('m-f 9am'))
        weekdayOfficeHourRate = textArr[i].substr(-5, 5).trim();

      if (textArr[i] && textArr[i].toLowerCase().startsWith('m-f 6pm'))
        weekdayAfterOfficeRate = textArr[i].substr(-5, 5).trim();

      if (textArr[i] && textArr[i].toLowerCase().startsWith('sat 9am'))
        satOfficeHourRate = textArr[i].substr(-5, 5).trim();

      if (textArr[i] && textArr[i].toLowerCase().startsWith('sat 6pm'))
        satAfterOfficeRate = textArr[i].substr(-5, 5).trim();

      if (textArr[i] && textArr[i].toLowerCase().startsWith('sun 9am'))
        sunOfficeHourRate = textArr[i].substr(-5, 5).trim();

      if (textArr[i] && textArr[i].toLowerCase().startsWith('sun 6pm'))
        sunAfterOfficeRate = textArr[i].substr(-5, 5).trim();
    }
  }

  let processedDescription = {
    description: textArr.join('').trim(),
    properties: {
      weekdayOfficeHourRate,
      weekdayAfterOfficeRate,
      satOfficeHourRate,
      satAfterOfficeRate,
      sunOfficeHourRate,
      sunAfterOfficeRate,
      freeParking
    }
  }

  return processedDescription
}

var processParkingSpotDescription = function (parkingSpots) {
  for (var i = 0; i < parkingSpots.length; i++) {
    var prop = parkingSpots[i].properties;
    var processDescription = processText(parkingSpots[i].properties.description);
    parkingSpots[i].properties.description = processDescription.description;
    parkingSpots[i].properties = Object.assign(prop, processDescription.properties);
  }

  return parkingSpots;
}

module.exports = {
  processParkingSpotDescription: processParkingSpotDescription
};