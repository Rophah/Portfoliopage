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

const username = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const button = document.querySelector('#button');

const navbar = document.querySelector('#nav');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  const windowHeight = window.pageYOffset;
  if (windowHeight > navbarHeight) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

console.log(navbarHeight);

const setError = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control get-error';
};

const setSuccess = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control get-success';
};

const disableBtn = (value) => {
  button.disabled = value;
};
disableBtn(true);

const storeValues = {
  name: '',
  email: '',
  message: '',
};

const setValues = () => {
  storeValues.name = username.value;
  storeValues.email = email.value;
  storeValues.message = message.value;
  localStorage.setItem('myValues', JSON.stringify(storeValues));
};

const getValues = () => {
  localStorage.getItem('storeValues');
};

const emailCheck = (email) => {
  // eslint-disable-next-line operator-linebreak
  const getEmail =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return getEmail.test(String(email).toLowerCase());
};

const validateName = () => {
  if (username.value === '') {
    setError(username, 'Name cannot be empty');
    disableBtn(true);
  } else if (username.value.length < 3) {
    setError(username, 'Name must be at least 3 characters');
    disableBtn(true);
  } else {
    setSuccess(username, '');
  }
  setValues();
};

const validateEmail = () => {
  if (email.value === '') {
    setError(email, 'Email cannot be empty');
    disableBtn(true);
  } else if (!emailCheck(email.value)) {
    setError(email, 'Email is not valid');
    disableBtn(true);
  } else {
    setSuccess(email, '');
  }
  setValues();
};

const validateMessage = () => {
  if (message.value === '') {
    setError(message, 'Message cannot be empty');
    disableBtn(true);
  } else if (message.value.length < 15) {
    setError(message, 'Message should be more than 15 characters');
    disableBtn(true);
  } else {
    setSuccess(message, '');
    disableBtn(false);
  }
  setValues();
};

username.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
message.addEventListener('input', validateMessage);
window.addEventListener('load', getValues);