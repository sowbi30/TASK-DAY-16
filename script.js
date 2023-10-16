document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    let messageContainer = document.getElementById("message-container");

    let count = 10;

    let countdownInterval = setInterval(function () {
        countdownElement.textContent = count;
        count--;

        if (count < 1) {
            clearInterval(countdownInterval);

            setTimeout(function () {
                countdownElement.style.display = "none";
                messageContainer.style.display = "block";
            }, 2000);
        }
    }, 1000);
      
});
