
async function fetchProduct() {
    const urlParams=new URLSearchParams(window.location.search)
    const id=urlParams.get("id");
    const reponse=await fetch(`https://dummyjson.com/products/${id}`)
    const product=await reponse.json();
    console.log(product);  
}
fetchProduct();