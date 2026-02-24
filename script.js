// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Validation
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let error = '';

        if(name === '' || email === '' || message === ''){
            error = 'Please fill in all fields.';
        } else if(!email.includes('@')){
            error = 'Please enter a valid email.';
        }

        if(error !== ''){
            e.preventDefault();
            alert(error);
        }
    });
}

// ===== Scroll Animation =====
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// ===== Dynamic Projects (Append Only) =====
const projectData = [
    {title: "Project Four", desc: "Creative portfolio site.", img: "https://source.unsplash.com/400x200/?portfolio"},
    {title: "Project Five", desc: "E-commerce website template.", img: "https://source.unsplash.com/400x200/?ecommerce"}
];

const projectContainer = document.querySelector('.projects');
if(projectContainer){
    projectData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;
        projectContainer.appendChild(card);
    });
}