document.addEventListener('DOMContentLoaded', () => {
  const popupButtons = document.querySelectorAll('[data-popup-button]')
  const popups = document.querySelectorAll('[data-popup]')

  function getScrollbarWidth() {
    return window.innerWidth - document.body.offsetWidth
  }

  function _lockScroll() {
    document.body.classList.add('_lock-scroll')
  }

  function _unlockScroll() {
    setTimeout(() => document.body.classList.remove('_lock-scroll'), 150)
  }

  function openPopup(targetPopup) {
    closeAllPopups()

    targetPopup.classList.add('_open-popup')

    _lockScroll()
  }

  function closeAllPopups() {
    if (popups.length) {
      popups.forEach(popup => {
        if (popup.classList.contains('_open-popup')) {
          popup.classList.remove('_open-popup')
        }
      })
    }
  }

  function closePopup(targetPopup) {
    targetPopup.classList.remove('_open-popup')

    _unlockScroll()
  }

  if (popupButtons.length && popups.length) {
    popups.forEach(popup => {
      const content = popup.querySelector('[data-popup-content]')

      popup.addEventListener('click', (event) => {
        if (!event.target.closest('[data-popup-content]')) closePopup(event.currentTarget)
      })
    })

    popupButtons.forEach(popupButton => {
      const dataID = popupButton.getAttribute('data-popup-button')
      const targetPopup = document.getElementById(dataID)

      const scrollbarWidth = getScrollbarWidth()

      document.body.style.setProperty('--scrollbar-width', scrollbarWidth + 'px')

      popupButton.addEventListener('click', openPopup.bind(null, targetPopup))
    })
  }
})