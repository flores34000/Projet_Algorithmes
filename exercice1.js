// 2.3.1. Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra  
// comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

// tri à bulles
const resultSum = (array, number) => {  //pour le premier tour
    for (let i = 0; i < array.length; i++) { // i = array[0]
        for (let j = i + 1; j < array.length; j++) { // et va être comparer à j= array[1],[2],[3]
            if (array[i] + array[j] === number) return true; //si une match ça retourne true
        }                                           // sinon ça repart sur la premiere boucles 
        return false                               // avec i = array[1] va être comparer à j= array[2],[3]
    }                                             // ... et si rien ne match après tous les tours
  }                                              // ça retourne false
    
  
  
  console.log(resultSum([10, 15, 3, 7], 17));
  console.log(resultSum([1, 8, 10, 21], 21));
