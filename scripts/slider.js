const sliders = document.querySelectorAll('[data-slider]')

function slideRight(container, track, trackGap, items, slidesInView) {
  let dataIndex = parseInt(track.getAttribute('data-slider-track'))

  if (dataIndex + (slidesInView - 1) === items.length) dataIndex = 0

  const nextItemWidth = items[dataIndex + (slidesInView - 1)].offsetWidth + trackGap
  const nextItemHeight = items[dataIndex + (slidesInView - 1)].offsetHeight

  track.style.transform = `translateX(-${nextItemWidth * dataIndex}px)`
  container.style.height = nextItemHeight + 'px'

  track.setAttribute('data-slider-track', dataIndex + 1)
}

function slideLeft(container, track, trackGap, items, slidesInView) {
  let dataIndex = parseInt(track.getAttribute('data-slider-track'))

  if (dataIndex !== 1) {
    const prevItemWidth = items[dataIndex - 2].offsetWidth + trackGap
    const prevItemHeight = items[dataIndex - 2].offsetHeight

    track.style.transform = `translateX(-${prevItemWidth * (dataIndex - 2)}px)`
    container.style.height = prevItemHeight + 'px'

    return track.setAttribute('data-slider-track', dataIndex - 1)
  }

  const prevItemWidth = items[items.length - 1].offsetWidth + trackGap
  const prevItemHeight = items[items.length - 1].offsetHeight

  track.style.transform = `translateX(-${prevItemWidth * ((items.length - 1) - (slidesInView - 1))}px)`
  container.style.height = prevItemHeight + 'px'

  track.setAttribute('data-slider-track', items.length - (slidesInView - 1))
}

if (sliders.length) {
  sliders.forEach(slider => {
    const slidesInView = parseInt(slider.getAttribute('data-slider'))
    const leftButton = slider.querySelector('[data-slider-left-button]')
    const rightButton = slider.querySelector('[data-slider-right-button]')
    const container = slider.querySelector('[data-slider-container]')
    const itemsWidth = parseInt(container.getAttribute('data-slider-container'))
    const track = slider.querySelector('[data-slider-track]')
    const trackIndex = parseInt(track.getAttribute('data-slider-track'))

    const trackGap = parseInt(getComputedStyle(track).getPropertyValue('gap'))
    const items = track.children

    const startItemHeight = items[trackIndex - 1].offsetHeight

    container.style.height = startItemHeight + 'px'

    if (itemsWidth) {
      container.style.maxWidth = itemsWidth * slidesInView + trackGap * (slidesInView - 1) + 'px'
    }

    rightButton.addEventListener('click', slideRight.bind(null, container, track, trackGap, items, slidesInView))
    leftButton.addEventListener('click', slideLeft.bind(null, container, track, trackGap, items, slidesInView))
  })
}
