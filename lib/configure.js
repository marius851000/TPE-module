module.exports = function() {

  var newDevice = {
    device: {
      name: 'MARIUS_LED',
      protocol: 'wire',
      service: 'marius_led',
      identifier: "tpe_led",
    },
    types: [
      {
        type: 'binary',
        category: 'lighted',
        sensor: false,
        min: 0,
        max: 1
      }
    ]
  };

  gladys.device.create(newDevice);
};
