import productsData from './product.js';

let cards=document.getElementById("filtering1");
let info=productsData.slice(0,11).map(item =>{
let star='<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
return`
<div class="box">
        <div class="bg">
          <img src=${item.images[0]} alt="imageproducts" class="cardImage">
        </div>
        <div class="bg1">
          ${star} 
          <h3>${item.title}</h3>
          <p class="para">${item.info}</p><hr>
          <p><span>₹${item.finalPrice}</span> <span style="text-decoration:line-through;">₹${item. originalPrice}</span></p>
          <button class="add" >Add to cart</button>
        </div>
</div>`
}).join("")
cards.innerHTML=info


document.getElementById("all").addEventListener('click', function(){
document.getElementById('filtering1').style.display='flex'
document.getElementById('filtering2').style.display='none'
document.getElementById('filtering3').style.display='none'
document.getElementById('filtering4').style.display='none'
document.getElementById('filtering5').style.display='none'
});



document.getElementById("headPhones").addEventListener('click', function(){
  let filtering2 = document.getElementById('filtering2')

let info1=productsData.filter(item=>item.category==="Headphones").map(item =>{
let star='<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
return`
<div class="box">
        <div class="bg">
          <img src=${item.images[0]} alt="imageproducts" class="cardImage">
        </div>
        <div class="bg1">
          ${star} 
          <h3>${item.title}</h3>
          <p class="para">${item.info}</p><hr>
          <p><span>₹${item.finalPrice}</span> <span style="text-decoration:line-through;">₹${item. originalPrice}</span></p>
          <button class="add">Add to cart</button>
        </div>
</div>`
}).join("")
filtering2.innerHTML=info1
document.getElementById('filtering1').style.display='none'
document.getElementById('filtering2').style.display='flex'
document.getElementById('filtering3').style.display='none'
document.getElementById('filtering4').style.display='none'
document.getElementById('filtering5').style.display='none'
})


document.getElementById("earbuds").addEventListener('click', function(){
  let filtering3 = document.getElementById('filtering3')

let info2=productsData.filter(item=>item.category==="Earbuds").map(item =>{
let star='<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
return`
<div class="box">
        <div class="bg">
          <img src=${item.images[0]} alt="imageproducts" class="cardImage">
        </div>
        <div class="bg1">
          ${star} 
          <h3>${item.title}</h3>
          <p class="para">${item.info}</p><hr>
          <p><span>₹${item.finalPrice}</span> <span style="text-decoration:line-through;">₹${item. originalPrice}</span></p>
          <button class="add">Add to cart</button>
        </div>
</div>`
}).join("")
filtering3.innerHTML=info2
document.getElementById('filtering1').style.display='none'
document.getElementById('filtering2').style.display='none'
document.getElementById('filtering3').style.display='flex'
document.getElementById('filtering4').style.display='none'
document.getElementById('filtering5').style.display='none'
})

document.getElementById("earphones").addEventListener('click', function(){
  let filtering4 = document.getElementById('filtering4')

let info3=productsData.filter(item=>item.category==="Earphones").map(item =>{
let star='<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
return`
<div class="box">
        <div class="bg">
          <img src=${item.images[0]} alt="imageproducts" class="cardImage">
        </div>
        <div class="bg1">
          ${star} 
          <h3>${item.title}</h3>
          <p class="para">${item.info}</p><hr>
          <p><span>₹${item.finalPrice}</span> <span style="text-decoration:line-through;">₹${item. originalPrice}</span></p>
          <button class="add">Add to cart</button>
        </div>
</div>`
}).join("")
filtering4.innerHTML=info3
document.getElementById('filtering1').style.display='none'
document.getElementById('filtering2').style.display='none'
document.getElementById('filtering3').style.display='none'
document.getElementById('filtering4').style.display='flex'
document.getElementById('filtering5').style.display='none'
})

document.getElementById("neckband").addEventListener('click', function(){
  let filtering5 = document.getElementById('filtering5')

let info4=productsData.filter(item=>item.category==="Neckbands").map(item =>{
let star='<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
return`
<div class="box">
        <div class="bg">
          <img src=${item.images[0]} alt="imageproducts" class="cardImage">
        </div>
        <div class="bg1">
          ${star} 
          <h3>${item.title}</h3>
          <p class="para">${item.info}</p><hr>
          <p><span>₹${item.finalPrice}</span> <span style="text-decoration:line-through;">₹${item. originalPrice}</span></p>
          <button class="add">Add to cart</button>
        </div>
</div>`
}).join("")
filtering5.innerHTML=info4
document.getElementById('filtering1').style.display='none'
document.getElementById('filtering2').style.display='none'
document.getElementById('filtering3').style.display='none'
document.getElementById('filtering4').style.display='none'
document.getElementById('filtering5').style.display='flex'
})



//  Carousal slider
document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const items = document.querySelectorAll(".corosal");
  const totalItems = items.length;
  const indicators = document.querySelectorAll(".indicator");

  const showItem = (index) => {
      items.forEach((item, idx) => {
          item.style.display = idx === index ? 'flex' : 'none';
      });
      updateIndicators(index);
  };

  const updateIndicators = (index) => {
      indicators.forEach((indicator, idx) => {
          indicator.classList.toggle("active", idx === index);
      });
  };

  const nextItem = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
  };

  const prevItem = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
  };

  indicators.forEach(indicator => {
      indicator.addEventListener("click", (e) => {
          currentIndex = parseInt(e.target.dataset.index);
          showItem(currentIndex);
      });
  });

  items.forEach(item => {
      item.addEventListener("click", nextItem);
  });

  let startX = 0;

  document.querySelector('.slider').addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });

  document.querySelector('.slider').addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
          nextItem();
      } else if (startX < endX - 50) {
          prevItem();
      }
  });

  // Initialize the first item
  showItem(currentIndex);
});



// =====================================================================//













