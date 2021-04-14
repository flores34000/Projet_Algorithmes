const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
      console.error(error.message);
      return;
    }
    console.log(typeof data);
    // data.split(" ") permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes. et .map recréer un autre tableau et passe tous les items en integer avec parseInt
    const list = data.split(" ").map((num) => parseInt(num));
    console.log(`Liste à trier: ${list}`);
    
    insertionSort(list);
    selectSort(list);
    fusionSort(list)
   
   
   
  


// 1: recupere array[1] et le compare  a array[0]; (celui juste avant) si array[1] < array[0] on permute.
// 2: recupere array[2] et le compare  a array[1]; (celui juste avant) si array[2] < array[1] on permute...
function insertionSort(array){
    let count = 0;
    for (let i = 1; i < array.length; i++) { //commence à 1 pour recuperer array[1]
        let j = i - 1 // commence avec la case juste avant la case en cours
        let tmp = array[i] //memorise la valeur en cour
        // on compare la case en cours aux cases précédentes tant qu'elle est plus petite
        while (j >= 0 && array[j] > tmp) {
            array[j + 1] = array[j]  //decale la case tester (j) vers la droite (j+1)
            j--  //passe à la case précédente
            count++
        }
        array[j+1] = tmp  //on sort de la boucle et la valeur est à la bonne place
      }
      console.log(`- tri par insertion: ${count}  comparaison  resultat: ${array}`);
    return array
}

// cherche le plus petit element de l'array et echange avec element array[0], puis recommence.
// cherche le plus petit element de l'array et echange avec element array[1], puis recommence...
function selectSort(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      let min = i; // i est la variable minimal à chaque tour
  
      for (let j = i + 1; j < array.length; j++) {
        count++;
        if (array[j] < array[min]) {
          min = j;
        }
      }
      // console.log(array);
      [array[i], array[min]] = [array[min], array[i]]; //place le plus petit element trouvé
    }
    console.log(`- tri par selection:  ${count} comparaison  resultat: ${array}`);
    return array;
  }

//   1. Sélectionner le milieu du tableau.
//   2.  a. Faire une récursion sur la partie gauche.
//   2.  b. Faire une récursion sur la partie droite.
//   3. Fusionner les deux séquences.
  
function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
// fonction qui prendra dans un tableau et qui renvoie le tableau trié
function fusionSort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2); //coupe le tableau en 2
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(fusionSort(leftArr), fusionSort(rightArr));
    
  }
}

console.log(`- tri par fusion:      comparaison  resultat: ${fusionSort(list)}`);

});