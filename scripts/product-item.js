document.addEventListener('DOMContentLoaded', () => {
  const productItems = document.querySelectorAll('[data-product-item]')

  if (productItems.length) {
    productItems.forEach(productItem => {
      const productItemHead = productItem.querySelector('[data-product-item-head]')

      const height = productItemHead.offsetHeight

      productItem.style.setProperty('--product-item-head-height', height + 'px')
    })
  }
})