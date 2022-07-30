const hamburger = document.querySelector('#hamburger');
const closed = document.querySelector('#close');
const navListItems = document.querySelectorAll('.nav-list-item');
const navList = document.querySelector('#nav-list');

const mobileMenu = () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('close');
  closed.classList.toggle('displayshow');
};

navListItems.forEach((element) => {
  element.addEventListener('click', mobileMenu);
});

hamburger.addEventListener('click', mobileMenu);
closed.addEventListener('click', mobileMenu);

// local project data
const projects = [
  {
    id: 1,
    projectname: 'Tonic',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/facebook.png',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technology: ['html', 'css', 'javascript'],
    projectsrc: '#',
    githubsrc: '#',
  },
  {
    id: 1,
    projectname: 'Tonic',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/nature.png',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technology: ['html', 'css', 'javascript'],
    projectsrc: '#',
    githubsrc: '#',
  },
  {
    id: 3,
    projectname: 'Tonic',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/professional.png',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technology: ['html', 'css', 'javascript'],
    projectsrc: '#',
    githubsrc: '#',
  },
  {
    id: 4,
    projectname: 'Multi-Post Stories',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/uber.png',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technology: ['html', 'css', 'javascript'],
    projectsrc: '#',
    githubsrc: '#',
  },
];

const image = document.getElementById('project-img');
