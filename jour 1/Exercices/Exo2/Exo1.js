//1. Lisez le fichier à l'aide de la méthode asynchrone.

const fs = require('fs');

fs.readFile('students.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

// 1.(bis) Pour la suite utilisez l'approche synchrone afin de récupérer les données que vous pourrez exploiter par la
// suite dans le script.

try{
    const data = fs.readFileSync('students.txt', 'utf8');
    console.log(data);
}catch (err){
    console.error(err)
};