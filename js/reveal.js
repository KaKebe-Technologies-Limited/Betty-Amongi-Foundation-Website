(function () {
    "use strict";

    var supportsIO = "IntersectionObserver" in window;

    function initReveal() {
        var items = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
        if (!items.length) return;

        if (!supportsIO) {
            items.forEach(function (el) { el.classList.add("in-view"); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var delay = entry.target.getAttribute("data-reveal-delay") || "0s";
                    entry.target.style.transitionDelay = delay;
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        items.forEach(function (el) { observer.observe(el); });
    }

    function initLightbox() {
        var triggers = document.querySelectorAll("[data-lightbox]");
        if (!triggers.length) return;

        var modalEl = document.getElementById("lightboxModal");
        if (!modalEl) return;
        var imgEl = modalEl.querySelector("img");
        var captionEl = modalEl.querySelector(".lightbox-caption");
        var modal = new bootstrap.Modal(modalEl);
        var gallery = Array.prototype.slice.call(triggers);
        var current = 0;

        function show(index) {
            current = (index + gallery.length) % gallery.length;
            var el = gallery[current];
            imgEl.src = el.getAttribute("data-lightbox");
            captionEl.textContent = el.getAttribute("data-caption") || "";
        }

        gallery.forEach(function (el, index) {
            el.style.cursor = "pointer";
            el.addEventListener("click", function () {
                show(index);
                modal.show();
            });
        });

        var prevBtn = modalEl.querySelector(".lightbox-prev");
        var nextBtn = modalEl.querySelector(".lightbox-next");
        if (prevBtn) prevBtn.addEventListener("click", function () { show(current - 1); });
        if (nextBtn) nextBtn.addEventListener("click", function () { show(current + 1); });

        document.addEventListener("keydown", function (e) {
            if (!modalEl.classList.contains("show")) return;
            if (e.key === "ArrowRight") show(current + 1);
            if (e.key === "ArrowLeft") show(current - 1);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initReveal();
        initLightbox();
    });
})();
