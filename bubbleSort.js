let scores  = [60,50,95,80,70];

for  (var i = 0; i < scores.length; i++ ) {
    console.log(scores[i]);

    if (scores[i] > scores[i+1]) {
        var temp = scores[i];
        scores[i] = scores[i+1];
        scores[i+1] = temp;
      
    }


}

console.log(scores);





//output
//lowest -> highest