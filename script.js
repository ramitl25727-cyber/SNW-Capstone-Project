const surpriseBtn = document.getElementById("surprise-btn");

surpriseBtn.addEventListener("click", function() {
    const msg = document.createElement("h2");
    msg.textContent = "🎉 Welcome to Foodxotic! Enjoy your Veg Delights!";
    const area = document.getElementById("message-area");
    area.appendChild(msg);
});
