(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        // Sidebar toggle (dashboard shell, off-canvas below 1024px)
        var toggleBtns = document.querySelectorAll("[data-sidebar-toggle]");
        var sidebar = document.querySelector(".mm-sidebar");
        var backdrop = document.querySelector(".mm-sidebar-backdrop");

        function closeSidebar() {
            if (sidebar) sidebar.classList.remove("open");
            if (backdrop) backdrop.classList.remove("show");
        }

        toggleBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                if (sidebar) sidebar.classList.toggle("open");
                if (backdrop) backdrop.classList.toggle("show");
            });
        });

        if (backdrop) backdrop.addEventListener("click", closeSidebar);

        // Back-to-top button
        var backToTop = document.querySelector(".back-to-top-mm");
        if (backToTop) {
            window.addEventListener("scroll", function () {
                backToTop.classList.toggle("show", window.scrollY > 300);
            });
            backToTop.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // Bootstrap tooltip/popover init (if any are present)
        if (window.bootstrap) {
            document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
                new bootstrap.Tooltip(el);
            });
        }

        // Bootstrap client-side validation styling
        document.querySelectorAll("form.needs-validation").forEach(function (form) {
            form.addEventListener("submit", function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });

        // Password visibility toggle
        document.querySelectorAll("[data-toggle-password]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var target = document.querySelector(btn.getAttribute("data-toggle-password"));
                if (!target) return;
                var isPassword = target.getAttribute("type") === "password";
                target.setAttribute("type", isPassword ? "text" : "password");
                var icon = btn.querySelector("i");
                if (icon) {
                    icon.classList.toggle("bi-eye", !isPassword);
                    icon.classList.toggle("bi-eye-slash", isPassword);
                }
            });
        });

        // File input -> show chosen filename
        document.querySelectorAll('input[type="file"][data-filename-target]').forEach(function (input) {
            input.addEventListener("change", function () {
                var target = document.querySelector(input.getAttribute("data-filename-target"));
                if (target) target.textContent = input.files.length ? input.files[0].name : "No file chosen";
            });
        });

        // Auto-scroll any chat body to the latest message on load
        document.querySelectorAll(".mm-chat-body").forEach(function (el) {
            el.scrollTop = el.scrollHeight;
        });
    });

    // Simple reusable countdown timer, used by assessment-take.html
    // Usage: MM.startCountdown(el, minutes, onExpire)
    window.MM = window.MM || {};
    window.MM.startCountdown = function (el, minutes, onExpire) {
        if (!el) return;
        var remaining = Math.floor(minutes * 60);
        function render() {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            el.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
            if (remaining <= 60) {
                el.classList.add("text-danger");
            }
        }
        render();
        var interval = setInterval(function () {
            remaining -= 1;
            render();
            if (remaining <= 0) {
                clearInterval(interval);
                if (typeof onExpire === "function") onExpire();
            }
        }, 1000);
        return interval;
    };
})();
