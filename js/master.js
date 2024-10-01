// toggle spin & open class on click
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

/////////////////////////////// settings box   //////////////////////////////

// example one
// let r = document.querySelector(":root");
// let mainColor = document.querySelector(
//   ".settings-box .option-box .colors-list"
// );
// mainColor.addEventListener("click", (e) => {
//   r.style.setProperty(
//     "--main-Color",
//     `${e.target.getAttribute("data-color")}` //العنصر الي انا دست عليه
//   );
//   Array.from(mainColor.children).forEach((ele) =>
//     ele.classList.remove("active-color")
//   );
//   e.target.classList.add("active-color");
// });
let r = document.querySelector(":root");
let mainColor = document.querySelectorAll(
  ".settings-box .option-box .colors-list li"
);
mainColor.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    r.style.setProperty(
      "--main-Color",
      `${e.target.getAttribute("data-color")}` //العنصر الي انا دست عليه
    );
    // r.style.setProperty("--main-Color", `${ele.getAttribute("data-color")}`);

    // document.documentElement.style.setProperty("--main-Color",`${ele.getAttribute("data-color")}`);

    mainColor.forEach((ele) => ele.classList.remove("active-color"));
    ele.classList.add("active-color");

    // local storage
    localStorage.setItem(
      "main-color",
      `${e.target.getAttribute("data-color")}`
    );
  });
});

//get color from local storage
if (window.localStorage.getItem("main-color") !== null) {
  document.documentElement.style.setProperty(
    "--main-Color",
    localStorage.getItem("main-color")
  );
  mainColor.forEach((ele) => ele.classList.remove("active-color"));
  document
    .querySelector(`[data-color="${localStorage.getItem("main-color")}"]`)
    .classList.add("active-color");
}

// Random Backgrounds
let wantRandom = document.querySelectorAll(".random-backgrounds span");
wantRandom.forEach((ele) => {
  ele.onclick = (e) => {
    handelActive(e);

    if (document.querySelector(".yes").classList.contains("active")) {
      localStorage.setItem("element", `yes`);
    } else {
      localStorage.setItem("element", `no`);
    }

    randomizeImg();
  };
});

//////////////////////////   landing Bage   /////////////////////////
let landing_img = document.querySelector(".landing-page");
let backgroundImg = [
  "url(./Imags/02.jpg)",
  "url(./Imags/01.jpg)",
  "url(./Imags/03.jpg)",
  "url(./Imags/04.jpg)",
  "url(./Imags/05.jpg)",
];

let backgroundInterval;
function randomizeImg() {
  if (
    document.querySelector(".yes").classList.contains("active") &
    (backgroundInterval < 1 || backgroundInterval === undefined)
  ) {
    backgroundInterval = setInterval(() => {
      let i = Math.floor(Math.random() * backgroundImg.length);
      landing_img.style.backgroundImage = backgroundImg[i];
    }, 1000);
  } else {
    clearInterval(backgroundInterval);
    backgroundInterval = 0;
  }
}
if (
  localStorage.getItem("element") == "yes" ||
  localStorage.getItem("element") === null
) {
  randomizeImg();
} else {
  wantRandom.forEach((ele) => ele.classList.remove("active"));
  document.querySelector(".random-backgrounds .no").classList.add("active");
}

///////////////////////// start our skills /////////////////////////
let skillBar = document.querySelectorAll(".skill-progress [data-progress]");
let ourSkills = document.querySelector(".skills");
window.addEventListener("scroll", () => {
  if (
    scrollY >=
    ourSkills.offsetTop + ourSkills.offsetHeight - window.innerHeight - 20
  ) {
    skillBar.forEach((ele) => {
      ele.style.width = ele.dataset.progress;
      // ele.style.width = ele.getAttribute("data-progress");
    });
  }
});

//////////////////////// end our skills ////////////////////////
///////////////////////  start Gallery  ///////////////////////
//create popup
let popup = document.createElement("div");
popup.classList.add("popup");
let popupText = document.createElement("h3");
popup.appendChild(popupText);
let popupImg = document.createElement("img");
popup.appendChild(popupImg);
let closePopup = document.createElement("div");
closePopup.innerText = "x";
closePopup.classList.add("close-button");
popup.appendChild(closePopup);
let overlay = document.createElement("div");
overlay.classList.add("popup-overlay");
let popupWoverlay = document.createElement("div");
popupWoverlay.appendChild(overlay);
popupWoverlay.appendChild(popup);
let Gallery = document.querySelectorAll(".gallery .images-box img");
Gallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    popupImg.src = e.target.getAttribute("src");
    // popupText.innerHTML = "";
    while (popupText.hasChildNodes()) {
      popupText.removeChild(popupText.firstChild);
    }
    popupText.appendChild(
      document.createTextNode(e.target.getAttribute("alt"))
    );
    document.body.appendChild(popupWoverlay);
    closePopup.onclick = () => {
      popupWoverlay.remove();
    };
  });
});

///////////////////////  start Gallery  //////////////////////
//////////////////////   start bullets  /////////////////////
let bullets = document.querySelectorAll(".nav-bullets .bullet");

scrollToSomewhere(bullets);
// bullets.forEach((bull) => {
//   bull.onclick = () => {
//     // scrollTo({
//     //   top: document.querySelector(bull.getAttribute("data-section")).offsetTop,
//     //   behavior: "smooth",
//     // });
//     document.querySelector(bull.getAttribute("data-section")).scrollIntoView({
//       behavior: "smooth",
//     });
//   };
// });
/////////////////////    end bullets  //////////////////////
// links
let allLinks = document.querySelectorAll(".header-area ul li a");

scrollToSomewhere(allLinks);

function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.preventDefault();
      document
        .querySelector(event.target.getAttribute("data-section"))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });
}

// handel active state
function handelActive(e) {
  e.target.parentElement
    .querySelectorAll(".active")
    .forEach((ele) => ele.classList.remove("active"));
  e.target.classList.add("active");
}
//////////////// bullets option //////////////////////

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
  if (bulletLocalItem == "yes") {
    bulletsContainer.style.display = "block";
  } else {
    bulletsSpan.forEach((ele) => ele.classList.remove("active"));
    document.querySelector(".bullets-option .no").classList.add("active");
    bulletsContainer.style.display = "none";
  }
}

bulletsSpan.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    handelActive(e);
    if (e.target.dataset.display === "yes") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets_option", "yes");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "no");
    }
  });
});

/////////////////// reset options ////////////////////////
document.querySelector(".settings-box .reset-options").onclick = () => {
  localStorage.clear();
  location.reload();
};

//////////////////// responsive //////////////////////

document.querySelector(".header-area .links-container i").onclick = (e) => {
  e.stopPropagation();
  document.querySelector(".header-area ul").classList.toggle("open");
  document
    .querySelector(".header-area .links-container i div")
    .classList.toggle("menu-active");
};

document.querySelector(".header-area .links-container ul").onclick = (e) => {
  e.stopPropagation(); //بيخلي الكليك متدخلش علي العناصر الي جوه الليست
};

window.addEventListener("click", (e) => {
  if (
    e.target !== document.querySelector(".header-area .links-container i") &&
    e.target !== document.querySelector(".header-area .links-container ul")
  ) {
    document.querySelector(".header-area ul").classList.remove("open");
    document
      .querySelector(".header-area .links-container i div")
      .classList.remove("menu-active");
  }
});
