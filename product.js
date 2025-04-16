
async function fetchProduct() {
    const urlParams=new URLSearchParams(window.location.search)
    const id=urlParams.get("id");
    const reponse=await fetch(`https://dummyjson.com/products/${id}`)
    const product=await reponse.json();
    console.log(product); 
    let images='';
    product.images.map(img=>{
        images+=`<img src="${img}" alt="">`
    }) 
    document.getElementById('images').innerHTML=images;
    document.getElementById('thumbnail').innerHTML=`<img src="${product.thumbnail}" >`;
    document.getElementById('title').innerHTML=product.title;
}
fetchProduct();