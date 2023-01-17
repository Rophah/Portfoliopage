const projects = [
  {
    id: 0,
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

const content = document.querySelector('#modal-overlay');

const modal = document.querySelector('#modal-overlay');

const buttons = document.querySelectorAll('.seeproject');

const modalContent = (count) => {
  content.innerHTML = `
<div class="popUpsection">
  <div class="pop">
    <div class="card1paragraph-te flexx">
      <h1 class="projectname" id="projectname"> ${projects[count].projectname}  </h1>
      <span class="popUpClose">
        <i class="fa-solid fa-xmark popUpClose" aria-hidden="true"></i>
      </span>
    </div>
    <div class="card1description-text">
      <p class="canopy marginright fontweight700" id="subprojectname">
      ${projects[count].subprojectname} 
      </p>

      <img src="images/part/counter.png" alt="counter" class="counterimg marginright" />
      <p class="imgtext marginright" id="frontendbackend"> ${projects[count].projecttype} </p>

      <img src="images/part/counter.png" alt="counter" class="counterimg marginright" />
      <p class="imgtext marginright year" id="year"> ${projects[count].year} </p>
    </div>

    <img
      src= '${projects[count].image}' 
      alt="Tonic"
      class="popimg"
      id="project-img"
    />

    <div class="popdetails">
      <p class="popUpPara popUpParagraph" id="newdetail">
      ${projects[count].details} 
      </p>

      <div>
        <div class="popUp-button">
          <p class="card1-button-paragraph fontweight500" id="tech1"> ${projects[count].usedtechnology1} </p>
          <p class="card1-button-paragraph fontweight500" id="tech2"> ${projects[count].usedtechnology2} </p>
          <p class="card1-button-paragraph fontweight500" id="tech3"> ${projects[count].usedtechnology3} </p>
        </div>

        <div class="popUpbuttonDiv">
          <a href= '${projects[count].projectsrc}'  class="card1-project fontweight500" id="projectsrc">See live</a>

          <a href= '${projects[count].githubsrc}'  class="card1-project fontweight500" id="githubsrc"
            >See source<img src="images/git/git.png" id="git" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
};

buttons.forEach((element, index) => {
  element.addEventListener('click', () => {
    modalContent(index);
    modal.classList.toggle('open-modal');
    document.body.style.overflow = 'hidden';
  });
});

if (content) {
  content.addEventListener('click', (e) => {
    if (e.target.classList.contains('popUpClose')) {
      modal.classList.toggle('open-modal');
      document.body.style.overflow = 'auto';
    }
  });
}

const button = document.querySelector('#button');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');
const submit = document.querySelector('#button');

button.disabled = true;

const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const nameInnerTextError = () => {
  usernameError.innerText = 'Name should not be less than 4 characters';
};

const messageInnerTextError = () => {
  messageError.innerText = 'Message should not be less than 15 characters';
};

const emailInnerTextError = () => {
  emailError.innerText = 'Please input a valid email address';
};

function validate() {
  submit.addEventListener('mouseover', (e) => {
    e.preventDefault();

    if (username.value.trim().length < 3 || username.value.trim().length > 40) {
      nameInnerTextError();
    } else if (!email.value.match(reg)) {
      emailInnerTextError();
    } else if (message.value.trim().length < 5 || message.value.trim().length > 500) {
      messageInnerTextError();
    } else {
      button.disabled = false;
      usernameError.innerText = '';
      messageError.innerText = '';
      emailError.innerText = '';
    }
  });
}

validate();