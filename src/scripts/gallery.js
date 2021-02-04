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


// == активная рамка на выбранной картинке == 
$(".select-img_1").on("click", ".select-img__picture", function(){
	$(".select-img_1 .select-img__picture").removeClass("pic-active"); //удаляем класс во всех вкладках
	$(this).addClass("pic-active"); //добавляем класс текущей (нажатой)
});

$(".select-img_2").on("click", ".select-img__picture", function(){
	$(".select-img_2 .select-img__picture").removeClass("pic-active_2"); //удаляем класс во всех вкладках
	$(this).addClass("pic-active_2"); //добавляем класс текущей (нажатой)
});

$(".select-img_3").on("click", ".select-img__picture", function(){
	$(".select-img_3 .select-img__picture").removeClass("pic-active_3"); //удаляем класс во всех вкладках
	$(this).addClass("pic-active_3"); //добавляем класс текущей (нажатой)
});

$(".select-img_4").on("click", ".select-img__picture", function(){
	$(".select-img_4 .select-img__picture").removeClass("pic-active_4"); //удаляем класс во всех вкладках
	$(this).addClass("pic-active_4"); //добавляем класс текущей (нажатой)
});