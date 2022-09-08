const portfolio = [
  {
    name: 'Tonic',
    image: 'images/pop.png',
    name2: 'Tonic',
    image2: 'images/snap.png',
    description:
      ' A tonic is something, sometimes a medicine, that makes you feel better or restores you to health. Before doctors prescribed drugs, crooked salesmen sold all sorts of dubious tonics.',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
  {
    name: 'Multi-Post Stories',
    image: 'images/multip.png',
    name2: 'Multi-Post Stories',
    image2: 'images/story.png',
    description:
      " Share All sharing options for: Instagram now lets you upload multiple photos on one Story post with 'layout' feature. Instagram's newest Stories feature allows users to post multiple photos on one screen. The feature, called Layout, is launching globally today, and people can incorporate up to six photos.",
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
  {
    name: 'Facebook 360',
    name2: 'Tonic',
    image: 'images/facebpp.png',
    image2: 'images/snap1.png',
    description:
      " Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.",
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },

  {
    name: 'Uber Navigation',
    name2: 'Multi-Post Stories',
    image2: 'images/snap3.png',
    image: 'images/uberp.png',
    description:
      ' On the driver team at Uber, one of our jobs is to take the pressure off of drivers, so that they can focus on smooth and stress-free rides for everybody. We want to make sure that drivers have the best features possible directly in-app, and one of the most important features is a navigation system. So we started with a basic question:',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
];

const projectCards = [
  {
    card: 1,
    name: 'Tonic',
    name2: 'Tonic',
    image: '',
    image2: 'images/tonic1.png',
    description: `A daily selection of privately personalized reads; no accounts or
                              sign-ups required.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    card: 2,
    name: 'Multi-Post Stories',
    name2: 'Multi-Post Stories',
    image: 'images/story.png',
    image2: 'images/multi2.png',
    description: `Experimental content creation feature that allows users to add to
                              an existing story over the course of a day without spamming their
                              friends.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 3,
    name: 'Tonic',
    name2: 'Facebook 360',
    image: 'images/snap1.png',
    image2: 'images/portcard.png',
    description: ` Exploring the future of media in Facebook's first Virtual Reality
                              app; a place to discover and enjoy 360 photos and videos on Gear
                              VR.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    name2: 'Uber Navigation',
    image: 'images/snap3.png',
    image2: 'images/uber2.png',
    description: `  A smart assistant to make driving more safe, efficient, and fun by
                              unlocking your most expensive computer: your car.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['UBER', 'Lead Developer', '2018'],
  },
];

const portfolioSection = document.getElementById('portfolio');
portfolioSection.innerHTML = projectCards
  .map(
    (project, index) => `
  <section class="card ${index % 2 !== 0 ? 'image-left' : 'image-right'}">
<div class="content-right">
          <img class="mobileCard" src="${project.image}" alt="Tonic image" />
          <img
            class="desktopCard"
            src="${project.image2}"
            alt="Nature image"
          /></div>

          <div class="content-left">
          <h2 class="mobileheadline">${project.name}</h2>
          <div class="">
            <h2 class="desktopheadline">${project.name2}</h2>
            <div id="profs" >
              <h3 id="cannopy">${project.specifics[0]}</h3>
              <img id="bullet" src="images/bullet.png" alt="" />
              <h3 class="profList">${project.specifics[1]}</h3>
              <img  id="bullet2"src="images/bullet.png" alt="" />
              <h3 class="profList">${project.specifics[2]}</h3>
            </div>
            <div id="prof2">
              <h3  id="cannopy">${project.specifics2[0]}</h3>
              <img src="images/bullet.png" alt="Counter icon" />
              <h3 class="">${project.specifics2[1]}</h3>
              <img src="images/bullet.png" alt="Counter icon" />
              <h3 class="">${project.specifics2[2]}</h3>
            </div>
            <div class="">
              <p class="tonicm-p">
              ${project.description}
              </p>
              <p class="tonicd-p">
               ${project.description}
              </p>
              <ul class="button">
                <li>${project.technologies[0]}</li>
                <li>${project.technologies[1]}</li>
                <li>${project.technologies[2]}</li>
              </ul>
              <ul class="buttonx1">
                 <li>${project.technologies[0]}</li>
                <li>${project.technologies[1]}</li>
                <li>${project.technologies[2]}</li>
              </ul>
              <button data-modal=".modal" class="hidden33" type="button">
                See Project
              </button>
            </div>            
     </div></div>
   </section>
    `,
  )
  .join('');

/* Desktop popup */

const sectionWrap = document.querySelector('#sectionWrap');

const desktopDetail = document.querySelector('.desktop');
const mobileWrap = document.querySelector('#mobileWrap');
const deskHeading = document.querySelector('.deskHeading');
const deskList1 = document.querySelector('.deskList1');
const deskList2 = document.querySelector('.deskList2');
const deskList3 = document.querySelector('.deskList3');

const deskpara = document.querySelector('.deskpara');

const openButtons = document.querySelectorAll('[data-modal]');
const languageButtons = document.querySelector('.deskButtonlist');
const liveLink = document.querySelector('#liveLink');
const sourceLink = document.querySelector('#sourceLink');
const deskImag = document.querySelector('.deskImag');

function createWindow(index) {
  languageButtons.innerHTML = '';
  deskHeading.innerHTML = portfolio[index].name;
  deskpara.innerHTML = portfolio[index].description;
  portfolio[index].technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerHTML = technology;
    languageButtons.appendChild(li);
  });
  liveLink.href = portfolio[index].liveLink;
  sourceLink.href = portfolio[index].sourceLink;
  deskImag.src = portfolio[index].image;
  deskList1.innerHTML = 'CANOPY';
  deskList2.innerHTML = 'BACK END DEV';
  deskList3.innerHTML = '2015';
}

function openWindow() {
  sectionWrap.style.display = 'block';
  mobileWrap.style.display = 'block';
  desktopDetail.style.display = 'block';
}

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal);
    openWindow(modal);
    createWindow(Array.prototype.indexOf.call(openButtons, button));
  });
});

function closeall() {
  mobileWrap.style.display = 'none';
  sectionWrap.style.display = 'none';
}
closeall();

const mobileHeading = document.querySelector('.mobileHeading');
const mobList1 = document.querySelector('.mobList1');
const mobList2 = document.querySelector('.mobList2');
const mobList3 = document.querySelector('.mobList3');
const mobImg = document.querySelector('.mobImag');
const mobilepara = document.querySelector('.mobilepara');
const openButtonsMobile = document.querySelectorAll('[data-modal]');
const languageButtonsMobile = document.querySelector('.mobButtonlist');

function createWindowMobile(index) {
  languageButtonsMobile.innerHTML = '';
  mobileHeading.innerHTML = portfolio[index].name2;
  mobilepara.innerHTML = portfolio[index].description;
  portfolio[index].technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerHTML = technology;
    languageButtonsMobile.appendChild(li);
  });
  liveLink.href = portfolio[index].liveLink;
  sourceLink.href = portfolio[index].sourceLink;
  mobImg.src = portfolio[index].image2;
}

const ListItems = {
  itemA: 'CANOPY',
  itemB: 'BACK END DEV',
  itemC: '2015',
};

mobList1.innerHTML = ListItems.itemA;
mobList2.innerHTML = ListItems.itemB;
mobList3.innerHTML = ListItems.itemC;

openButtonsMobile.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal);
    openWindow(modal);
    createWindowMobile(Array.prototype.indexOf.call(openButtons, button));
  });
});
