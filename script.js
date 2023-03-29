// const wrapper = document.getElementById("wrapper");

// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const uniqueRand = (min, max, prev) => {
//   let next = prev;
  
//   while(prev === next) next = rand(min, max);
  
//   return next;
// }

// const combinations = [
//   { configuration: 1, roundness: 1 },
//   { configuration: 1, roundness: 2 },
//   { configuration: 1, roundness: 4 },
//   { configuration: 2, roundness: 2 },
//   { configuration: 2, roundness: 3 },
//   { configuration: 3, roundness: 3 }
// ];

// let prev = 0;

// setInterval(() => {
//   const index = uniqueRand(0, combinations.length - 1, prev),
//   combination = combinations[index];
  
//   wrapper.dataset.configuration = combination.configuration;
//   wrapper.dataset.roundness = combination.roundness;
  
//   prev = index;
// }, 3000);



//scroll thing---------------------------------------------
const scrollOffset = 100;

// const windowHeight = document.getElementById("window-height");
//const offsetTop = document.getElementById("offset-top");
const scrollElement = document.querySelector(".js-scroll");
const instructions = document.getElementById("instructions");

// const getWindowHeight = () => {
//   windowHeight.innerHTML =
//     window.innerHeight || document.documentElement.clientHeight;
// };

// const getOffsetTop = () => {
//   offsetTop.innerHTML = scrollElement.getBoundingClientRect().top;
// }

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  //console.log(el.getBoundingClientRect().top)
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
  instructions.classList.add('fade');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
  instructions.classList.remove('fade');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement(scrollElement);
  } else {
    hideScrollElement(scrollElement);
  }
}

//getWindowHeight();
//getOffsetTop()

window.addEventListener('resize', () => {
  //getWindowHeight()
})

window.addEventListener('scroll', () => {
  //getOffsetTop();
  handleScrollAnimation();
})