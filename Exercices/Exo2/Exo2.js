// 2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.

const fs = require('fs');

try{
    const data = fs.readFileSync('students.txt', 'utf8');
    const arr = {};



    console.log(data);
}catch (err){
    console.error(err)
};