document.addEventListener('DOMContentLoaded', () => {
  const fileAttachElement = document.querySelector('[data-support-file-attach]')
  const fileAttachPreview = document.querySelector('[data-support-file-attach-preview]')
  const fileAttachInput = document.querySelector('[data-support-file-attach-input]')

  function changeFileAttachHandler(event) {
    const uploadedFile = event.target.files[0]

    fileAttachPreview.textContent = uploadedFile ? uploadedFile.name : 'Файл не выбран'
  }

  fileAttachInput.addEventListener('input', changeFileAttachHandler)
})