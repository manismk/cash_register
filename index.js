var btnAction=document.querySelector('.action');
var customer=document.querySelector('.customer');
var customerAmount=document.querySelector('#customerAmount');
var billamount=document.querySelector('#billamount');

var resultText=document.querySelector('.resultText');

btnAction.addEventListener('click',()=>{
  if(btnAction.innerText==='Next'){
    if(isaNummber(Number(billamount.value))){
      customer.classList.remove('hidden');
      btnAction.innerHTML='Check'
    }else{
      resultText.innerHTML='Enter Valid Integer Bill amount'
    }
  }
  else if(btnAction.innerText==='Check'){
    if(isaNummber(Number(billamount.value)) && isaNummber(Number(customerAmount.value))){
      if((Number(billamount.value))-(Number(customerAmount.value))===0){
        resultText.innerText=`Customer gave exact amount. No Return amount`;
      }
      else if ((Number(billamount.value))-(Number(customerAmount.value))<0){
       
      }else{
        resultText.innerText=`Customer still need's to pay ${Number(billamount.value)-Number(customerAmount.value)}`;
      }
    }
    else{
      resultText.innerHTML='Enter Valid Integer for Bill and Customer amount'
    }
  }
  
  
});

function isaNummber(checkElement){
  console.log(Number.isInteger(checkElement));
  if(checkElement>0 && (Number.isInteger(checkElement))){
    resultText.innerHTML='';
    return true;
  }
  else{
    
    return false;
  }
}