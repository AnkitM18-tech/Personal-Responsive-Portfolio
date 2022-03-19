const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
    // Click active class
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        });
    }

    // Section active class
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if(id) {
            //remove active from other btns
            sectionBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });
    
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });

    //Toggle Theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    });
}

pageTransitions();