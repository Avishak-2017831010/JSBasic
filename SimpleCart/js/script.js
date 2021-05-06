const product_details=document.querySelector('.product_details');
const productBox=document.querySelector('.product_details')
const cartwindow=document.querySelector(".cartDiv")
const cartbtn=document.querySelector('.cartIcon')
const close=document.querySelector('.close')
const cart=document.querySelector('.cartIcon')
const cartList=document.querySelector(".cartList")
const productList=document.querySelector('.productList')
const totalamount=document.querySelector('#totalAmountId')

class Product{
    constructor(product_name,img,details,price){
        this.productName=product_name
        this.imageSrc=img
        this.productDetails=details
        this.productPrice=price
        

    }
}

const product_array=[
    new Product("IPhone X","https://i.ibb.co/dM8jm0T/francesco-de-tommaso-1b-BCt-UAUMFI-unsplash.jpg","Super Retina Hd Display.5.8 inch all-screen OLED Multi-Touch display.HDR display. True Tone and Fingerprint resistant oleophobic coating.",84999),
    new Product("Bed Side Lamp","https://i.ibb.co/Cz2H44b/sincerely-media-VDPauw-J-s-Ho-unsplash.jpg","Silver and White Desk Lamp Beside Bed",6000),  
    new Product("Canon 60D","https://i.ibb.co/stMR36M/math-In-K0-X-GDjr-Q-unsplash.jpg","18 MP APS-C CMOS sensor.Advanced creative features.Vari-angle 7.7cm (3.0”) 3:2 ratio LCD.Full HD movies.DIGIC 4. ISO 100-6400",73000),
    new Product("Macbook Pro","https://i.ibb.co/YWs99mH/howard-bouchevereau-RSCir-J70-NDM-unsplash.jpg","The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance.",105000),
    new Product("Sony Bravia 49\"","https://i.ibb.co/Fnvjp1s/andres-jasso-k-Axq92-Oh-MJM-unsplash.jpg","Feel truly immersed in our new Sony BRAVIA range - it's easier, faster, and simpler than ever with voice activated controls and instant access to over 5000 apps. 3840*2160 Resolution.USB,HDMI,Wifi,Bluetooth",60000),
    new Product("Samsung Galaxy S20","https://i.ibb.co/b3vGL1x/daniel-romero-b-R-r3f-Ju-vk-unsplash.jpg","This is the phone made for people who want it all.",90000),
];

var total=0;

for(var i=0;i<product_array.length;i++){
    
    let cardElement=document.createElement("div")
    cardElement.className="card col-lg-3 col-md-8 fullCard"
    cardElement.id=`card${i}`
    console.log(cardElement.id)

    let imageSrc=document.createElement('img');
    
    imageSrc.className="card-img-top cardImage"
    imageSrc.setAttribute("src",`${product_array[i].imageSrc}`)
    

    let producTitle=document.createElement('h5')
    producTitle.innerHTML=`${product_array[i].productName}`
    producTitle.className="card-title"

    let seeDetailsButton=document.createElement('button')
    seeDetailsButton.className="btn seedetailsButton"
    seeDetailsButton.setAttribute("type","button")
    seeDetailsButton.setAttribute("data-bs-toggle","collapse")
    seeDetailsButton.setAttribute("data-bs-target",`#detailsCollapse${i}`)
    seeDetailsButton.setAttribute("aria-expanded","false")
    seeDetailsButton.setAttribute("aria-controls",`detailsCollapse${i}`)
    seeDetailsButton.innerHTML="See Details"


    let BodyOfCard=document.createElement('div')
    BodyOfCard.id=`detailsCollapse${i}`
    BodyOfCard.className="collapse"

    const cardBody=document.createElement('div')
    cardBody.className="card-body cardBody"

    const details=document.createElement('p')
    details.className="card-text"
    details.innerHTML=`${product_array[i].productDetails}`

    cardBody.appendChild(details)
    BodyOfCard.appendChild(cardBody)

    const priceandbutton=document.createElement('div')

    const price=document.createElement('h5')
    price.id="productPrice"
    price.innerHTML=`${product_array[i].productPrice}  Tk.`

    const addBtn=document.createElement('a');
    addBtn.className="btn btn-primary addToCart"
    addBtn.id=`addbtn${i} addBtn`
    addBtn.innerHTML="Add To Cart"

    priceandbutton.appendChild(price)
    priceandbutton.appendChild(addBtn)

    
    cardElement.appendChild(imageSrc)
    cardElement.appendChild(producTitle)
    cardElement.appendChild(seeDetailsButton)
    cardElement.appendChild(BodyOfCard)
    cardElement.appendChild(priceandbutton)
    productBox.appendChild(cardElement)

    const name=`${product_array[i].productName}`
    const cartprice=`${product_array[i].productPrice}`


    
    const productname=document.createElement('li')
    const productPrice=document.createElement('span')
    const removeicon=document.createElement('span')
    removeicon.id="removeicon"
    productPrice.id="productPriceId"
    productPrice.innerHTML=cartprice+'Tk'
    removeicon.innerHTML='X'
    productPrice.appendChild(removeicon)
    productname.innerHTML=name
    productname.appendChild(productPrice)

    let itemcount=0

    let countitems=document.createElement('p')

    class productobject{
        constructor(name,price){
            this.productname=name
            this.productprice=price
        }
    }

    addBtn.addEventListener('click',()=>{        
        productList.appendChild(productname)

        let productobj=new productobject(name,cartprice)
        setCartInLocalStorage(productobj)
        
        // console.log(productname)
        itemcount++;
        countitems.innerHTML=itemcount       
    })
    
    removeicon.addEventListener('click',removeItem)    
}






function setCartInLocalStorage(productname){

    let products;
    if(localStorage.getItem('products')===null){
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'))
    }

    products.push(productname)

    localStorage.setItem('products',JSON.stringify(products))

}

cart.addEventListener('click',function(){
    cartwindow.style.display="block"
})

close.addEventListener('click',function(){
    cartwindow.style.display="none"
})

document.addEventListener('DOMContentLoaded',getCartValue)

function getCartValue(){

    let products;
    if(localStorage.getItem('products')===null){
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'))
    }


    products.forEach(product=>{

    const productname=document.createElement('li')
    const productPrice=document.createElement('span')
    const removeicon=document.createElement('span')
    removeicon.id="removeicon"
    productPrice.id="productPriceId"
    productPrice.innerHTML= product.productprice+'Tk'
    removeicon.innerHTML='X'
    productPrice.appendChild(removeicon)
    productname.innerHTML=product.productname
    productname.appendChild(productPrice)
    productList.appendChild(productname)

    // console.log(product.productname)
    // console.log(product.productprice)
    // console.log(productname)

    removeicon.addEventListener('click',removeItem) 

    })

    
    
    
}

function removeItem(e){
    let ele=e.target.parentElement
    let eleparent=ele.parentElement
    eleparent.remove()

    RemoveFromLocalStorage(eleparent)
}

function RemoveFromLocalStorage(item){

    let products;
    if(localStorage.getItem('products')===null){
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'))
    }

    const li=item;

    li.removeChild(item.lastChild)

    products.forEach((product,index)=>{
        if(li.textContent.trim()===product.productname){
            products.splice(index,1)
        }
    })

    localStorage.setItem('products',JSON.stringify(products))

    
    // console.log(item)
}

console.log(productBox)








