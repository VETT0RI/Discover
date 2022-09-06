const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'
  const isInvisible = modalWrapper.classList.contains('invisible')

  if(isEscKey & !isInvisible) {
    modalWrapper.classList.add('invisible')
  }
})