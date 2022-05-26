//store the products array in localstorage as "products"


function myFun2(){
    window.location.href="inventory.html";
}

function ProductsShop(t,d,p,i)
{
this.type=t;
this.desc=d;
this.price=p;
this.image=i;

}
let arr=[]

function MyFun1(event)
{
    event.preventDefault()
    let form=document.getElementById("products");

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let p1=new ProductsShop(type,desc,price,image);
    let products=JSON.parse(localStorage.getItem("products")) || [];
    products.push(p1)
    localStorage.setItem("products",JSON.stringify(products));
    document.getElementById("type").value=null;
    document.getElementById("desc").value=null;
    document.getElementById("price").value=null;
    document.getElementById("image").value=null;

    console.log(typeof products)
    console.log(products)
}