require('colors');

const mostrarMenu = () => {

 console.clear();
 console.log(' Seleccione una opcion \n'.bgRed);
 


 console.log(`${'1.'.red } Crear tarea`)
 console.log(`${'2.'.red } Listar tareas `)
 console.log(`${'3.'.red } Listar tareas completadas`)
 console.log(`${'4.'.red } Listar tareas pendientes`)
 console.log(`${'5.'.red } Marcar tareas como completadas`)
 console.log(`${'6.'.red } Borrar tareas`)
 console.log(`${'0.'.red } Salir \n`)

 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
 });

 readline.question('Seleccione una opcion: ', (opt) => {
    console.log({opt});
    readline.close();
 })

}



module.exports = {
    mostrarMenu
}