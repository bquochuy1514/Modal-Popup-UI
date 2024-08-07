var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var close = document.querySelector('.modal__header i')
var closeBtn = document.querySelector('.modal__footer button')

//CÁCH 2

btnOpen.addEventListener('click', toggleModal)
close.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
})

function toggleModal() {
    modal.classList.toggle('hide')
}



//CÁCH 1(Cách của Huy)

// btnOpen.onclick = function() {
//     modal.classList.remove('hide')
// }

// close.onclick = function() {
//     modal.classList.add('hide')
// }

// closeBtn.onclick = function() {
//     modal.classList.add('hide')
// }

// modal.onclick = function(e) {
//     if(e.target.classList.contains('modal')) {
//         modal.classList.add('hide')
//     }
// }























