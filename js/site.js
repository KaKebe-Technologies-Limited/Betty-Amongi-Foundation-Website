(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var backToTop = document.querySelector(".back-to-top-bf");
        if (backToTop) {
            window.addEventListener("scroll", function () {
                backToTop.classList.toggle("show", window.scrollY > 300);
            });
            backToTop.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        document.querySelectorAll("form.needs-validation").forEach(function (form) {
            form.addEventListener("submit", function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });

        // CMS dashboard shell: off-canvas sidebar toggle (mirrors mentorship admin behavior)
        var sidebar = document.querySelector(".bf-sidebar");
        var backdrop = document.querySelector(".bf-sidebar-backdrop");
        document.querySelectorAll("[data-sidebar-toggle]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                if (sidebar) sidebar.classList.toggle("open");
                if (backdrop) backdrop.classList.toggle("show");
            });
        });
        if (backdrop) {
            backdrop.addEventListener("click", function () {
                if (sidebar) sidebar.classList.remove("open");
                backdrop.classList.remove("show");
            });
        }

        // Generic filename preview for file inputs
        document.querySelectorAll('input[type="file"][data-filename-target]').forEach(function (input) {
            input.addEventListener("change", function () {
                var target = document.querySelector(input.getAttribute("data-filename-target"));
                if (target) target.textContent = input.files.length ? input.files[0].name : "No file chosen";
            });
        });
    });
})();
