document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('[data-slider]')

  function slideRight(track, trackGap, items) {
    let dataIndex = parseInt(track.getAttribute('data-slider-track'))

    if ((dataIndex + 3) - 1 === items.length) {
      dataIndex = 0
    }

    const nextItemWidth = items[(dataIndex + 3) - 1].offsetWidth + trackGap

    track.style.transform = `translateX(-${nextItemWidth * dataIndex}px)`

    track.setAttribute('data-slider-track', dataIndex + 1)
  }

  function slideLeft(track, trackGap, items) {
    let dataIndex = parseInt(track.getAttribute('data-slider-track'))

    if (dataIndex === 1) {
      dataIndex = items.length - 1
    }

    const prevItemWidth = items[dataIndex].offsetWidth + trackGap

    track.style.transform = `translateX(-${prevItemWidth * (dataIndex - 2)}px)`

    track.setAttribute('data-slider-track', dataIndex - 1)
  }

  if (sliders.length) {
    sliders.forEach(slider => {
      const leftButton = slider.querySelector('[data-slider-left-button]')
      const rightButton = slider.querySelector('[data-slider-right-button]')
      const track = slider.querySelector('[data-slider-track]')

      const trackGap = parseInt(getComputedStyle(track).getPropertyValue('gap'))
      const items = track.children

      rightButton.addEventListener('click', slideRight.bind(null, track, trackGap, items))
      leftButton.addEventListener('click', slideLeft.bind(null, track, trackGap, items))

    })
  }
})