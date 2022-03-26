let cardContainers = document.querySelectorAll('.card-container')

let preBtns = document.querySelectorAll('.preb')

let nxtBtns = document.querySelectorAll('.nexb')

cardContainers.forEach((item, i) =>{

    let Cd = item.getBoundingClientRect();

    let Cw = Cd.width

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += Cw - 200;
    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= Cw + 200;
    })
}
)