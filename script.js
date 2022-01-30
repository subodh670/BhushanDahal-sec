"use strict";
const receipes = [
  {
    title: "continental",
    name: "Mayonnaisse",
    image: "./one.jpg",
    desc: "Mayonnaise is a thick emulsified sauce made by slowly incorporating a thin stream of oil into raw egg yolks. Emulsions happen when two substances that don't mix—such as fat and water—come together in a suspension.",
    price: "30$",
    link: "",
  },
  {
    title: "indian",
    name: "alo paratha",
    image: "./one.jpg",
    desc: "Sieve",
    price: "10$",
    link: "",
  },
  {
    title: "indian",
    name: "alo paratha",
    image: "./one.jpg",
    desc: "Put all the dough making ingredients in your food processor with the dough paddle. You will get a soft and elastic dough. Set aside and let it rest until we prepare the potato stuffing. In the food processor put all the ingredients required for the potato stuffing and pulse it until it all mixes and comes together well. Potato should be minced.",
    price: "10$",
    link: "",
  },
];

const btnpop = document.querySelector(".cover");
const btnback = document.querySelector(".back");
const signin = document.querySelector(".sign");
const crossBtn = document.querySelector("#cross");
const loginBtn = document.querySelector(".login");
const passwordBtn = document.querySelector(".usrpass");
const userNameBtn = document.querySelector(".usrname");
const extraInfo = document.querySelector(".info");
const popupWindow = function () {
  signin.addEventListener("click", function () {
    btnpop.classList.remove("pop-up");
    btnback.classList.remove("unpop");
  });
  crossBtn.addEventListener("click", function () {
    btnpop.classList.add("pop-up");
    btnback.classList.add("unpop");
  });
  btnback.addEventListener("click", function () {
    btnpop.classList.add("pop-up");
    btnback.classList.add("unpop");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !btnback.classList.contains("unpop")) {
      btnpop.classList.add("pop-up");
      btnback.classList.add("unpop");
    }
  });
};
popupWindow();

// regarding the login account1
const account1 = {
  fullName: "Bhushan Dahal",
  password: 1234,
};
const account2 = {
  fullName: "Subodh Acharya",
  password: 4567,
};
const account3 = {
  fullName: "Jasmine Khatri",
  password: 1278,
};
const accounts = [account1, account2, account3];
accounts.forEach(function (accs) {
  const usrName = accs.fullName
    .split(" ")
    .map(function (cre) {
      return cre[0];
    })
    .join("")
    .toLowerCase();
  accs.userName = usrName;
});

console.log(account1);

console.log(account2);

let userProfile;
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  userProfile = accounts.find((acc) => acc.userName === userNameBtn.value);
  if (userProfile.password === Number(passwordBtn.value)) {
    extraInfo.textContent = `${userProfile.fullName} entered form correctly`;
  } else {
    extraInfo.textContent = `Wrong password or username`;
  }
});

//side navbar

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", function () {
  navigation.classList.toggle("toggle-nav");
  if (navigation.classList.contains("toggle-nav")) {
    navigation.classList.remove("toggle-nav");
  }
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  if (!navigation.classList.contains("toggle-nav")) {
    navigation.classList.add("toggle-nav");
  }
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});
//Timeer

function displayClock() {
  var display = new Date().toLocaleTimeString();
  document.querySelector(".time").innerHTML = display;
  setTimeout(displayClock, 1000);
}
window.addEventListener("DOMContentLoaded", displayClock);

//functionlity for questions
// const questionBtn = document.querySelectorAll(".ques-btn");
// const minusBtn = document.querySelectorAll(".minus");

// questionBtn.forEach(function (btn, i) {
//   btn.addEventListener("click", function (e) {
//     const target = e.currentTarget.parentElement;
//     console.log(i);
//     if (target.classList.contains("specific-question")) {
//       target.classList.remove("specific-question");
//       minusBtn[i].style.display = "none";
//     } else {
//       target.classList.add("specific-question");
//       minusBtn[i].style.display = "inline";
//     }
//   });
// });

const questions = document.querySelectorAll(".center-question");

questions.forEach(function (quest) {
  const button = quest.querySelector(".ques-btn");
  button.addEventListener("click", function (e) {
    const b = e.currentTarget;
    const minus = b.querySelector(".minus");
    const plus = b.querySelector(".plus");
    questions.forEach(function (item) {
      if (quest !== item) {
        item.classList.remove("specific-question");
      }
    });
    if (quest.classList.contains("specific-question")) {
      quest.classList.remove("specific-question");
      minus.style.display = "none";
    } else {
      quest.classList.add("specific-question");
      minus.style.display = "inline";
    }
  });
});

//Buttons appearing automatically

const menuCenter = document.querySelector(".menu-center");
const menuBtn = document.querySelector(".button");

const displayItems = function () {
  const uniqueTitles = receipes.map(function (item) {
    return item.title;
  });
  const uniqueTitle = uniqueTitles.reduce(
    function (accu, curr) {
      if (!accu.includes(curr)) {
        accu.push(curr);
      }
      return accu;
    },
    ["all"]
  );
  const placeBtn = uniqueTitle
    .map(function (item) {
      return `<button class="menu-item">${item}</button>`;
    })
    .join("");
  menuBtn.innerHTML = placeBtn;
  const menuItem = document.querySelectorAll(".menu-item");
  console.log(menuItem);
  menuItem.forEach(function (item) {
    item.addEventListener("click", function (i) {
      const target = i.currentTarget.innerHTML.trim();
      const titleArr = receipes.filter(function (rec) {
        return rec.title === target;
      });
      if (target === "all") {
        allItems(receipes);
      } else {
        allItems(titleArr);
      }
    });
  });
};

//Recipes showing automatically

window.addEventListener("DOMContentLoaded", function () {
  allItems(receipes);
  displayItems();
});
function allItems(m) {
  const menu = m
    .map(function (item) {
      return `<div class="individual-menu">
    <div class="receipe-image">
      <img class="receipe-photo" src="${item.image}" alt="one.jpg" />
    </div>
    <div class="desc">
      <div class="title">${item.title}</div>
      <div class="name-receipe"><a href="${item.link}">${item.name}</a></div>
      <p class="about">
       ${item.desc}
      </p>
      <div class="price">Price: ${item.price}</div>
    </div>
  </div>`;
    })
    .join("");
  menuCenter.innerHTML = menu;
}
