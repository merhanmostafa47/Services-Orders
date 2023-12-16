document.addEventListener("DOMContentLoaded", function () {
  // let additionalCostPerPhoto = 0
  let selectedAdditionalCostPerPhoto = 0;

  const serviceRows = document.querySelectorAll(".service_row");

  serviceRows.forEach(function (row) {
    let serviceName = row.dataset.serviceName;

    const fileInputs = row.querySelectorAll(
      'input.photo-upload-input[type="file"]'
    );

    // Upload photos and show it in preview with delete button
    fileInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const selectedFiles = this.files;

        const previewContainer = this.parentNode.querySelector(
          ".imgs_preview_container"
        );

        for (const element of selectedFiles) {
          const file = element;
          const reader = new FileReader();
          reader.onload = function (e) {
            const imgElement = new Image();
            imgElement.onload = function () {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              canvas.width = 100;
              canvas.height = 100;
              ctx.drawImage(imgElement, 0, 0, 100, 100);
              const resizedDataUrl = canvas.toDataURL();

              const previewImgContainer = document.createElement("div");
              previewImgContainer.classList.add("preview-image-container");

              const previewImgElement = document.createElement("img");
              previewImgElement.src = resizedDataUrl;
              previewImgContainer.appendChild(previewImgElement);

              // ===============================
              // Progress Bar
              const progressBar = document.createElement("div");
              progressBar.classList.add("progress-bar");
              progressBar.style.width = "0%"; // Initialize progress bar
              previewImgContainer.appendChild(progressBar);
              // Gradually increase the progress bar
              let progress = 0;
              const interval = setInterval(function () {
                progress += 5; // Increment progress
                progressBar.style.width = progress + "%";
                if (progress >= 100) {
                  clearInterval(interval);
                }
              }, 200); // Adjust the interval time as per your upload simulation

              // Image element with opacity
              previewImgElement.style.opacity = 0.5;
              previewImgContainer.appendChild(previewImgElement);

              // Remove progress bar when image is fully loaded
              previewImgElement.addEventListener("load", function () {
                clearInterval(interval); // Stop the interval
                progressBar.style.width = "100%"; // Set progress bar to full
                setTimeout(function () {
                  progressBar.style.display = "none"; // Hide progress bar
                  previewImgElement.style.opacity = 1;
                }, 500); // Adjust the timeout as needed
              });

              // ==========================================================
              const deleteButton = document.createElement("button");
              deleteButton.classList.add("delete-button");
              deleteButton.innerHTML = "x";
              deleteButton.addEventListener("click", function () {
                previewImgContainer.remove();
                updatePhotosCount(serviceName);
              });
              previewImgContainer.appendChild(deleteButton);

              previewContainer.appendChild(previewImgContainer);

              updatePhotosCount(serviceName);
            };
            imgElement.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }

        updatePhotosCost();
        updateCostDependOnSelectedTime(serviceName);
      });
    });

    deleteServiceOrder(serviceName);
  });

  function updatePhotosCount(serviceName) {
    const previewImgContainer = document.querySelector(
      `.main-photos-cont .${serviceName}_photos_container`
    );
    const countInput = document.querySelector(`.${serviceName}-photos-count`);

    let photosCount = previewImgContainer.childNodes.length;

    if (countInput) {
      countInput.value = photosCount;
      document.querySelector(`.${serviceName}-photos-no`).innerHTML =
        photosCount;

      updatePhotosCost();
    }
  }

  function updatePhotosCost() {
    let grandTotal = 0;

    const grandTotalElement = document.getElementById("total-price");

    document.querySelectorAll(".selectedService").forEach(function (service) {
      const serviceName = service.getAttribute("data-service-name");

      const numPhotos = parseInt(
        document.querySelector(`.${serviceName}-photos-no`).textContent,
        10
      );

      const photoCost = parseFloat(service.dataset.servicePrice);

      const additionalCostElement = document.querySelector(
        `.${serviceName}-additional-cost`
      );

      let additionalCostPerPhoto = parseFloat(
        additionalCostElement.dataset.additionalCost
      );

      let servicePrice = numPhotos * (photoCost + additionalCostPerPhoto);

      const servicePriceElement = document.getElementById(
        `service-price-${serviceName}`
      );
      servicePriceElement.innerHTML = servicePrice.toFixed(2) + " $";

      grandTotal += servicePrice;
    });

    grandTotalElement.textContent = grandTotal.toFixed(2) + " $";
  }

  function updateCostDependOnSelectedTime(serviceName) {
    const selectTurnaroundTime = document.querySelector(
      `.${serviceName}_service_time`
    );

    selectTurnaroundTime.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      selectedAdditionalCostPerPhoto = parseFloat(
        selectedOption.dataset.selectedAdditionalCost
      );

      const additionalCostElement = document.querySelector(
        `.${serviceName}-additional-cost`
      );

      additionalCostElement.innerHTML = `${selectedOption.textContent} (${selectedAdditionalCostPerPhoto} $)`;

      additionalCostElement.dataset.additionalCost =
        selectedAdditionalCostPerPhoto;

      updatePhotosCost();
    });
  }

  function deleteServiceOrder(serviceName) {
    let deleteButton = document.querySelector(`.${serviceName}_delete_btn`);
    deleteButton.addEventListener("click", function () {
      let serviceOrder = document.querySelector(`#${serviceName}-cont`);
      let tableServiceRow = document.querySelector(
        `#service-row-${serviceName}`
      );
      serviceOrder.remove();
      tableServiceRow.remove();

      updatePhotosCost();
    });
  }
});
