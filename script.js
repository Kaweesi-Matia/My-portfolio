<<<<<<< HEAD
=======


const mobileMenu = document.getElementById('mobile-menu');

function showMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  }
}
showMobileMenu();

function exitMobileMenu() {
  mobileMenu.style.display = 'none';
}
exitMobileMenu();



const worksData = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: {
      screenshotMobile: './images/snapshoot-mobile1.svg',
      screenshotDesktop: './images/snapshot-desktop1.svg',
    },
    description: {
      descMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: {
      screenshotMobile: './images/snapshot-mobile2.svg',
      screenshotDesktop: './images/snapshot-desktop2.svg',
    },
    description: {
      descMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'FACEBOOK',
      role: 'Full stack Dev',
      year: 2015,
    },
    screenshot: {
      screenshotMobile: './images/snapshot-mobile3.svg',
      screenshotDesktop: './images/snapshot-desktop3.svg',
    },
    description: {
      descMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: {
      screenshotMobile: './images/snapshot-mobile4.svg',
      screenshotDesktop: './images/snapshot-desktop4.svg',
    },
    description: {
      descMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'Ruby', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];


const myPortfolio = document.querySelector('.works-wrapper');
const displayWorksData = worksData.map((works, index) => `<div class="card1-container">
<div class="image-holder">
  <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot"
   class="">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot"
   class="">
  </div>
</div>
<div class="category-a">
   <h1 class="project-title">${works.title}</h1>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <p class="read-msg">${works.description.descMobile}</p>
   <ul class="tech-tags">
      <li><button class="html-btn">${works.skills[0]}</button></li>
      <li><button class="css-btn">${works.skills[1]}</button></li>
      <li><button class="javascript-btn">${works.skills[2]}</button></li>
   </ul>
   <button class="see-project-btn" id=${index}>See Project</button>
</div>
</div>`).join('');

myPortfolio.innerHTML = displayWorksData;

const popUpWindow = worksData.map((works) => `<div class="popup-container" id="popup">
<div class="popup-holder">
   <div class="close-popup">
      <h1 class="work
      -title">${works.title}</h1>
      <img src="./images/cancel.svg" onclick="closePopUpWindow()" alt="close popup dialog" id="close">
   </div>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <div class="image-holder">
   <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot"
   class="">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot"
   class="">
  </div>
   </div>
   <div class="bottom-block">
      <p class="read-desc">${works.description.descPopup}</p>
      <div>
         <div class="tech-tags">
            <button class="html-btn">${works.skills[0]}</button>
            <button class="css-btn">${works.skills[1]}</button>
            <button class="javascript-btn">${works.skills[2]}</button>
         </div>
         <div class="live-btn">
            <a href=${works.liveLink}><img src="./images/see-live-btn.svg" alt="see live button" class="see-live"></a>
            <a href=${works.sourceLink}><img src="./images/see-source-btn.svg" alt="see source button" class="see-source"></a>
         </div>
      </div>
   </div>
</div>
</div>`);

const modal = document.getElementById('popup');
modal.innerHTML = popUpWindow;
function closePopUpWindow() {
  modal.style.display = 'none';
}
closePopUpWindow();

// function for popup window implementation

const seeProject1 = document.getElementById('0');
const seeProject2 = document.getElementById('1');
const seeProject3 = document.getElementById('2');
const seeProject4 = document.getElementById('3');

function openPopUp() {
  if (modal.style.display === 'none') {
    const e = Number(this.id);
    modal.innerHTML = popUpWindow[e];
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

seeProject1.onclick = openPopUp;
seeProject2.onclick = openPopUp;
seeProject3.onclick = openPopUp;
seeProject4.onclick = openPopUp;

>>>>>>> f59f3356ce27f044195429c1e220a83079607cb8
