import productsData from './product.js';
let star='<i class="fa-solid fa-star"></i>'.repeat(productsData[0].rateCount);
document.getElementById("product").innerHTML=
  `<div class="subProduct">
    <div><img src=${productsData[0].images[0]}></div>
    <div><img src="${productsData[0].images[1]}"></div>
    <div><img src="${productsData[0].images[2]}"></div>
    <div><img src="${productsData[0].images[3]}"></div>
  </div>
  <div class="productimg">
    <img src="${productsData[0].heroImage}">
  </div>
  <div class="productDetails">
    <h1>${productsData[0].title}</h1>
    <p class="fontSize">${productsData[0].info}</p>
    <p><span class="star">${star}</span> <span>| 1234 Ratings</span></p><br>
    <hr>
    <p><span class="fontSize">₹${productsData[0].finalPrice}</span> <span style="text-decoration:line-through;">₹${productsData[0].originalPrice}</span></p>
    <p><span class="save">You Save:Rs 5000</span> <span class="stock">In Stock</span></p>
    <p>(Includes of all taxes)</p><br>
    <hr>
    <p class="fontSize">Offers and Discounts</p>
    <p><span class="offers">No Cost EMI on Credit card</span> <span class="offers">Pay later and Avail Cashback</span></p><br>
    <hr>
    <button class="button1" >Add to cart</button>
  </div> 
  `