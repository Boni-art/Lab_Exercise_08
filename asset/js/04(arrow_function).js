//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;
    es5.innerHTML = `The Sqrt is: ${arrowFun4.clickMe()}`;
    es6.innerHTML = `The Sqrt is: ${arrowFun5.clickMe2()}`;



})

//1. Replace the empty string with arrow function 

//2. An arrow function with full syntax
const arrowFun1 =(x, y) => {
    return x + y;
};

//3. A minimized arrow function [No return statement , no curly brace]
const arrowFun2 = (x, y) => x + y;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]
//5. The function will return the sqrt , use Math.sqrt(var);
const arrowFun3 = x => Math.sqrt(x);


let arrowFun4 = { 
    number: 4,
    clickMe: function (){
       var self = this;
       return Math.sqrt(self.number);
    }
}
let arrowFun5 = { 
    number: 16,
    clickMe2: () => {
       return Math.sqrt(this.number);
    }
}

