let scores = [60,50,95,80,70];



let minValue = scores[0];
for (let i = 0; i < scores.length; i++)  {

  if (minValue > scores[i]) {
    minValue = scores[i]
  }


}

console.log(`The minimum value is: ${minValue}`);
