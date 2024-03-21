 const $cartChip = window.document.querySelector("#cart-chip");


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

redrawChip();
