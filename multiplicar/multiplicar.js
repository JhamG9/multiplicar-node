// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite=10)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('El valor introducido '+base +' no es un numero');
            return;
        }else if(!Number(limite)){
            reject('El valor introducido para limite '+limite+" no es un numero");
            return;
        }else{
            let data ="";
            data +="============================== \n".red;
            data +=`Tabla del ${base} \n`.red;
            data +="============================== \n".red;
            for(let i =1; i <=limite; i++){
                data += `${ base } * ${i} = ${base *i} \n`;
            }
            resolve(data.blue);
        }

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido ' + base + " no es un numero");
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla,
}
