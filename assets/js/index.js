//  // ^ Write your JavaScript code here
let spnSwitch=document.getElementById("switch");
let section =document.querySelector("section");
let prevbtn = document.getElementById("prev-testimonial");
let fontOption=document.querySelectorAll("font-option")
let nextbtn = document.getElementById("next-testimonial");

let testmonial_card = Array.from(document.querySelectorAll(".testimonial-card"));
var index = 0;
let testimonialsCarousel=document.getElementById("testimonials-carousel");



let indicators = Array.from(document.querySelectorAll(".carousel-indicator"));

let testimonials_carousel = document.getElementById("testimonials-carousel");

let scrollToTop=document.getElementById("scroll-to-top");





let settings_sidebar = document.getElementById("settings-sidebar");
let settings_toggle = document.getElementById("settings-toggle");
let closeBtn=document.getElementById("close-settings");
let resetSettings=document.getElementById("reset-settings");


// light and dark mood

spnSwitch.addEventListener("click" ,function(){
    document.getElementById("dark").classList.toggle("dark")
   
})

// display sidebar

section.addEventListener("click",function(){
  btn()
})

var btn=function(){
settings_sidebar.style.transform="translateX(350px)"
settings_toggle.style.transform="translateX(0)"
}
settings_toggle.addEventListener("click",function(){
 
settings_sidebar.style.transform="translateX(-320px)";
settings_toggle.style.transform="translateX(-320px)";
})



// close sidebar

 closeBtn.addEventListener("click",btn)

resetSettings.addEventListener("click",function(){
btn()
})


let scrollBtn = document.getElementById("scroll-to-top");







// function updateIndicators() {
//   for (var i = 0; i < indicators.length; i++) {
//     indicators[i].classList.remove("bg-accent");

//     indicators[i].classList.add("bg-slate-400");

//     indicators[i].classList.add("dark:bg-slate-600");
//   }

//   indicators[index].classList.remove("bg-slate-400");

//   indicators[index].classList.remove("dark:bg-slate-600");

//   indicators[index].classList.add("bg-accent");
// }
// updateIndicators();
// nextbtn.addEventListener("click", function () {
//   var firstCard = testimonials_carousel.firstElementChild;

//   testimonials_carousel.appendChild(firstCard);

//   index++;

//   if (index >= indicators.length) {
//     index = 0;
//   }

//   updateIndicators();
// });
// prevbtn.addEventListener("click", function () {
//   var lastCard = testimonials_carousel.lastElementChild;
//   testimonials_carousel.prepend(lastCard);
//   index--;
//   if (index < 0) {
//     index = indicators.length - 1;
//   }
//   updateIndicators();
// });




// ---------------------------------------------------------
// Carousel
nextbtn.addEventListener("click" ,function(){
  index++;
  if(index>=testmonial_card.length-2){
    index=0
  }
testimonialsCarousel.style.transform=`translateX(${index*400}px)`
})

// prev btn
prevbtn.addEventListener("click",function(){
  index--;
  if(index<0){
    console.log(index);
    
    index=testmonial_card.length-3
   
    
  }
  testimonialsCarousel.style.transform=`translateX(${index*400}px)`
})




// dark.addEventListener("click", function () {
//   html.classList.toggle("dark");
// });
var sections = document.getElementsByTagName("section");
var navLinks = document.getElementsByClassName("nav-link");
window.onscroll = function () {
  var current = "";
  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop;

    if (window.pageYOffset >= sectionTop - 100) {
      current = sections[i].id;
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].className = navLinks[j].className.replace(" active", "");

    if (navLinks[j].getAttribute("href") === "#" + current) {
      navLinks[j].className += " active";
    }
  }
};
let tabs = document.getElementsByClassName("portfolio-filter");
let items = document.getElementsByClassName("portfolio-item");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let k = 0; k < tabs.length; k++) {
      tabs[k].classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );

      tabs[k].classList.add("bg-white", "dark:bg-slate-800");
    }

    tabs[i].classList.remove("bg-white", "dark:bg-slate-800");

    tabs[i].classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );

    let filter = tabs[i].getAttribute("data-filter");

    for (let j = 0; j < items.length; j++) {
      let category = items[j].getAttribute("data-category");

      if (filter === "all" || filter === category) {
        items[j].style.display = "block";
      } else {
        items[j].style.display = "none";
      }
    }
  });
}



    






//---------------------------------------------------


window.addEventListener("scroll",function(){
  if(scrollY>=100){
    
    scrollToTop.classList.remove("opacity-0" ,"invisible")
        scrollToTop.classList.add("opacity-1" ,"visible")

  }
  else{
     scrollToTop.classList.add("opacity-0" ,"invisible")
        scrollToTop.classList.remove("opacity-1" ,"visible")
  }
})

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


