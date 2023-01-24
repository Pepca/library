const quantityElements = document.querySelectorAll('[data-quantity]')

function formatPrice(price) {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0
  }).format(price)
}

function clickPrevButtonHandler(targetInput, minValue, quantityPrice, priceDefaultValue) {
  const value = parseInt(targetInput.value)

  targetInput.value = parseInt(minValue) === value ? minValue : value - 1

  if (quantityPrice && priceDefaultValue) {
    quantityPrice.textContent = formatPrice(priceDefaultValue * parseInt(targetInput.value))
  }
}

function clickNextButtonHandler(targetInput, maxValue, quantityPrice, priceDefaultValue) {
  const value = parseInt(targetInput.value)

  targetInput.value = parseInt(maxValue) === value ? maxValue : value + 1

  if (quantityPrice && priceDefaultValue) {
    quantityPrice.textContent = formatPrice(priceDefaultValue * parseInt(targetInput.value))
  }
}

if (quantityElements.length) {
  quantityElements.forEach(quantityElement => {
    const priceDataID = quantityElement.getAttribute('data-quantity-price')
    const quantityPriceElement = document.getElementById(priceDataID)
    const quantityPriceElementDefaultValue = parseInt(quantityPriceElement?.dataset.price)
    const quantityElementButtonPrev = quantityElement.querySelector('[data-quantity-prev-button]')
    const quantityElementButtonNext = quantityElement.querySelector('[data-quantity-next-button]')
    const quantityElementInput = quantityElement.querySelector('[data-quantity-input]')
    const inputMinValue = quantityElementInput.min
    const inputMaxValue = quantityElementInput.max

    if (quantityPriceElement) {
      quantityPriceElement.textContent = formatPrice(quantityPriceElementDefaultValue * parseInt(quantityElementInput.value))
    }

    quantityElementButtonPrev.addEventListener('click', clickPrevButtonHandler.bind(null, quantityElementInput, inputMinValue, quantityPriceElement, quantityPriceElementDefaultValue))
    quantityElementButtonNext.addEventListener('click', clickNextButtonHandler.bind(null, quantityElementInput, inputMaxValue, quantityPriceElement, quantityPriceElementDefaultValue))
  })
}
