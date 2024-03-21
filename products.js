const $searchInput = window.document.querySelector("#searchItems");
const $addCartBtn = window.document.querySelector(".card button");
const productCover = window.document.querySelector("#product-cover");
const $cartChip = window.document.querySelector("#cart-chip");
const $preloader = window.document.querySelector("#preloader");
console.log(productCover);

let mainStoreItems = [];
let ecommerceItems = [];

function redrawChip (){
	let cartItems = window.localStorage.getItem("cartItems");
	if (!cartItems) return $cartChip.style.display = "none";
	cartItems = JSON.parse(cartItems).length;
	if (cartItems.length == 0){
		$cartChip.style.display = "none";
		return;
	} 
		$cartChip.style.display = "flex";
		$cartChip.innerHTML = cartItems;
};

async function fetchProducts() {
	try {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		$preloader.style.display = "none";
		console.log(data);
		// return data;
		mainStoreItems = data;
		ecommerceItems = data;
	} catch (error) {
		console.error("there was an error fetching products", error);
		return [];
	}
}

// create lements based on data provided.
function createElements() {
	productCover.innerHTML = "";
	ecommerceItems.forEach((el) => {
		productCover.innerHTML += `
        <div class="carrd">
        <img src="${el.image}"/>
        <h5>Item: ${el.title}</h5>
        <p>Category: ${el.category}</p>
        <p class="price">Price: GH¢${el.price}</p>
			<div class="btn-cont">
        <button class="bttn m-auto" onclick="addCart(${el.id})">ADD</button>
			</div>
        </div>
        `;
	});
}

function addCart(id){
	console.log("the id ", id);
	let cartItems = window.localStorage.getItem("cartItems");
	if (cartItems){
		cartItems = JSON.parse(cartItems);
		cartItems.push(mainStoreItems.find(v=>v.id == id));
		window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
		return redrawChip();
	}		
	cartItems = [];
	cartItems.push(mainStoreItems.find(v=>v.id==id));
	window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
	return redrawChip();
};

// main entry point.
async function main() {
	await fetchProducts();
	createElements();
	redrawChip();

	$searchInput.addEventListener("keydown", (e) => {
		const { value } = e.target;
		console.log({ value });
		ecommerceItems = mainStoreItems.filter(
			(v) =>
				v.title.toLowerCase().includes(value.toLowerCase()) ||
				v.category.toLowerCase().includes(value.toLowerCase())
		);
		console.log(ecommerceItems);
		createElements();
	});
}

main();
