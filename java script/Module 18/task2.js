var weight = 64;
var hight = 1.7;
const bmi = weight / hight ** 2;
if(bmi < 18.5){
    console.log("You are under weight")
} else if(bmi >= 18.5 && bmi <= 24.5){
    console.log("You are Normal")
} else if(bmi >= 25 && bmi <=29.9){
    console.log("You are over Weight");
} else{
    console.log("You are obese");
}