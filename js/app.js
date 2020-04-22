// Global variables

const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle-menu");
const menuContainer = document.querySelector(".menu-container");
const container = document.querySelector(".container");
const mainContent = document.querySelector(".container div");
const goToTopBtn = document.querySelector(".go-to-top");
let prevScrollpos = 0;

// Variable for Navigation and Content sections
const sectionContent = [
  {
    title: "Section 1",
    id: "section1",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 2",
    id: "section2",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 3",
    id: "section3",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 4",
    id: "section4",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 5",
    id: "section5",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 6",
    id: "section6",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 7",
    id: "section7",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
  {
    title: "Section 8",
    id: "section8",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit amet tellus. Id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis. Cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum pulvinar. Purus in mollis nunc sed id semper risus in. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada proin libero. Sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et. Sed faucibus turpis in eu mi bibendum neque egestas. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed faucibus turpis in eu mi bibendum.
Donec et odio pellentesque diam volutpat commodo sed egestas. Sed faucibus turpis in eu mi bibendum. Vitae tempus quam pellentesque nec nam. Augue interdum velit euismod in pellentesque massa. Morbi leo urna molestie at elementum eu. Convallis aenean et tortor at risus viverra adipiscing at in. Sagittis purus sit amet volutpat consequat mauris. Arcu bibendum at varius vel pharetra vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Purus in mollis nunc sed id semper risus in. Nunc vel risus commodo viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi porta lorem. Venenatis urna cursus eget nunc scelerisque viverra.
Consequat interdum varius sit amet mattis. Pellentesque habitant morbi tristique senectus et netus. Nunc id cursus metus aliquam eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas erat imperdiet sed euismod nisi. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo vel orci porta non. Tristique senectus et netus et malesuada. Lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Enim blandit volutpat maecenas volutpat blandit aliquam. Integer vitae justo eget magna fermentum iaculis eu non.`,
  },
];

// The scroll function is to show / hide the button, which when pressed returns to the top of the page
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

// This function is for scroll to top of page (is connected to a button by a click event)
function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeClassActive();
  document.querySelector(".menu a").classList.add("active");
  mainContent.firstElementChild.classList.add("active");
}

// Add Navigation items and content sections
sectionContent.forEach((content) => {
  // menu list
  const listElement = document.createElement("li");
  const anchorsElement = document.createElement("a");

  //   section list
  const sectionElement = document.createElement("section");
  const divElement = document.createElement("div");
  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");

  //   menu list content
  anchorsElement.textContent = content.title;
  anchorsElement.setAttribute("href", `#${content.id}`);
  anchorsElement.setAttribute("data-nav", content.title);

  // section list content
  sectionElement.setAttribute("id", content.id);
  sectionElement.setAttribute("data-nav", content.title);
  heading.textContent = content.title;
  paragraph.textContent = content.text;

  //   append element to menu
  listElement.appendChild(anchorsElement);
  menu.appendChild(listElement);

  // append element to container
  divElement.appendChild(heading);
  divElement.appendChild(paragraph);
  sectionElement.appendChild(divElement);
  mainContent.appendChild(sectionElement);
});

// Add/remoce class active to Navigation item who is clicked and Section who is selected from Navigation
function toggleClassActive() {
  if (menuContainer.hasAttribute("style")) {
    menuContainer.removeAttribute("style");
  }

  removeClassActive();
  addClassActive();
}

// Remove all class Active of elements
function removeClassActive() {
  for (let item of menu.children) {
    if (item.firstElementChild.hasAttribute("class")) {
      item.firstElementChild.removeAttribute("class");
    }
  }
  for (let section of mainContent.children) {
    if (section.hasAttribute("class")) {
      section.removeAttribute("class");
    }
  }
}

// Add  class Active to selected elements
function addClassActive() {
  let dataNav = this.event.target.getAttribute("data-nav");
  for (let section of mainContent.children) {
    if (section.getAttribute("data-nav") === dataNav) {
      section.classList.add("active");
      this.event.target.classList.add("active");
    }
  }
}

// The function removes the default behavior of the anchor tag and goes to the selected section
function goToSection(event) {
  event.stopPropagation();

  let target = document.querySelector(event.target.hash);
  target.scrollIntoView({
    behavior: "smooth",
  });
  toggleClassActive();
}

let sections = () => {};
// Тhis implementation of the event attached to the window is used to call the scroll function and to show / hide the header
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  let positionTop = mainContent.scrollTop;
  let partOfWindow = window.innerHeight / 4;

  setTimeout(function () {
    document.querySelector(".header").classList.remove("hide");
  }, 2000);
  prevScrollpos > currentScrollPos
    ? document.querySelector(".header").classList.remove("hide")
    : document.querySelector(".header").classList.add("hide");

  prevScrollpos = currentScrollPos;

  scrollFunction();

  // This for loop get all sections and when some section is visible highlight a specific menu link
  for (let section of mainContent.children) {
    let target = section.getBoundingClientRect().top;
    let dataNav = section.getAttribute("data-nav");

    let navigationLink = document.querySelector(
      `.menu a[data-nav='${dataNav}']`
    );

    if (positionTop + partOfWindow >= target) {
      let activeLink = document.querySelectorAll(".menu .active");

      if (!navigationLink.hasAttribute("class")) {
        activeLink[0].removeAttribute("class");
        navigationLink.classList.add("active");
      } else {
        activeLink[0].classList.add("active");
      }
    }
  }
};

// setContainerStyle function add oto class container height
function setContainerStyle() {
  container.style.height = `${document.body.innerHeight}px`;
}

// Add class active to first element from Navigation
menu.firstElementChild.firstElementChild.classList.add("active");

// Add class active to first element from content page
mainContent.children[0].classList.add("active");

// Attach event listener to menu items
menu.addEventListener(
  "click",
  (event) => {
    event.target.addEventListener("click", goToSection);
  },
  true
);

// Attach event listener to button who scroll window to top
goToTopBtn.addEventListener("click", goTopFunction);

// Attach event listener to menu button (button show only for phone)
toggleMenu.addEventListener("click", () => {
  menuContainer.style.display === "block"
    ? (menuContainer.style.display = "none")
    : (menuContainer.style.display = "block");
});

// Call setContainerStyle function attatch to resize event
window.addEventListener("resize", setContainerStyle);
