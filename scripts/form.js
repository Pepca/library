  const forms = document.querySelectorAll('[data-form]')

  function resetFormHandler(inputElements) {
    if (inputElements.length) {
      inputElements.forEach(inputElement => inputElement.classList.remove('_not-empty'))
    }
  }

  if (forms.length) {
    forms.forEach(form => {
      const inputElements = form.querySelectorAll('[data-input-element]')

      form.addEventListener('reset', resetFormHandler.bind(null, inputElements))
    })
  }
