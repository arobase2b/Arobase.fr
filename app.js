const slideContainer = document.querySelector('.slider');
const sliderText = document.querySelector('.slider--text');
const sliderTag = document.querySelector('.slider--tag');
const sliderBtn = document.querySelector('.slider--btn');
const sliderTitle = document.querySelector('.slider--title');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');
const nav = document.querySelector('.nav');

const sliderImages = [
  {
    src: 'https://www.zupimages.net/up/22/35/qp25.png',
    tag: ['Projet en cours', 'Visite virtuel'],
    title: 'Projet title 1',
    link: 'https://www.arobase.fr',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem maiores dicta perspiciatis recusandae in neque est, illo, provident animi similique quis, possimus eius inventore cumque quod nesciunt eos nobis.'
  },
  {
    src: 'https://www.zupimages.net/up/22/35/qp25.png',
    tag: ['CRM', 'Application web'],
    title: 'Projet title 2',
    link: 'https://www.arobase.fr',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem maiores dicta perspiciatis recusandae in neque est, illo, provident animi similique quis, possimus eius inventore cumque quod nesciunt eos nobis.'
  },
  {
    src: 'https://www.zupimages.net/up/22/35/qp25.png',
    tag: ['Projet en cours', 'Mobile'],
    title: 'Projet title 3',
    link: 'https://www.arobase.fr',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem maiores dicta perspiciatis recusandae in neque est, illo, provident animi similique quis, possimus eius inventore cumque quod nesciunt eos nobis.'
  }
];

let slideCounter = 0;
let isUp = null;
const startSlider = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    document.getElementById("nav").innerHTML += 
    "<div class=\"nav-logo\" id=\"nav-"+i+"\"></div>";
  }
  document.getElementById("nav-0").classList.add('active-nav');
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
  sliderText.innerHTML = sliderImages[0].text;
  sliderBtn.innerHTML = '<a class="slider--btn--element" href="'+sliderImages[0].link+'">Lien du projet</a>';
  sliderTag.innerHTML = null;
  sliderImages[0].tag.forEach(tag => {
    sliderTag.innerHTML += '<span class="slider--tag--element">'+tag+'</span>'
  });
  sliderTitle.innerHTML = sliderImages[0].title;
};

btnRight.addEventListener('click', function() {
    console.log("start: "+slideCounter)
  if (slideCounter === sliderImages.length - 1) {
    isUp = false
    console.log('si: '+slideCounter)
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
    document.getElementById("nav-"+slideCounter).classList.remove('active-nav');
    document.getElementById("nav-0").classList.add('active-nav');
    sliderText.innerHTML = sliderImages[0].text;
    sliderBtn.innerHTML = '<a class="slider--btn--element" href="'+sliderImages[0].link+'">Lien du projet</a>';
    sliderTag.innerHTML = null;
    sliderImages[0].tag.forEach(tag => {
      sliderTag.innerHTML += '<span class="slider--tag--element">'+tag+'</span>'
    });
    sliderTitle.innerHTML = sliderImages[0].title;
    slideCounter = 0;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }else{
    console.log('sinon: '+slideCounter)
    document.getElementById("nav-"+slideCounter).classList.remove('active-nav');
    document.getElementById("nav-"+(slideCounter+1)).classList.add('active-nav');
     isUp = true
  }
  console.log('content: '+slideCounter)
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`;
    if (isUp === true) {
      sliderBtn.innerHTML = '<a class="slider--btn--element" href="'+sliderImages[slideCounter + 1].link+'">Lien du projet</a>';
      sliderText.innerHTML = sliderImages[slideCounter + 1].text;
      sliderTag.innerHTML = null;
      sliderImages[slideCounter + 1].tag.forEach(tag => {
        sliderTag.innerHTML += '<span class="slider--tag--element">'+tag+'</span>'
      });
      sliderTitle.innerHTML = sliderImages[slideCounter + 1].title;
      slideCounter++;
     }
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
  console.log("end: "+slideCounter)
});

btnLeft.addEventListener('click', function() {
    console.log("start: "+slideCounter)
  if (slideCounter === 0) {
    isUp = false
    console.log('si: '+slideCounter)
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
    document.getElementById("nav-"+(sliderImages.length - 1)).classList.add('active-nav');
    document.getElementById("nav-0").classList.remove('active-nav');
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
    sliderBtn.innerHTML = '<a class="slider--btn--element" href="'+sliderImages[sliderImages.length - 1].link+'">Lien du projet</a>';
    sliderTag.innerHTML = null;
    sliderImages[sliderImages.length - 1].tag.forEach(tag => {
      sliderTag.innerHTML += '<span class="slider--tag--element">'+tag+'</span>'
    });
    sliderTitle.innerHTML = sliderImages[sliderImages.length - 1].title;
    slideCounter = 2;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }else{
    console.log('sinon: '+slideCounter)
    document.getElementById("nav-"+slideCounter).classList.remove('active-nav');
    document.getElementById("nav-"+(slideCounter-1)).classList.add('active-nav');
     isUp = true
  }
  console.log('content: '+slideCounter)
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter - 1].src})`;
   if (isUp === true) {
      sliderText.innerHTML = sliderImages[slideCounter - 1].text;
      sliderBtn.innerHTML = '<a class="slider--btn--element" href="'+sliderImages[slideCounter - 1].link+'">Lien du projet</a>';
      sliderTag.innerHTML = null;
      sliderImages[slideCounter - 1].tag.forEach(tag => {
        sliderTag.innerHTML += '<span class="slider--tag--element">'+tag+'</span>'
      });
      sliderTitle.innerHTML = sliderImages[slideCounter - 1].title;
      slideCounter--;
  }
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
  console.log("end: "+slideCounter)
});


document.addEventListener('DOMContentLoaded', startSlider);

for (let i = 0; i < sliderImages.length; i++) {
  nav[i].addEventListener('click', function (e) {
    console.log(e);
  });
}