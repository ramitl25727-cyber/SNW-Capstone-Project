const surpriseBtn = document.getElementById("surprise-btn");
const area = document.getElementById("message-area");
surpriseBtn.addEventListener("click", function() {
    area.innerHTML = "";
    const msg = document.createElement("h2");
    msg.textContent = "🎉 Welcome to Foodxotic! Enjoy your Veg Delights!";

    area.appendChild(msg);
});
