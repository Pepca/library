document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.querySelectorAll('[data-input-element]')

  function changeInputElementHandler(parentElement, isHasSelectMenu, event) {
    const value = event.target.value

    parentElement.classList.toggle('_not-empty', !!value)

    if (isHasSelectMenu) parentElement.classList.toggle('_open-select-menu', !!value)
  }

  function togglePasswordVisibility(targetInput, parentElement, event) {
    if (targetInput.type === 'password') {
      targetInput.type = 'text'
      return parentElement.classList.add('_show-password')
    }

    targetInput.type = 'password'
    parentElement.classList.remove('_show-password')
  }

  function clickSelectMenuButtonHandler(targetInput, parentElement, event) {
    const content = event.currentTarget.textContent.trim()

    targetInput.value = content
    parentElement.classList.toggle('_not-empty', !!content)
  }

  function toggleSelectMenuHandler(parentElement, event) {
    parentElement.classList.toggle('_open-select-menu')
  }

  if (inputElements.length) {
    inputElements.forEach(inputElement => {
      const inputElementInput = inputElement.querySelector('[data-input-element-input]')
      const inputElementHidePasswordButtons = inputElement.querySelectorAll('[data-input-element-hide-password]')
      const inputElementSelectMenuButtons = inputElement.querySelectorAll('[data-input-element-select-menu-button]')
      const inputElementToggleSelectMenuButton = inputElement.querySelector('[data-input-element-toggle-select-menu-button]')

      inputElementInput.addEventListener('input', changeInputElementHandler.bind(null, inputElement, inputElementSelectMenuButtons.length !== 0))

      if (inputElementSelectMenuButtons.length) inputElementSelectMenuButtons.forEach(inputElementSelectMenuButton => inputElementSelectMenuButton.addEventListener('click', clickSelectMenuButtonHandler.bind(null, inputElementInput, inputElement)))

      if (inputElementToggleSelectMenuButton) inputElementToggleSelectMenuButton.addEventListener('click', toggleSelectMenuHandler.bind(null, inputElement))

      if (inputElementHidePasswordButtons.length) inputElementHidePasswordButtons.forEach(inputElementHidePasswordButton => inputElementHidePasswordButton.addEventListener('click', togglePasswordVisibility.bind(null, inputElementInput, inputElement)))
    })
  }
})