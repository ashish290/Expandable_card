const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("action");
    });
}

panels.forEach((panel) => {
    panel.addEventListener("click",() => {
        if(panel.classList.contains("action")) {
           removeActiveClasses(); 
        } else {
            removeActiveClasses();
            panel.classList.add("action");
        }
    });
});