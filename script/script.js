document.addEventListener("DOMContentLoaded",function (){

    const navigation = document.querySelector('.navbar .container-fluid');
    const navBrand = document.querySelector(".bi-heart-pulse-fill");
    const login = document.querySelector(".bi-person-circle");

    window.addEventListener('scroll',() => {
        if(window.scrollY > 0){
            navigation.classList.add('scrolled');
            navBrand.style.display="none";
            login.style.display="none";
        }else{
            navigation.classList.remove('scrolled'); 
            navBrand.style.display="block";   
            login.style.display="block";   
        }
    });


});