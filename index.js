// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const infoSections = document.querySelectorAll(".info");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let target = button.getAttribute("data-target");

            infoSections.forEach(section => {
                if (section.id === target) {
                    section.classList.toggle("oculto");
                } else {
                    section.classList.add("oculto");
                }
            });
        });
    });
});
