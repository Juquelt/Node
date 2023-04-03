//### 01 Exercice
//
// 1. Créer un petit jeu en console : on doit deviner un nombre compris entre 1 et 100. Si l'utilisateur propose un nombre plus petit on lui indique qui l'est plus grand et réciproquement.
//
// 2. L'utilisateur à 10 tentatives pour deviner le nombre caché, après le jeu s'arrête. Si l'utilisateur trouve le nombre avant cette borne, le jeu s'arrête également.
//
// 3. Pensez à gérer également les erreurs de saisi dans le jeu.

const num = Math.floor(Math.random() * 100) + 1;
const count = 0;

function Game() {
    const choose = document.form1.devine1.value;
    count++;
    const status = "Nombre d'essais : " + count;
    if (choose < num)
        document.form1.indice.value = "Non, le nombre est plus grand.";
    if (choose > num)
        document.form1.indice.value = "Non, le nombre est plus petit.";
    if (choose == num) {
        window.alert("Correct ! Vous avez trouvé en " + count + "essais.");
        location.reload();
    }
    if (count == 10) {
        window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
        location.reload();
    }
}