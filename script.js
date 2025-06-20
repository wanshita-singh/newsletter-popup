window.onload = function () {
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 1000);
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function subscribe() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  const regex = /^\S+@\S+\.\S+$/;

  if (regex.test(email)) {
    message.style.color = "green";
    message.innerText = "Thank you for subscribing!";
  } else {
    message.style.color = "red";
    message.innerText = "Please enter a valid email address.";
  }
}
