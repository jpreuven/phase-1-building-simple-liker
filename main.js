// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const divModal = document.getElementById("modal");
const modalMesage = document.getElementById("modal-message");
const likeButton = document.querySelectorAll(".like-glyph");

function serverCall(e) {
  mimicServerCall()
    .then(() => {
      e.target.innerText = FULL_HEART;
      e.target.classList.add("activated-heart");
    })
    .catch((error) => {
      divModal.classList.remove("hidden");
      modalMesage.innerText = error;
      setTimeout(() => divModal.classList.add("hidden"), 3000);
    });
}

likeButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === EMPTY_HEART) {
      serverCall(e);
    } else if (e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART;
      e.target.classList.remove("activated-heart");
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.7;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
