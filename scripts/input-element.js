document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.querySelectorAll('[data-input-element]')

  function changeInputElementHandler(parentElement, event) {
    const value = event.target.value

    parentElement.classList.toggle('_not-empty', !!value)
  }

  function togglePasswordVisibility(targetInput, parentElement, event) {
    if (targetInput.type === 'password') {
      targetInput.type = 'text'
      return parentElement.classList.add('_show-password')
    }

    targetInput.type = 'password'
    parentElement.classList.remove('_show-password')
  }

  if (inputElements.length) {
    inputElements.forEach(inputElement => {
      const inputElementInput = inputElement.querySelector('[data-input-element-input]')
      const inputElementHidePasswordButtons = inputElement.querySelectorAll('[data-input-element-hide-password]')

      inputElementInput.addEventListener('input', changeInputElementHandler.bind(null, inputElement))

      if (inputElementHidePasswordButtons.length) {
        inputElementHidePasswordButtons.forEach(inputElementHidePasswordButton => {
          inputElementHidePasswordButton.addEventListener('click', togglePasswordVisibility.bind(null, inputElementInput, inputElement))
        })
      }
    })
  }
})