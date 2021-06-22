const btn = document.querySelector('.fas')
const nav = document.querySelector('nav')
const card = document.querySelectorAll('.card')
const imageLight = document.querySelectorAll('.hide')
const imageDark = document.querySelectorAll('.dark')
const body = document.body;

// imageLight.style.display = `in-Line`
// imageDark.style.display = `block`

// imageDark.style.display = `none`

btn.addEventListener('click', toggleDark=()=> {
  body.classList.toggle("dark-body")
  nav.classList.toggle('nav-dark')

  for (let j = 0; j < imageLight.length; j++) {
     imageLight[j].style.display = `inline`
  }

  for (let k = 0; k < imageDark.length; k++) {
    if (imageDark[k].style.display === `none`) {
      imageDark[k].style.display = `inline`
    } else {
      imageDark[k].style.display = `none`;
    }
    
  }
  // imageDark.style.display = `none`
  
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle('card-dark');
  }

})