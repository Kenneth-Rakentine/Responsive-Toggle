
const boxToCircle = () =>{
    // 1.) target box
    let square = document.querySelector('.box')
    square.classList.toggle('circle')
}

const boxToBio = ()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
}

const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "This represents "
}

const hideImage = ()=>{
    let target = document.querySelector('.jordan')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "Show Me"
}


// __________________________________________________


const swapImg = ()=>{
    let swapped = document.querySelector('.tree')
    swapped.setAttribute('src', 'https://i.gifer.com/aEp.gif')

   let bkg = document.querySelector('.containerOne')
   bkg.classList.toggle('treeBkg')
}

const fontColor = ()=>{
    let paint = document.querySelector('.containerTwo')
    paint.classList.toggle('blued')
}

const hideImg = ()=>{
    let target = document.querySelector('.Hide')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "APPEAR"
}

const enlarge = ()=>{
    let bigger = document.querySelector('.splode')
    bigger.classList.toggle('massive')
}

const largeText = ()=>{
    let grown = document.querySelector('.hugeTxt')
    grown.classList.toggle('evenBigger')
}