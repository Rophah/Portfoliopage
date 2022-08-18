// local project data
const projects = [
  {
    id: 1,
    projectname: 'Tonic',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/facebook.png',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    usedtechnology1: 'html',
    usedtechnology2: 'css',
    usedtechnology3: 'javascript',
    projectsrc: '#',
    githubsrc: '#',
  },
  {
    id: 1,
    projectname: 'Multi-Post Stories',
    subprojectname: 'canopy',
    projecttype: 'Back end dev',
    year: 2015,
    image: 'images/portoflioCard/nature.png',
    details:
      "images/portoflioCardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    usedtechnology1: 'html',
    usedtechnology2: 'css',
    usedtechnology3: 'javascript',
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
    details:
      "technology: ['html', 'css', 'javascript'],Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    usedtechnology1: 'html',
    usedtechnology2: 'css',
    usedtechnology3: 'javascript',
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
    details:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    usedtechnology1: 'html',
    usedtechnology2: 'css',
    usedtechnology3: 'javascript',
    projectsrc: '#',
    githubsrc: '#',
  },
];

const hamburger = document.querySelector('#hamburger');
const closed = document.querySelector('.close');
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

const images = document.querySelector('#project-img');
const details = document.querySelector('#newdetail');
const projectsrcs = document.querySelector('#projectsrc');
const projectnames = document.querySelector('#projectname');
const subprojectnames = document.querySelector('#subprojectname');
const years = document.querySelector('#year');
const frontendBackendDev = document.querySelector('#frontendbackend');
const technology1 = document.querySelector('#tech1');
const technology2 = document.querySelector('#tech2');
const technology3 = document.querySelector('#tech3');
const githubsrcs = document.querySelector('#githubsrc');
const closeBtn = document.querySelector('#popUpClose');
const modal = document.querySelector('#modal-overlay');

const buttons = document.querySelectorAll('.seeproject');

const projectmodal = (count) => {
  const project = projects[count];
  images.src = project.image;
  details.textContent = project.details;
  projectsrcs.href = project.projectsrc;
  projectnames.textContent = project.projectname;
  subprojectnames.textContent = project.subprojectname;
  years.textContent = project.year;
  frontendBackendDev.textContent = project.projecttype;
  githubsrcs.href = project.githubsrc;
  technology1.textContent = project.usedtechnology1;
  technology2.textContent = project.usedtechnology2;
  technology3.textContent = project.usedtechnology3;
};

buttons.forEach((element, index) => {
  element.addEventListener('click', () => {
    projectmodal(index);
    modal.classList.toggle('open-modal');
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('open-modal');
  document.body.style.overflow = 'auto';
});
