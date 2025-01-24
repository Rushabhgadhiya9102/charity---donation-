document.addEventListener("DOMContentLoaded",function (){

    const navigation = document.getElementById('navbar');
    // const navBrand = document.querySelector(".bi-heart-pulse-fill");
    // const login = document.querySelector(".bi-person-circle");

    window.addEventListener('scroll',() => {
        if(window.scrollY > 0){
            navigation.classList.add('scrolled');
            // navBrand.style.display="none";
            // login.style.display="none";
        }else{
            navigation.classList.remove('scrolled'); 
            // navBrand.style.display="block";   
            // login.style.display="block";   
        }
    });
});


// ----------------- SLIDER ----------------------

document.querySelectorAll(".slider-container").forEach((container) => {
  const scrollContainer = container.querySelector(".sliderscroll");
  const prevBtn = container.querySelector(".prevBtn");
  const nextBtn = container.querySelector(".nextBtn");

  prevBtn.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 350; // Adjust the scroll amount as needed
  });

  nextBtn.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 350; // Adjust the scroll amount as needed
  });
});