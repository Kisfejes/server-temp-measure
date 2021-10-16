const bme280 = require('bme280');

bme280.open({ i2cAddress: '0x77' }).then(async sensor => {
  console.log(await sensor.read());
  await sensor.close();
}).catch(console.log);