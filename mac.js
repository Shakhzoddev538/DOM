let box_fr = document.querySelector('.first')
let box_sc = document.querySelector('.second')

let img = document.querySelector('img')

box_fr.onclick = () => {
    img.setAttribute('src', 'mac-img/mbp14-silver.png')
}
box_sc.onclick = () => {
    img.setAttribute('src', './mac-img/mbp14-spacegray.png')
}

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let tree = document.querySelector('#tree')
let four = document.querySelector('#four')

let p = document.querySelector('#p')

one.onclick = () => {
    p.innerText = "$1,999" 
}
two.onclick = () => {
p.innerText = "$2,199"
}
tree.onclick = () => {
    p.innerText = "$2,599"
}
four.onclick = () => {
    p.innerText = "$3,199"
}