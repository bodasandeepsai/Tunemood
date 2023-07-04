
document.getElementById("mybutton").addEventListener("click", ()=> {
  document.getElementById("contentBelow").scrollIntoView({ behavior: 'smooth' });
});


  window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });

  


  





