
const { crearArchibo } = require(`./helpers/multiplicar`);
const argv = require(`./config/yargs`);

require ('colors'); 


console.clear();


crearArchibo( argv.b, argv.l, argv.h )
    .then( nombreArchibo => console.log(nombreArchibo.rainbow,`creado`))
    .catch( err => console.log(err) );





































