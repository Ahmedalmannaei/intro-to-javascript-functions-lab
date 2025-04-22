// Excercise 1
const maxOfTwoNumbers = (x,y) =>{
    if(x>=y){
        return x;
    }
    else{
        return y;
    }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(10, 9));

//Excercise 2

const isAdult = (age)=>{
    if(age>=18){
        return 'Adult';
    }
    else{
        return 'Minor';
    }
}
console.log('Exercise 2 Result:', isAdult(18));

//Excercise 3 
const isCharAVowel= (Char)=>{
    if(Char ==='a'||Char ==='e'||Char ==='i'||Char ==='o'||Char ==='u'||Char ==='A'||Char ==='E'||Char ==='I'||Char ==='O'||Char ==='U'){
        return "Char is a vowel";
    }
    else{
        return "Char is not a vowel";
    }
}
console.log('Exercise 3 Result:', isCharAVowel("A"));

//Excercise 4

const generateEmail = (fullName,domain)=>{
    return `${fullName}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//Excercise 5
const greetUser = (user,timeOfDay)=>{
    if(timeOfDay ==='morning'){
        return `"Good morning ${user}"`
    }
    else if(timeOfDay ==='afternoon'){
        return `Good afternoon ${user}`
    }
    else if (timeOfDay ==='night'){
        return `Good night ${user}`
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "night"));

//Excercise 6
const maxOfThree = (num1,num2,num3)=>{
    if (num1>= num2 && num1>=num3){
        return num1
    }
    else if(num2>= num1 && num2>=num3){
        return num2
    }
    else{
        return num3;
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 80));

//Excercise 7

const calculateTip =(bill,tipPercentage)=>{
    return bill*(tipPercentage/100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//Excercise 8

const convertTemp = (temp,unit)=>{
    if (unit ==="C"){
        return temp*(9/5)+32
    }
    else if(unit ==="F"){
        return (temp-32)*(5/9);
    }
}
console.log('Exercise 8 Result:', convertTemp(32, "C"));