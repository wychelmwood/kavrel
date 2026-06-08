function toggleLightMode() {
    document.body.classList.toggle("light");
}

function showAnswer(id) {
    const answer = document.getElementById(id);

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}