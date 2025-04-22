function fetchWishlist() {
    for(i=0;i<sessionStorage.length;i++){
        const key=sessionStorage.key(i);
        const value=JSON.parse(sessionStorage.getItem(key));
        if (!value.title) 
            continue;
        document.getElementById('wishlists').innerHTML+=`
            <div class="item">
                <div class="pimage">
                    <img src="${value.thumbnail}" alt="">
                </div>
                <div class="content">
                    <h2>${value.title} </h2>
                    <p>${value.description}</p>
                </div>
                <div class="wbutton">
                    <button onclick="removeFromWishlist(${value.id})">Remove</button>
                </div>
            </div>
        `;
    }
}
fetchWishlist();

function removeFromWishlist(id) {
    sessionStorage.removeItem(id)
}