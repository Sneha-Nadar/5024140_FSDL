// CLASS
class Product{

constructor(name,price,image,category){

this.name = name
this.price = price
this.image = image
this.category = category
this.qty = 1

}

}

// OBJECT ARRAY
let products = [

new Product("Apple",120,"images/apple.jpg","fruit"),
new Product("Banana",40,"images/banana.jpg","fruit"),
new Product("Milk",60,"images/milk.jpg","dairy"),
new Product("Bread",50,"images/bread.jpg","dairy"),
new Product("Rice",90,"images/rice.jpg","dairy"),
new Product("Eggs",70,"images/eggs.jpg","dairy"),
new Product("Tomato",30,"images/tomato.jpg","vegetable"),
new Product("Potato",35,"images/potato.jpg","vegetable"),
new Product("Cheese",150,"images/cheese.jpg","dairy")

]

// VARIABLES
let total = 0

// FUNCTION ADD TO CART
function addToCart(price,qty){

total += price * qty

if(total > 1000){

alert("You unlocked FREE delivery!")

}

document.getElementById("total").innerText = total

}

// FUNCTION CHANGE QUANTITY
function changeQty(index,change){

products[index].qty += change

if(products[index].qty < 1){

products[index].qty = 1

}

document.getElementById("qty"+index).innerText =
products[index].qty

}

// DISPLAY PRODUCTS
function displayProducts(list){

let container = document.getElementById("products")

container.innerHTML = ""

for(let i = 0; i < list.length; i++){

let card = document.createElement("div")

card.className = "card"

card.innerHTML =

`
<img src="${list[i].image}" class="product-img">

<h3>${list[i].name}</h3>

<p class="price">₹ ${list[i].price}</p>

<div class="qty">

<button onclick="changeQty(${i},-1)">-</button>

<span id="qty${i}">1</span>

<button onclick="changeQty(${i},1)">+</button>

</div>

<button class="add-btn"
onclick="addToCart(${list[i].price},products[${i}].qty)">
Add to Cart
</button>

`

container.appendChild(card)

}

}

displayProducts(products)

// SEARCH FUNCTION

document.getElementById("search").addEventListener("keyup",function(){

let text = this.value.toLowerCase()

let filtered = products.filter(p =>
p.name.toLowerCase().includes(text)
)

displayProducts(filtered)

})

// CATEGORY FILTER

function filterCategory(category){

if(category === "all"){

displayProducts(products)

return

}

let filtered = products.filter(p => p.category === category)

displayProducts(filtered)

}