document.addEventListener('DOMContentLoaded', () => {
  const dropDownButtons = document.querySelectorAll('[data-drop-down]')

  function clickDropDownButtonHandler(element, event) {
    element.classList.toggle('_active')
  }

  if (dropDownButtons.length) {
    dropDownButtons.forEach(dropDownButton => {
      const dataID = dropDownButton.getAttribute('data-drop-down')
      const element = document.getElementById(dataID)
      const {height: elementHeight} = element.getBoundingClientRect()

      element.style.setProperty('--height', elementHeight + 'px')
      element.classList.add('_loaded')

      dropDownButton.addEventListener('click', clickDropDownButtonHandler.bind(null, element))
    })
  }
})