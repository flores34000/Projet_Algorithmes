//2.3.4. Exercice 4
    //Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
    
    function westView( arr, n)
    {
       //initialize le compteur à  1 (il y en aura tjs au moins 1)
        let count = 1;
        // Start traversing element
        let curr_max = arr[0];
        for (let i = 1; i < n; i++) {
            // If curr_element is maximum
            // or current element is
            // equal, update maximum and increment count
            if (arr[i] < curr_max || arr[i] == curr_max) {
                count++;
                curr_max = arr[i];
            }
        }
     
        return count;
    }
           
    let arr1 = [3, 7, 8, 3, 6, 1];
    let arr2 = [1, 4, 5, 8];
    console.log(westView( arr1, arr1.length))
    console.log(westView( arr2, arr2.length))
     


 
  
  
      
     
      
