
let qu=[]
let total=0;
function getCart(){
    if(localStorage.length==0){
        document.body.innerHTML="<h2>Cart empty..</h2><a href='../index.html'>Go to products</a>";
    }
    else{
    // console.log(localStorage.length);
    str=``;
    str1=``;
    for(i=0;i<localStorage.length;i++){
       
        qu[i]=1;
        const key=localStorage.key(i);
        // console.log(key);
        const value=JSON.parse(localStorage.getItem(key));
        // console.log(value);
        str+=`<div class="cart">
                <div class="imge">
                    <img src="${value.thumbnail}" alt="">
                </div>
                <div class="content">
                    <h3><span class="discount">$${Number((value.price-(value.price*value.discountPercentage/100)).toFixed(2))}</span> <span class="original-price">$${value.price}</span></h3>
                    <p>${value.description}</p>
                    <h5>Quantity</h5>
                    <p class="quantity">
                        <span class="qnty" onclick="minus('${i}')"><img src="./images/icons8-minus-90.png" alt=""></span>
                        <span id="txt${i}" class="txt"></span>
                        <span class="qnty" onclick="plus('${i}')"><img src="./images/icons8-plus-90.png" alt=""></span>
                    </p>
                </div>           
                <div class="bun">
                    <button onclick="removeCart('${value.id}')">Remove</button>
                </div>  
            </div>`;
        str1+=`<tr>
                <td>${value.title}</td>
                <td><span id="td${i}" ></span></td>
                <td><span id="pr${i}" ></span></td>
            </tr>`;
    }
    console.log("main"+qu[0]);
    document.getElementById("carts").innerHTML=str;
    document.getElementById("table").innerHTML=str1;
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const value=JSON.parse(localStorage.getItem(key));
        document.getElementById(`txt${i}`).innerHTML=qu[i];
        document.getElementById(`td${i}`).innerHTML=qu[i];
        cost=Number((value.price-(value.price*value.discountPercentage/100)).toFixed(2));
        c=cost*qu[i];
        console.log(c);
        total+=c;
        document.getElementById(`pr${i}`).innerHTML=`$${c.toString().substring(0,7)}`;
    }
    document.getElementById("tm").innerHTML=`Total Amount: $${Number((total+5).toFixed(2))}`;
}
}
getCart();
function removeCart(id){
    // console.log(id);
    localStorage.removeItem(id);
    getCart();
}
function minus(j){
    a=parseInt(j);
    qu[a]-=1;
    console.log(qu[a]);
    document.getElementById(`txt${a}`).innerHTML=qu[a];
    document.getElementById(`td${a}`).innerHTML=qu[a];
    const key=localStorage.key(a);
    const value=JSON.parse(localStorage.getItem(key));
    cost=Number((value.price-(value.price*value.discountPercentage/100)).toFixed(2));
    c=cost*qu[a];
    console.log(c);
    total+=c;
    document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
    document.getElementById("tm").innerHTML=`Total Amount: $${total.toString().substring(0,7)}`
}

function plus(i){
    a=parseInt(i);
    qu[a]++;
    document.getElementById(`txt${a}`).innerHTML=qu[a];
    document.getElementById(`td${a}`).innerHTML=qu[a];
    const key=localStorage.key(a);
    const value=JSON.parse(localStorage.getItem(key));
    cost=Number((value.price-(value.price*value.discountPercentage/100)).toFixed(2));
    c=cost*qu[a];
    console.log(c);
    total+=c;
    console.log(total);
    document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
    document.getElementById("tm").innerHTML=`Total Amount: $${(total+5).toString().substring(0,7)}`
}

function clearA(){
    localStorage.clear();
    document.body.innerHTML="<h2>Cart empty..</h2><a href='./index.html'>Go to products</a>";
}