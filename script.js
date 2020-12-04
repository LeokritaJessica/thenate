const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
              
            }

           
        });
    });
}

navSlide();

//Dark Mode Switch
const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click', ()=>{
    // console.log('checking');
    if(colorSwitch.checked){
        document.body.classList.add('darkmode')
    }else{
        document.body.classList.remove('darkmode')
    }
});

