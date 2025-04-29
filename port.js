const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfoilioLists = document.querySelectorAll('.portfolio-list');
const portfoilioBoxs = document.querySelectorAll('.portfolio-box');

//navbr actions and all sections along with cube rotation when navbar is clicked.
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active'); 
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active'); 
        sections[idx].classList.add('active');
    });
});



// resume section when clicking tab-list.
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active'); 
        list.classList.add('active');

        document.querySelector('.resume-box.active')?.classList.remove('active'); 
        resumeBoxs[idx].classList.add('active');
    });
});

// portfolio section when clicking tab-list.
portfoilioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active'); 
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active'); 
        portfoilioBoxs[idx].classList.add('active');
    });
});
