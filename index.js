let products;
async function fetchData(){
    const response1=await fetch('https://dummyjson.com/products');
    const data=await response1.json();
    products=data.products;
    const response2=await fetch('https://dummyjson.com/products/categories');
    const categories=await response2.json();
    let str2='';
    categories.map(category=>{
        str2+=`
            <option value="${category.slug}">${category.name}</option>
        `
    })
    document.getElementById('category').innerHTML+=str2
    let str1='';
    products.map(product => {
        str1+=`
            <div class="card">
                <div class="wish" id="wish${product.id}">
                    ${sessionStorage.getItem(product.id)?`<img src="./images/icons8-love-30.png" alt="" onclick='removeFromWishlist(${product.id})'>`:`<img src="./images/icons8-love-24.png" alt="" onclick="addToWishlist(${product.id})"> `}
                </div>
                <img src="${product.thumbnail}" alt="">
                <h3>${product.title.substring(0,30)}</h3>
                <h2>$${product.price}</h2>
                <a href="./product.html?id=${product.id}" class="viewB"> <button>View Product</button></a>
            </div>
        `;
    });
    document.getElementById('products').innerHTML=str1;
    
    
}
fetchData();
function filter(){
    let str='';
    products.filter(product=> product.category.includes(document.getElementById('category').value)).map(filteredProduct=>{
        str+=`
            <div class="card">
                <div class="wish" id="wish${filteredProduct.id}">
                    ${sessionStorage.getItem(filteredProduct.id)?`<img src="./images/icons8-love-30.png" alt="" onclick='removeFromWishlist(${filteredProduct.id})'>`:`<img src="./images/icons8-love-24.png" alt="" onclick="addToWishlist(${filteredProduct.id})"> `}
                </div>
                <img src="${filteredProduct.thumbnail}" alt="">
                <h3>${filteredProduct.title.substring(0,30)}</h3>
                <h2>$${filteredProduct.price}</h2>
                <a href="./product.html?id=${filteredProduct.id}" class="viewB"> <button>View Product</button></a>
            </div>
        `;
    })
    document.getElementById('products').innerHTML=str;
}

function search() {
    let str='';
    products.filter(product=> product.title.toLowerCase().includes(document.getElementById('search').value.toLowerCase())).map(searchedProduct=>{
        str+=`
            <div class="card">
                <div class="wish" id="wish${searchedProduct.id}">
                ${sessionStorage.getItem(searchedProduct.id)?`<img src="./images/icons8-love-30.png" alt="" onclick='removeFromWishlist(${searchedProduct.id})'>`:`<img src="./images/icons8-love-24.png" alt="" onclick="addToWishlist(${searchedProduct.id})"> `}
                </div>
                <img src="${searchedProduct.thumbnail}" alt="">
                <h3>${searchedProduct.title.substring(0,30)}</h3>
                <h2>$${searchedProduct.price}</h2>
                <a href="./product.html?id=${searchedProduct.id}" class="viewB"> <button>View Product</button></a>
            </div>
        `;
    })
    document.getElementById('products').innerHTML=str;   
}

function addToWishlist(id) {
    const product=products.find((product)=>{
        return product.id===id
    })
    sessionStorage.setItem(id,JSON.stringify(product));
    document.getElementById(`wish${id}`).innerHTML=`<img src="./images/icons8-love-30.png" alt="" onclick="removeFromWishlist(${product.id})"> `
}

function removeFromWishlist(id) {
    const product=products.find((product)=>{
        return product.id===id
    })
    sessionStorage.removeItem(id);
    document.getElementById(`wish${id}`).innerHTML=`<img src="./images/icons8-love-24.png" alt="" onclick="addToWishlist(${product.id})"> `
}