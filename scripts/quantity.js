const quantityElements = document.querySelectorAll('[data-quantity]')

function clickPrevButtonHandler(targetInput, minValue) {
  const value = parseInt(targetInput.value)

  targetInput.value = parseInt(minValue) === value ? minValue : value - 1
}

function clickNextButtonHandler(targetInput, maxValue) {
  const value = parseInt(targetInput.value)

  targetInput.value = parseInt(maxValue) === value ? maxValue : value + 1
}

if (quantityElements.length) {
  quantityElements.forEach(quantityElement => {
    const quantityElementButtonPrev = quantityElement.querySelector('[data-quantity-prev-button]')
    const quantityElementButtonNext = quantityElement.querySelector('[data-quantity-next-button]')
    const quantityElementInput = quantityElement.querySelector('[data-quantity-input]')
    const inputMinValue = quantityElementInput.min
    const inputMaxValue = quantityElementInput.max

    quantityElementButtonPrev.addEventListener('click', clickPrevButtonHandler.bind(null, quantityElementInput, inputMinValue))
    quantityElementButtonNext.addEventListener('click', clickNextButtonHandler.bind(null, quantityElementInput, inputMaxValue))
  })
}
