(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        // Switch active conversation in the chat list (visual only, dummy data)
        document.querySelectorAll(".mm-chat-list .chat-item").forEach(function (item) {
            item.addEventListener("click", function () {
                document.querySelectorAll(".mm-chat-list .chat-item").forEach(function (i) {
                    i.classList.remove("active");
                });
                item.classList.add("active");
                var badge = item.querySelector(".badge");
                if (badge) badge.remove();
            });
        });

        // Sending a message appends a bubble to the open conversation
        var chatForm = document.querySelector(".mm-chat-footer form");
        var chatBody = document.querySelector(".mm-chat-body");
        if (chatForm && chatBody) {
            chatForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var input = chatForm.querySelector('input[type="text"]');
                if (!input || !input.value.trim()) return;
                var bubble = document.createElement("div");
                bubble.className = "mm-bubble sent";
                var now = new Date();
                var time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                bubble.innerHTML = input.value.replace(/</g, "&lt;") + '<span class="bubble-time">' + time + "</span>";
                chatBody.appendChild(bubble);
                chatBody.scrollTop = chatBody.scrollHeight;
                input.value = "";
            });
        }
    });
})();
