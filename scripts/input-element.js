document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.querySelectorAll('[data-input-element]')

  function changeInputElementHandler(parentElement, event) {
    const value = event.target.value

    parentElement.classList.toggle('_not-empty', !!value)
  }

  if (inputElements.length) {
    inputElements.forEach(inputElement => {
      const inputElementInput = inputElement.querySelector('[data-input-element-input]')

      inputElementInput.addEventListener('input', changeInputElementHandler.bind(null, inputElement))
    })
  }
})