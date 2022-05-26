


function myFun3()
{
    window.location.href="index.html"
}

function pro(){
    let x=document.getElementById("all_products")
    
    let prod=JSON.parse(localStorage.getItem("products")) || []
    
     prod.forEach(function(el,index)
     {
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para1=document.createElement("p");
        let para2=document.createElement("p");
        let para3=document.createElement("p");
        para1.innerText=el.type;
        para2.innerText=el.price;
        para3.innerText=el.desc;
        
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function()
        {
            remove(index)
            x.innerHTML=null;
        })

        box.append(img,para1,para2,para3,btn);
        x.append(box);
     });

}

pro()

function remove(index){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    
    let prog=data.filter(function(el,i){
        if (i===index)
        {
            let newitem=JSON.parse(localStorage.getItem("newitem"))||[];
            newitem.push(el);

            localStorage.setItem("newitem",JSON.stringify(newitem));
            

        }
        else{
            return i!==index;
        }
    });
    localStorage.setItem("products",JSON.stringify(prog));
}
