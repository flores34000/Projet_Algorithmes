// 2.3.2. Exercice 2
    // Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

    const westView = (array) => {
        let count = 0;
            for (let i = 0; i < array.length; i++) { // pour array[i 0]
                for (let j = i + 1; j < array.length; j++) { //pour array[j 1]
                if (array[i] <= array[j]) {       // à chaque fois que array[i] > array[j] on sort de 
                    i = j                        //la seconde boucle et on rajoute a 1 à count
                }            //on repart sur la premiere boucle à partir de la valeur de i qui est égal à j
            }
            count++
            }
            return count;
        
      }
        
               
      console.log(westView([3, 7, 8, 3, 6, 1]));
      console.log(westView([1, 4, 5, 8])); 
    
        
        


