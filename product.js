let product;
async function fetchProduct() {
    const urlParams=new URLSearchParams(window.location.search)
    id=urlParams.get("id");
    const reponse=await fetch(`https://dummyjson.com/products/${id}`)
    product=await reponse.json();
    console.log(product); 
    let images='';
    product.images.map(img=>{
        images+=`<img src="${img}" alt="">`
    }) 
    document.getElementById('images').innerHTML=images;
    document.getElementById('thumbnail').innerHTML=`<img src="${product.thumbnail}" >`;
    document.getElementById('title').innerHTML=product.title;
    document.getElementById('category').innerHTML=product.category;
    document.getElementById('brand').textContent=product.brand;
    document.getElementById('rating').textContent=product.rating;
    document.getElementById('reviews').textContent=`47 ratings & ${product.reviews.length} reviews`;
    document.getElementById('discountedPrice').textContent=`$${Number((product.price-(product.price*(product.discountPercentage/100))).toFixed(2))}`;
    document.getElementById('price').textContent=`$${product.price}`;
    document.getElementById('discount').textContent=`${product.discountPercentage}% off`;   
    document.getElementById('description').textContent=product.description;   
    let str1='';
    product.tags.map(tag=>{
        str1+=`
             <div class="tag">${tag}</div>
        `;
    })
    document.getElementById('tags').innerHTML=str1;
    document.getElementById('waranty').textContent=product.warrantyInformation;
    document.getElementById('returnp').textContent=product.returnPolicy;
    document.getElementById('avail').textContent=product.availabilityStatus;
    document.getElementById('stock').textContent=product.stock;
}
fetchProduct();

function addToCart() {
    if(!(localStorage.getItem(product.id))){
        localStorage.setItem(product.id,JSON.stringify(product));
        alert("Product Added to Cart")
    }else{
        alert("Product already exists")
    }
}