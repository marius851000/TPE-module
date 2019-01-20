module.exports = function() {
  return gladys.param.getValue('tpe-led')
    .then(function(param){
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
            name: 'lighted',
            identifier: 'light',
            sensor: false,
            min: 0,
            max: 1,
          }
        ]
      };

      gladys.device.create(newDevice);
  })
};