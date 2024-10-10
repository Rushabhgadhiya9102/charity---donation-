document.addEventListener("DOMContentLoaded",function (){

    const navigation = document.querySelector('.navbar .container');

    window.addEventListener('scroll',() => {
        if(window.scrollY > 0){
            navigation.classList.add('scrolled');
        }else{
            navigation.classList.remove('scrolled');
        }
    });

});