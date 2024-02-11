var inp = document.getElementById('display');
const btn = document.getElementsByClassName('btn');
const operators = document.getElementsByClassName('operators');
const answer = document.getElementById('answer');
let backEndVal = '';


// Adding value in display box when user click the button
for(let i=0; i<btn.length; i++){
    
    btn[i].addEventListener('click',()=>{
        if(inp.value.includes('NaN')){
            inp.value = '';
            backEndVal = '';
        }
        let inpLength = inp.value.length === 0;
        let btnVal = btn[i].value;

        if(btnVal === '%' && inpLength || btnVal === 'C' && inpLength || btnVal === 'X' && inpLength || btnVal === '÷' && inpLength || btnVal === '×' && inpLength || btnVal === '-' && inpLength || btnVal === '+' && inpLength || btnVal === '=' && inpLength || btnVal === '.' && inpLength){
            inp.placeholder = 'First click digits';
            setTimeout(()=>{
                inp.placeholder = '0';
            },1000)
        }
        else{

            if(btnVal == 'C'){
                inp.value = '';
                backEndVal = inp.value;
            }
            else if(btnVal == 'X'){
                let makeArr1 = Array.from(inp.value);
                makeArr1.pop();
                makeArr1 = makeArr1.join('');
                inp.value = makeArr1;

                let makeArr2 = Array.from(btnVal);
                makeArr2.pop();
                makeArr2 = makeArr2.join('');
                btnVal = makeArr2;

            }
            else{
                inp.value += btnVal;
                backEndVal = inp.value;
            }
           
        }


    });
};









// Output
answer.addEventListener('click',()=>{
    if(backEndVal.includes('÷')){
        backEndVal = backEndVal.replaceAll('÷','/');
    }
    else if(backEndVal.includes('×')){
        backEndVal = backEndVal.replaceAll('×','*');
    }
    let makeArr = Array.from(backEndVal);
    // REMINDER
    if(backEndVal.includes('%')){
        let indexOf = makeArr.indexOf('%');
        let sliceBefore = makeArr.slice(0,indexOf);
        let sliceAfter = makeArr.slice(indexOf+1);
        
        let num1 = Number(sliceBefore.join(''))
        let num2 = Number(sliceAfter.join(''))

        let ans = num1 % num2;
        inp.value = ans;
    }
    // DIVISION
    if(backEndVal.includes('/')){
        let indexOf = makeArr.indexOf('/');
        let sliceBefore = makeArr.slice(0,indexOf);
        let sliceAfter = makeArr.slice(indexOf+1);
        
        let num1 = Number(sliceBefore.join(''))
        let num2 = Number(sliceAfter.join(''))

        let ans = num1 / num2;
        inp.value = ans;
    }
    // MULTIPLY
    if(backEndVal.includes('*')){
        let indexOf = makeArr.indexOf('*');
        let sliceBefore = makeArr.slice(0,indexOf);
        let sliceAfter = makeArr.slice(indexOf+1);
        
        let num1 = Number(sliceBefore.join(''))
        let num2 = Number(sliceAfter.join(''))

        let ans = num1 * num2;
        inp.value = ans;
    }
    // MINUS
    if(backEndVal.includes('-')){
        let indexOf = makeArr.indexOf('-');
        let sliceBefore = makeArr.slice(0,indexOf);
        let sliceAfter = makeArr.slice(indexOf+1);
        
        let num1 = Number(sliceBefore.join(''))
        let num2 = Number(sliceAfter.join(''))

        let ans = num1 - num2;
        inp.value = ans;
    }
    // PLUS
    if(backEndVal.includes('+')){
        let indexOf = makeArr.indexOf('+');
        let sliceBefore = makeArr.slice(0,indexOf);
        let sliceAfter = makeArr.slice(indexOf+1);
        
        let num1 = Number(sliceBefore.join(''))
        let num2 = Number(sliceAfter.join(''))

        let ans = num1 + num2;
        inp.value = ans;
    }
    

});
