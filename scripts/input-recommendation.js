document.addEventListener('DOMContentLoaded', () => {
  const inputRecommendations = document.querySelectorAll('[data-input-recommendation]')

  function clickInputRecommendationHandler(event) {
    const dataID = event.target.getAttribute('data-input-recommendation')
    const content = event.target.textContent
    const inputElement = document.querySelector(`[data-input-element=${dataID}]`)
    const inputElementInput = inputElement.querySelector('[data-input-element-input]')

    inputElement.classList.add('_not-empty')
    inputElementInput.value = content
  }

  if (inputRecommendations.length) {
    inputRecommendations.forEach(inputRecommendation => {
      inputRecommendation.addEventListener('click', clickInputRecommendationHandler)
    })
  }
})