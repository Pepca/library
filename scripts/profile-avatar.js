const avatarInput = document.querySelector('[data-avatar-input]')
const avatarPreview = document.querySelector('[data-avatar-preview]')

function changeInputHandler(previewElement, event) {
  const uploadedFile = event.target.files[0]

  if (uploadedFile) {
    const prevPreviewImg = previewElement.querySelector('img')
    const imgPreview = prevPreviewImg ? prevPreviewImg : document.createElement('img')

    const reader = new FileReader()

    reader.onloadend = () => {
      imgPreview.src = String(reader.result)
      imgPreview.alt = 'Аватарка'

      previewElement.insertAdjacentElement('afterbegin', imgPreview)
    }

    reader.readAsDataURL(uploadedFile)
  }
}

avatarInput.addEventListener('input', changeInputHandler.bind(null, avatarPreview))