// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//Solution

function bmi(weight, height) {
    let totalBMI = weight / Math.pow(height, 2)
    if(totalBMI <= 18.5){
      return "Underweight"
    }else if(totalBMI <= 25.0){
      return "Normal"
    }else if(totalBMI <= 30.0){
      return "Overweight"
    }else(totalBMI > 30)
      return "Obese"
   }