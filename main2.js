// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const divSelect = document.querySelector("div");

function removeError() {
  divSelect.classList.add("hidden");
}

function handleEmptyClick(e) {
  mimicServerCall()
    .then(() => {
      e.textContent = FULL_HEART;
      e.classList.add("activated-heart");
    })
    .catch(() => {
      divSelect.classList.remove("hidden");
      setTimeout(removeError, 3000);
    });
}

function handleFullClick(e) {
  e.textContent = EMPTY_HEART;
  e.classList.remove("activated-heart");
}

const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.textContent === EMPTY_HEART) {
      handleEmptyClick(heart);
    } else if (heart.textContent === FULL_HEART) {
      handleFullClick(heart);
    }
  });
});

// const hearts = document.querySelectorAll(".like-glyph");
// hearts.forEach((heart) => {
//   if (heart.textContent === EMPTY_HEART) {
//     heart.addEventListener("click", () => {
//       handleEmptyClick(heart);
//     });
//   } else if (heart.textContent === FULL_HEART) {
//     heart.addEventListener("click", () => {
//       handleFullClick(heart);
//     });
//   }
// });

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
