document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('[data-slider]')

  function slideRight(track, trackGap, items, slidesInView) {
    let dataIndex = parseInt(track.getAttribute('data-slider-track'))

    if (dataIndex + (slidesInView - 1) === items.length) dataIndex = 0

    const nextItemWidth = items[dataIndex + (slidesInView - 1)].offsetWidth + trackGap

    track.style.transform = `translateX(-${nextItemWidth * dataIndex}px)`

    track.setAttribute('data-slider-track', dataIndex + 1)
  }

  function slideLeft(track, trackGap, items, slidesInView) {
    let dataIndex = parseInt(track.getAttribute('data-slider-track'))

    if (dataIndex === 1) dataIndex = items.length - 1

    const prevItemWidth = items[dataIndex].offsetWidth + trackGap

    track.style.transform = `translateX(-${prevItemWidth * (dataIndex - (slidesInView - 1))}px)`

    track.setAttribute('data-slider-track', dataIndex - 1)
  }

  if (sliders.length) {
    sliders.forEach(slider => {
      const slidesInView = parseInt(slider.getAttribute('data-slider'))
      const leftButton = slider.querySelector('[data-slider-left-button]')
      const rightButton = slider.querySelector('[data-slider-right-button]')
      const container = slider.querySelector('[data-slider-container]')
      const itemsWidth = parseInt(container.getAttribute('data-slider-container'))
      const track = slider.querySelector('[data-slider-track]')

      const trackGap = parseInt(getComputedStyle(track).getPropertyValue('gap'))
      const items = track.children

      container.style.maxWidth = itemsWidth * slidesInView + trackGap * (slidesInView - 1) + 'px'

      rightButton.addEventListener('click', slideRight.bind(null, track, trackGap, items, slidesInView))
      leftButton.addEventListener('click', slideLeft.bind(null, track, trackGap, items, slidesInView))
    })
  }
})