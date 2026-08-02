(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        // Apply form -> show success alert instead of a real submission
        var applyForm = document.querySelector(".needs-validation");
        var applySuccess = document.getElementById("applySuccess");
        var contactSuccess = document.getElementById("contactSuccess");

        if (applyForm && (applySuccess || contactSuccess)) {
            applyForm.addEventListener("submit", function (e) {
                e.preventDefault();
                e.stopPropagation();
                applyForm.classList.add("was-validated");
                if (applyForm.checkValidity()) {
                    if (applySuccess) applySuccess.classList.remove("d-none");
                    if (contactSuccess) contactSuccess.classList.remove("d-none");
                    applyForm.reset();
                    applyForm.classList.remove("was-validated");
                }
            });
        }
    });
})();
