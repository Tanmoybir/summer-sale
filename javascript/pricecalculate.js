
function clickCard(cardId){
    const entry=document.getElementById('calculate');
    const cardName=document.getElementById(cardId);
    const card=cardName.innerText;
    const li=document.createElement('li');
    li.innerText=card;
    entry.appendChild(li);
    return entry;
}
let total=0;
function priceCalculate(priceId){
   const price=document.getElementById(priceId);
   const priceString=price.innerText;
   const priceValue=parseFloat(priceString);
   total +=priceValue;
   const totalPrice=document.getElementById('total-price');
   totalPrice.innerText=total;
   const totalAmount=parseFloat(totalPrice.innerText);
   const purchaseButton=document.getElementById('make-purchase');
   if(totalAmount > 0){
    purchaseButton.removeAttribute('disabled');
   }
   const totalValue=document.getElementById('total');
   totalValue.innerText=totalAmount.toFixed(2); 
   return totalPrice;
}


document.getElementById('apply-btn').addEventListener('click',function(){
   let finalTotalValue=document.getElementById('total-price');
   const finalTotalValueString=finalTotalValue.innerText;
   let totalAmount1=parseFloat(finalTotalValueString);
    //   Discount
   let discountAmount=(20/100)*totalAmount1;
   const discount=document.getElementById('discount');
   discount.innerText=discountAmount.toFixed(2);
        const finalTotal=totalAmount1-discountAmount;  
        const totalValue=document.getElementById('total');
        totalValue.innerText=finalTotal.toFixed(2);
})
document.getElementById('promo-code').addEventListener('click',function(){
    const setPromoCode=document.getElementById('set-promo-code');
    setPromoCode.value ='SELL200';
   let finalTotalElement=document.getElementById('total-price');
   const finalTotalElementString=finalTotalElement.innerText;
   const finalTotalElementValue=parseFloat(finalTotalElementString);
   const applyButton=document.getElementById('apply-btn');
   if(finalTotalElementValue >= 200 && setPromoCode.value =='SELL200'){
    applyButton.removeAttribute('disabled');
   }
})
  
document.getElementById('goHome-btn').addEventListener('click',function(){
    window.location.href='index.html';
})

function clickCard1(){
        clickCard('card-1');
        priceCalculate('price-1');
    }
    function clickCard2(){
        clickCard('card-2');
        priceCalculate('price-2');
    }
    function clickCard3(){
        clickCard('card-3');
        priceCalculate('price-3');
    }
    function clickCard4(){
        clickCard('card-4');
        priceCalculate('price-4');
    }
    function clickCard5(){
        clickCard('card-5');
        priceCalculate('price-5');
    }
    function clickCard6(){
        clickCard('card-6');
        priceCalculate('price-6');
    }
    