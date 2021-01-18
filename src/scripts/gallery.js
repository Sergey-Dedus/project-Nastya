let product_1 = document.querySelector(".select-img");
product_1.addEventListener('click', function(event) {
     event = event || window.event; 
    let iconImg = event.Target || event.srcElement; 
    if (iconImg.tagName == "IMG"){ 
        document.getElementById("bigImg").src = iconImg.getAttribute('src');   
    }
});


let product_2 = document.querySelector(".select-img_2");
product_2.addEventListener('click', function(event) {
     event = event || window.event; 
    let iconImg2 = event.Target || event.srcElement; 
    if (iconImg2.tagName == "IMG"){ 
        document.getElementById("bigImg2").src = iconImg2.getAttribute('src');   
    }
});

let product_3 = document.querySelector(".select-img_3");
product_3.addEventListener('click', function(event) {
     event = event || window.event; 
    let iconImg3 = event.Target || event.srcElement; 
    if (iconImg3.tagName == "IMG"){ 
        document.getElementById("bigImg3").src = iconImg3.getAttribute('src');  
    }
});

let product_4 = document.querySelector(".select-img_4");
product_4.addEventListener('click', function(event) {
     event = event || window.event; 
    let iconImg4 = event.Target || event.srcElement; 
    if (iconImg4.tagName == "IMG"){ 
        document.getElementById("bigImg4").src = iconImg4.getAttribute('src'); 
    }
});