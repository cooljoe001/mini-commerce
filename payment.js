const paymentForm = document.getElementById('paymentForm');
const mail = document.querySelector("input[type='email']");
const phone = document.querySelector("input[type='tel']");
console.log(mail,phone);
const $totalAmt = window.document.querySelector(".total span");

const $prodContainer = window.document.querySelector("#products");


function displayProducts(){
let  items = window.localStorage.getItem("cartItems");
items = JSON.parse(items);

	$prodContainer.innerHTML = ""
	let sumAll = 0;
items.forEach((v, i)=>{
	sumAll += v.price;
	 $prodContainer.innerHTML += `

					<div class="product">
						<img src="${v.image}" alt="Product Image" />
						<div class="product-info">
							<h3>${v.title}</h3>
							<p>
							${v.description.substring(0, 50)}
							</p>
							<p>GH¢${v.price}</p>
						</div>
						<button class="remove-button" onclick="removeItem(${i})">Remove</button>
					</div>
	`
})
$totalAmt.innerHTML = sumAll;


};
displayProducts();

function removeItem(index){
let  items = window.localStorage.getItem("cartItems");
items = JSON.parse(items);
	items.splice(index, 1);
 localStorage.setItem('cartItems', JSON.stringify(items));
 displayProducts();
}

console.log(paymentForm);
 
console.log(paymentForm);
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_7044ec8d930de237feb60216463a8bd3dfc5a12d', // Replace with your public key
    email: mail.value,
    amount:  20*100,
    currency: "GHS",
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}