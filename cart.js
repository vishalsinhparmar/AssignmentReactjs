const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");


 
const cartFunction = ()=>{
       if(cartModalOverlay.style.transform==='translateX(-200%)'){
        cartModalOverlay.style.transform = 'translateX(0)'
       }
       else{
        cartModalOverlay.style.transform='translateX(-200%)';
       }
}
cart.addEventListener('click',cartFunction);

const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener('click', ()=>{
    //  if(cartModalOverlay.style.transform ==='translateX(0)'){
        cartModalOverlay.style.transform = 'translateX(-200%)'
    //  }
    //  else{
    //     cartModalOverlay.style.transform = 'translateX(0)'
    //  }
})
cartModalOverlay.addEventListener('click',(e)=>{
    if(e.target.classList.contains('cartModalOverlay')){
        cartModalOverlay.style.transform='translateX(-200%)'
    }
})

//   add to a cart

const addCart = document.getElementsByClassName("add-to-cart");

// const addTocart = document.querySelector(".add-to-cart");
for (var i = 0; i < addCart.length; i++) {
    button = addCart[i];
    button.addEventListener('click', addToCardClicked)
  }
// addCart.addEventListener('click',addToCardClicked)

function addToCardClicked(event){
     button =  event.target;
     cartItem= button.parentElement;
    let price = cartItem.getElementsByClassName("product-price")[0].innerText;
    let imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
    addItemCart(price,imageSrc);   
    updateCartPrice()
}

function addItemCart(price,imageSrc){
   let  productRow = document.createElement('div');
   productRow.classList.add("product-row");
   let productRows = document.getElementsByClassName("product-rows")[0];
   let product_image = document.getElementsByClassName("product-image")[0];
   for(let i=0; i<product_image.length; i++){
      if(product_image.src==imageSrc){
        
        alert('this is item already added');
        return
      }
   }

   let carRowItems = ` <div class="product-row">
   <img src="${imageSrc}" class="cart-image">
   <span class="cart-price">${price}</span>
   <input type="number" class="product-quantity" value="1">
   <button class="remove-btn">Remove</button>
</div>
.
   `
    productRow.innerHTML=carRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem);
    productRow.getElementsByClassName("product-quantity")[0].addEventListener('input',changeQuantity)
    updateCartPrice()
  }   


// function removeItem(event){
//      let removeBtn= event.target;
//      removeBtn.parentElement.parentElement.remove();
// }
// const remove_btn = document.querySelectorAll(".remove-btn"); 
// remove_btn.addEventListener('click',removeItem);

const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  removeBtn.addEventListener('click', removeItem)
}

function removeItem (event) {
 let  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice()
 
}

// Ccomalate a remove iteam
// upadate a input quantities

const input_quantities = document.getElementsByClassName("product-quantity");
// for(let i=0; i<input_quantities; i++){
//      input = input_quantities[i];
//     input.addEventListener('input',changeQuantity)
// }
function changeQuantity(event){
     let input = event.target;
     if(isNaN(input.value) ||input.value<=0){
      input.value=1;
     }
     updateCartPrice()
}
const productRow = document.getElementsByClassName("product-row");

function updateCartPrice(){
  let total=0;
  for(var i=0; i<productRow.length; i=i+2){
    carttRow = productRow[i];
   let cart_price = carttRow.getElementsByClassName("cart-price")[0];
   let cart_pricevalue = parseFloat(cart_price.innerText.replace('$',''))
   let changeQuantity = carttRow.getElementsByClassName('product-quantity')[0];
   let changeQuantity_value = changeQuantity.value;
  total = total + (cart_pricevalue*changeQuantity_value);
  }
  document.getElementsByClassName("total-price")[0].innerText='$'+total;
  document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2 ;
}

const purchase_btn = document.querySelector(".purchase-btn");
 
purchase_btn.addEventListener('click',purchaseBtnClicked);

function purchaseBtnClicked(){
  alert("thank you for purchasing a product")
  cartModalOverlay.style.transform='translateX(-100%)'

  updateCartPrice()
}





