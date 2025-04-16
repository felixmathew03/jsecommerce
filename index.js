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
            <a href="./product.html?id=${product.id}" class="card">
                <img src="${product.thumbnail}" alt="">
                <h3>${product.title.substring(0,30)}</h3>
                <h2>$${product.price}</h2>
            </a>
        `;
    });
    document.getElementById('products').innerHTML=str1;
}
fetchData();
function filter(){
    let str='';
    products.filter(product=> product.category.includes(document.getElementById('category').value)).map(filteredProduct=>{
        str+=`
            <a href="./product.html?id=${filteredProduct.id}" class="card">
                <img src="${filteredProduct.thumbnail}" alt="">
                <h3>${filteredProduct.title.substring(0,30)}</h3>
                <h2>$${filteredProduct.price}</h2>
            </a>
        `;
    })
    document.getElementById('products').innerHTML=str;
}

function search() {
    let str='';
    products.filter(product=> product.title.toLowerCase().includes(document.getElementById('search').value.toLowerCase())).map(searchedProduct=>{
        str+=`
            <a href="./product.html?id=${searchedProduct.id}" class="card">
                <img src="${searchedProduct.thumbnail}" alt="">
                <h3>${searchedProduct.title.substring(0,30)}</h3>
                <h2>$${searchedProduct.price}</h2>
            </a>
        `;
    })
    document.getElementById('products').innerHTML=str;   
}