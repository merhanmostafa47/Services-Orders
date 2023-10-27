document.addEventListener('DOMContentLoaded', function () {
  let additionalCostPerPhoto = 0
  let selectedAdditionalCostPerPhoto = 0

  const serviceRows = document.querySelectorAll('.service_row')

  serviceRows.forEach(function (row) {
    let serviceName = row.dataset.serviceName

    const fileInputs = row.querySelectorAll(
      'input.photo-upload-input[type="file"]'
    )

    // Upload photos and show it in preview with delete button
    fileInputs.forEach((input) => {
      input.addEventListener('change', function () {
        const selectedFiles = this.files

        const previewContainer = this.parentNode.querySelector(
          '.imgs_preview_container'
        )

        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i]
          const reader = new FileReader()
          reader.onload = function (e) {
            const imgElement = new Image()
            imgElement.onload = function () {
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              canvas.width = 100
              canvas.height = 100
              ctx.drawImage(imgElement, 0, 0, 100, 100)
              const resizedDataUrl = canvas.toDataURL()

              const previewImgContainer = document.createElement('div')
              previewImgContainer.classList.add('preview-image-container')

              const previewImgElement = document.createElement('img')
              previewImgElement.src = resizedDataUrl
              previewImgContainer.appendChild(previewImgElement)

              const deleteButton = document.createElement('button')
              deleteButton.classList.add('delete-button')
              deleteButton.innerHTML = 'x'
              deleteButton.addEventListener('click', function () {
                previewImgContainer.remove()
                updatePhotosCount(serviceName)
              })
              previewImgContainer.appendChild(deleteButton)

              previewContainer.appendChild(previewImgContainer)

              updatePhotosCount(serviceName)
            }
            imgElement.src = e.target.result
          }
          reader.readAsDataURL(file)
        }

        updatePhotosCost()
        updateCostDependOnSelectedTime(serviceName)
      })
    })
  })

  function updatePhotosCount(serviceName) {
    const previewImgContainer = document.querySelector(
      `.basic-photos-cont .${serviceName}_photos_container`
    )
    const countInput = document.querySelector('.uploaded-photos-count')

    let photosCount = previewImgContainer.childNodes.length

    if (countInput) {
      countInput.value = photosCount
      document.querySelector(`.${serviceName}-photos-no`).innerHTML =
        photosCount

      updatePhotosCost()
    }
  }

  function updatePhotosCost() {
    let grandTotal = 0

    const grandTotalElement = document.getElementById('total-price')

    document.querySelectorAll('.selectedService').forEach(function (service) {
      const serviceName = service.getAttribute('data-service-name')

      const numPhotos = parseInt(
        document.querySelector(`.${serviceName}-photos-no`).textContent,
        10
      )

      const photoCost = parseFloat(service.dataset.servicePrice)

      const additionalCostElement = document.querySelector(
        `.${serviceName}-additional-cost`
      )
      
      let additionalCostPerPhoto = parseFloat(
        additionalCostElement.dataset.additionalCost
      )

      let servicePrice = numPhotos * (photoCost + additionalCostPerPhoto)

      const servicePriceElement = document.getElementById(
        `service-price-${serviceName}`
      )
      servicePriceElement.innerHTML = servicePrice.toFixed(2) + ' $'

      grandTotal += servicePrice
    })

    grandTotalElement.textContent = grandTotal.toFixed(2) + ' $'
  }

  function updateCostDependOnSelectedTime(serviceName) {
    const selectTurnaroundTime = document.querySelector(
      `.${serviceName}_service_time`
    )

    selectTurnaroundTime.addEventListener('change', function () {
      const selectedOption = this.options[this.selectedIndex]
      selectedAdditionalCostPerPhoto = parseFloat(
        selectedOption.dataset.selectedAdditionalCost
      )

      const additionalCostElement = document.querySelector(
        `.${serviceName}-additional-cost`
      )

      additionalCostElement.innerHTML = `${selectedOption.textContent} (${selectedAdditionalCostPerPhoto} $)`

      additionalCostElement.dataset.additionalCost =
        selectedAdditionalCostPerPhoto

      updatePhotosCost()
    })
  }
})
