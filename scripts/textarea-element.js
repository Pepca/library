document.addEventListener('DOMContentLoaded', () => {
  const textareaElements = document.querySelectorAll('[data-textarea-element]')

  function changeTextareaHandler(parentElement, event) {
    const value = event.target.value

    parentElement.classList.toggle('_not-empty', !!value)
  }

  if (textareaElements.length) {
    textareaElements.forEach(textareaElement => {
      const textareaElementTextarea = textareaElement.querySelector('[data-textarea-element-textarea]')

      textareaElementTextarea.addEventListener('input', changeTextareaHandler.bind(null, textareaElement))
    })
  }
})