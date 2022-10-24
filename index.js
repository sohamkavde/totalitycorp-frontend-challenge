let tablediv = document.getElementsByClassName("trdiv")[0];
let ImageContainer = ["https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=128","https://i.seadn.io/gcs/files/600c7c699720715564bfd803978e0739.png?auto=format&w=128","https://i.seadn.io/gcs/files/f2b0607fd8c70ab0eed6736c7d4d4e29.png?auto=format&w=128","https://i.seadn.io/gcs/files/f99880be2b85889f9c241f099acee011.png?auto=format&w=128","	https://i.seadn.io/gcs/files/fb756068f5be3cf135f7c5ef211d08c6.png?auto=format&w=128"]
    for(let i =0;i<5;i++){
        tablediv.innerHTML +=`
		<tr>
			<td>${i+1} <img src="${ImageContainer[i]}" alt="images" class="tableImage"> </td>
			<td>Alfreds Futterkiste</td>
			<td>Maria Anders</td>
			<td>Germany</td>
		</tr>
        `;
} 

let tablediv1 = document.getElementsByClassName("trdiv")[1];
    for(let i =0;i<5;i++){
        tablediv1.innerHTML +=`
		<tr>
			<td>${i+6} <img src="${ImageContainer[i]}" alt="images" class="tableImage"> </td>
			<td>Alfreds Futterkiste</td>
			<td>Maria Anders</td>
			<td>Germany</td>
		</tr>
        `;
} 



// first  

//    firstCorousel
var firstCorouselpopular = document.getElementsByClassName("spaceSectionfirstCorousel")[0];
var firstCorouselpopularItems = ["https://i.seadn.io/gcs/files/522f76d60d0ccc374011c1092145fd74.jpg?auto=format&w=1920","https://i.seadn.io/gcs/static/promocards/Math%20Art%20Herbert%20W%20Franke.png?auto=format&w=828","	https://i.seadn.io/gcs/files/6b26e80ca71ea9c7127bcc31149931d6.jpg?auto=format&w=1920","https://i.seadn.io/gcs/static/promocards/Diplo.png?auto=format&w=1920","	https://i.seadn.io/gcs/static/promocards/Ometti.png?auto=format&w=1920","https://i.seadn.io/gcs/static/promocards/E4CRangers.png?auto=format&w=1920"];
let k = 0;
for(let i=0;i<6;i++){
	
    firstCorouselpopular.innerHTML +=`
			<div class="productfirstCorousel productcss">
				<div class="productImage productfirstCorouselImage">
					<img src="${firstCorouselpopularItems[i]}" alt="">						    
				</div>
				<div class="firstCarousel">
					<b>NFT on OpenSea</b>
					<div style="width:100%">Some text</div>
				</div>
				
			</div>
    `;
	k++;
	if(k>=50){
		break;
	}
	if(i==5){
		i=0;
	}
} 
let firstCorouselproduct = document.getElementsByClassName('productfirstCorousel');    
let firstCorouselproduct_page = Math.ceil(firstCorouselproduct.length/4);
let firstCorousel = 0;
let firstCorouselmovePer = 105;// how much % move all product toward left side and show products of right size
let firstCorouselmaxMove = (firstCorouselproduct.length-4)*firstCorouselmovePer;
// mobile_view	 
let firstCorouselmob_view = window.matchMedia("(max-width: 768px)");
if (firstCorouselmob_view.matches)
 {
	firstCorouselmovePer = 100.36;
	firstCorouselmaxMove = (firstCorouselproduct.length)*firstCorouselmovePer;
 }

 let firstCorouselright_mover = ()=>{
	firstCorousel = firstCorousel + firstCorouselmovePer;
	if (firstCorouselproduct == 1){firstCorousel = 0; }
	console.log("Right");
	for(const i of firstCorouselproduct)
	{
		console.log(l);
		if (l > firstCorouselmaxMove){firstCorousel = firstCorousel - firstCorouselmovePer;}			
		i.style.left = '-' + firstCorousel + '%';
		console.log(i.style.left);
	}

}
let firstCorouseleft_mover = ()=>{
	firstCorousel = firstCorousel - firstCorouselmovePer;
	if (firstCorousel<=0){firstCorousel = 0;}
	for(const i of firstCorouselproduct){
		if (firstCorouselproduct_page>1){
			i.style.left = '-' + firstCorousel + '%';				
		}
	}
}
 
// Slider/Carousel - notable
var notablepopular = document.getElementsByClassName("spaceSectionnotable")[0];
var notablepopularItems = ["https://i.seadn.io/gae/X4Q2rHfwRSUHRw9HLkKfG3J-8NjjhUTXV3sJ1CVvCtg-ycL-hHroQMiEUP9pqRNJvV7mjH2euA1jDxKvS1mhgQI-ZUljlhI-owP2GA?auto=format&w=1920","https://i.seadn.io/gcs/files/6b28d17c83d7e0449352ca005d904569.jpg?auto=format&w=1920","https://i.seadn.io/gae/dQ_IEJc8dwAywDs0IUGUnstgVeNzC2uVPNrawfYEozvOredPypO3XVlJdPuWPZTUb9pJQle_3BnX-RLSszWiLu2WRcZOU3-tAq86Yw?auto=format&w=1920","https://i.seadn.io/gcs/files/e2f402e13f00ab82d1eb08574eb25f32.gif?auto=format&w=1920","https://i.seadn.io/gae/8g0poMCQ5J9SZHMsBrefrXbwzFmOQ-333l5OtbqqPW8TSGO9Stm2Rhd7kwHKsKIZPLxDjzISeeDTZ1H35t7GswPRoIfzTnNPsLs7rxw?auto=format&w=1920","https://i.seadn.io/gae/X4Q2rHfwRSUHRw9HLkKfG3J-8NjjhUTXV3sJ1CVvCtg-ycL-hHroQMiEUP9pqRNJvV7mjH2euA1jDxKvS1mhgQI-ZUljlhI-owP2GA?auto=format&w=1920","https://i.seadn.io/gae/X4Q2rHfwRSUHRw9HLkKfG3J-8NjjhUTXV3sJ1CVvCtg-ycL-hHroQMiEUP9pqRNJvV7mjH2euA1jDxKvS1mhgQI-ZUljlhI-owP2GA?auto=format&w=1920"];
k=0;

for(let i=0;i<6;i++){
    notablepopular.innerHTML +=`
			<div class="productnotable productcss">
				<div class="productImage">
					<img src="${notablepopularItems[i]}" alt="">						    
				</div>
				<div class="productDescription flexdiv">
					<div class="hoverImage"><img src="${notablepopularItems[i]}" alt=""></div>
					<b>NFT on OpenSea</b>
				</div>
				
			</div>
    `;
	k++;
	if(k>=50){
		break;
	}
	if(i==5){
		i=0;
	}
} 

	let notableproduct = document.getElementsByClassName('productnotable');    
 	let notableproduct_page = Math.ceil(notableproduct.length/3);
	let notablel = 0;
	let notablelmovePer = 106;// how much % move all product toward left side and show products of right size
	let notablelmaxMove = (notableproduct.length-3)*notablelmovePer;
	// mobile_view	 
	let notablelmob_view = window.matchMedia("(max-width: 768px)");
	if (notablelmob_view.matches)
	 {
		notablelmovePer = 100.36;
		notablelmaxMove = (notableproduct.length)*notablelmovePer;
	 }

     let notablelright_mover = ()=>{
		notablel = notablel + notablelmovePer;
		if (notableproduct == 1){notablel = 0; }
		console.log("Right");
		for(const i of notableproduct)
		{
			console.log(l);
			if (l > notablelmaxMove){notablel = notablel - notablelmovePer;}			
			i.style.left = '-' + notablel + '%';
            console.log(i.style.left);
		}

	}
	let notableleft_mover = ()=>{
		notablel = notablel - notablelmovePer;
		if (notablel<=0){notablel = 0;}
		for(const i of notableproduct){
			if (notableproduct_page>1){
				i.style.left = '-' + notablel + '%';				
			}
		}
	}


    
// Slider/Carousel - Dreamers
var dreamerspopular = document.getElementsByClassName("spaceSectiondreamers")[0];
var dreamerspopularItems = ["https://i.seadn.io/gae/TLm9cerYNXvYB-OMUUWt5_agr4zD_zOchuc57DQY_JXNfCJu-Cu6CmABgKci4hRbaSZc8gJzmM7PIkukzNi_IDTf717Fd8aoFS5h9w?auto=format&w=1920","https://i.seadn.io/gae/BGrqMygtlex-RdX-Bwcsxeesr_wFBkVuhQnD3pO_QvhybIkmM17Jbox3LeLOPR7J0yWz29tlcOmJMAVfpSa-UCjm-JYwOrP9bcQEFw?auto=format&w=1920","https://i.seadn.io/gae/XPUsbUKhuEnh2icp9tRceQlbtjVpwHX2frs3V6Z-hUdk8Sca3BulnFGmQ19rHF9wMyU2Nw_DmAHFsGlT1OhQ-lCProWDaFD_Hipu?auto=format&w=1920","https://i.seadn.io/gae/leNnA7N8rVGnFUP8zC6kY4XH3BxBTf9X19Z6fFDJGw1Z7lxv5-YDHlHON9CSfNrLl6gEhAtqRNOvICAeP71-8wSoqEfTNSwqwIeq9UM?auto=format&w=1920","https://i.seadn.io/gae/1enW06S-AyHE6dXrxfxUNDoVU7GnHXTXCb53lTiAHERHskZwsYtl6dAenU4hIB9vVGATNTRgB5LRkb4kIsiaxPNVrEf7TDBmP8GWAA?auto=format&w=1920","https://i.seadn.io/gae/I5Y_-HBlB4hTQFM87AzQW4Guqt809TLgOadaaky980hfn8cxSITbaZpRZ59cZXKe7F1_tQ7dnoYqSKRfKh1j3JTi6YEdtmVMHwJqHA?auto=format&w=1920"];
// var dreamerspopulardiscount = ["0","20","50","0","20","50"];
k = 0;
for(let i=0;i<6;i++){
    dreamerspopular.innerHTML +=`
			<div class="productdreamers productcss">
				<div class="productImage">
					<img src="${dreamerspopularItems[i]}" alt="">						    
				</div>
				<div class="productDescription flexdiv">
					<div class="hoverImage"><img src="${dreamerspopularItems[i]}" alt=""></div>
					<b>NFT on OpenSea</b>
				</div>
				
			</div>
    `;
	k++;
	if(k>=50){
		break;
	}
	if(i==5){
		i=0;
	}
} 

	let dreamersproduct = document.getElementsByClassName('productdreamers');    
 	let dreamersproduct_page = Math.ceil(dreamersproduct.length/3);
	let dreamersl = 0;
	let dreamersmovePer = 106;// how much % move all product toward left side and show products of right size
	let dreamersmaxMove = (dreamersproduct.length-3)*dreamersmovePer;
	// mobile_view	 
	let dreamersmob_view = window.matchMedia("(max-width: 768px)");
	if (dreamersmob_view.matches)
	 {
		dreamersmovePer = 100.36;
		dreamersmaxMove = (dreamersproduct.length)*dreamersmovePer;
	 }

     let dreamersright_mover = ()=>{
		dreamersl = dreamersl + dreamersmovePer;
		if (dreamersproduct == 1){dreamersl = 0; }
		console.log("Right");
		for(const i of dreamersproduct)
		{
			console.log(l);
			if (l > dreamersmaxMove){dreamersl = dreamersl - dreamersmovePer;}			
			i.style.left = '-' + dreamersl + '%';
            console.log(i.style.left);
		}

	}
	let dreamersleft_mover = ()=>{
		dreamersl = dreamersl - dreamersmovePer;
		if (dreamersl<=0){dreamersl = 0;}
		for(const i of dreamersproduct){
			if (dreamersproduct_page>1){
				i.style.left = '-' + dreamersl + '%';				
			}
		}
	}


    
// Slider/Carousel - NFT start
var popular = document.getElementsByClassName("spaceSectionNFT")[0];
var popularItems = ["https://opensea.io/static/images/learn-center//what-is-nft.png","https://opensea.io/static/images/learn-center//what-is-crypto-wallet.png","https://opensea.io/static/images/learn-center//what-are-gas-fees.png","https://opensea.io/static/images/learn-center//how-to-buy-nft.png","https://opensea.io/static/images/learn-center//how-to-create-nft.png","https://opensea.io/static/images/learn-center//how-to-sell-nft.png","https://opensea.io/static/images/learn-center//what-is-minting.png","https://opensea.io/static/images/learn-center//who-is-opensea.png"];
var populardiscount = ["0","20","50","0","20","50"];
k=0;
for(let i=0;i<6;i++){
    popular.innerHTML +=`
			<div class="productNFT productcss">
				<div class="productImage">
					<img src="${popularItems[i]}" alt="">						    
				</div>
				<div class="productDescription flexdiv">
					<b>How to create an NFT on OpenSea</b>
				</div>
				
			</div>
    `;
	k++;
	if(k>=50){
		break;
	}
	if(i==5){
		i=0;
	}
} 

	let product = document.getElementsByClassName('productNFT');    
 	let product_page = Math.ceil(product.length/3);
	let l = 0;
	let movePer = 105;// how much % move all product toward left side and show products of right size
	let maxMove = (product.length-3)*movePer;
	// mobile_view	 
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 100.36;
	 	maxMove = (product.length)*movePer;
	 }

     let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		console.log("Right");
		for(const i of product)
		{
			console.log(l);
			if (l > maxMove){l = l - movePer;}			
			i.style.left = '-' + l + '%';
            console.log(i.style.left);
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';				
			}
		}
	}


let BrowseImageContainer = document.getElementsByClassName("BrowseImageContainer")[0];
let browseContainer = ["https://opensea.io/static/images/categories/art.png","https://opensea.io/static/images/categories/music.png","https://opensea.io/static/images/categories/trading-cards.png","https://opensea.io/static/images/categories/collectibles.png","https://opensea.io/static/images/categories/photography-category.png","https://opensea.io/static/images/categories/utility.png","https://opensea.io/static/images/categories/domain-names.png","https://opensea.io/static/images/categories/sports.png","https://opensea.io/static/images/categories/virtual-worlds.png"]
for(let i =0;i<9;i++){
        BrowseImageContainer.innerHTML +=`
        <div class="ImageWithCaption">
                <div class="BrowseImage">
                    <img src="${browseContainer[i]}" alt="images">
                </div>
                <div class="CaptionImage flexdiv">
                   <b>Art</b>
                </div>
            </div> 
        `;
} 
