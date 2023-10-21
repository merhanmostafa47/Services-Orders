
        document.addEventListener('DOMContentLoaded', function () {
            const fileInputs = document.querySelectorAll('input.pservice-upload[type="file"]');

            // دالة لحساب المجموع
            const sum = arr => arr.reduce((acc, val) => acc + val, 0);

            // دالة لتنفيذ أي إجراء عند التحديث
            const onUpdate = () => {
                // إضافة أي إجراء تحتاجه هنا
                console.log('تم تحديث البيانات!');
            };

            fileInputs.forEach(input => {
                input.addEventListener('change', function () {
                    const selectedFiles = input.files;
                    const numberOfSelectedFiles = selectedFiles.length;
                    const serviceName = input.getAttribute('data-service-name');

                    document.getElementById('selected-files-count').value = numberOfSelectedFiles;

                    const rows = document.querySelectorAll('.services-summary .table-row');
                    let grandTotal = 0;

                    rows.forEach(row => {
                        const selectService = row.querySelector('.selectService');

                        if (selectService && selectService.textContent.trim() === serviceName) {
                            const photosNoElement = row.querySelector('.photos-no');
                            const imageCostElement = row.querySelector('.image-cost');
                            const servicePriceElement = row.querySelector('.service-price');

                            if (photosNoElement && imageCostElement && servicePriceElement) {
                                const imageCost = parseFloat(imageCostElement.textContent.replace('$', ''));
                                const servicePrice = imageCost * numberOfSelectedFiles;

                                photosNoElement.textContent = numberOfSelectedFiles;
                                servicePriceElement.textContent = '$' + servicePrice.toFixed(2);

                                grandTotal += servicePrice;
                            }
                        }
                    });

                    const grandTotalElement = document.querySelector('#pservice-price');

                    if (grandTotalElement) {
                        const currentTotal = parseFloat(grandTotalElement.getAttribute('data-service-total')) || 0;
                        const newTotal = currentTotal + grandTotal;

                        grandTotalElement.textContent = '$' + newTotal.toFixed(2);
                        grandTotalElement.setAttribute('data-service-total', newTotal.toFixed(2));
                        onUpdate();
                    }

                    // تنفيذ الإجراء عند حدوث أي تحديث

                });
            });
        });





        document.addEventListener('DOMContentLoaded', function () {
            const fileInputs = document.querySelectorAll('input.pservice-upload[type="file"]');
            fileInputs.forEach(function (input) {
                input.addEventListener('change', function () {
                    const selectedFiles = input.files;
                    const serviceName = input.getAttribute('data-service-name');
                    const previewContainer = input.classList.contains('ref_pservice_upload') ? input.parentNode.querySelector('.refs_img_preview') : input.parentNode.querySelector('.basic_img_preview');
                    previewContainer.innerHTML = '';

                    for (let i = 0; i < selectedFiles.length; i++) {
                        const file = selectedFiles[i];
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            const imgElement = document.createElement('img');
                            imgElement.src = e.target.result;
                            previewContainer.appendChild(imgElement);
                        };
                        reader.readAsDataURL(file);
                    }
                });
            });
        });
