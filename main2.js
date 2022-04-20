var modal = document.getElementById("modal");

var form = document.getElementById("form");

var modalBtn = document.getElementById("modalBtn");

var closeBtn = document.getElementsByClassName("closeBtn")[0];

var body = document.getElementsByTagName("body")[0];

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", outsideClick);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function openModal() {
  modal.classList.add("open");
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  body.style.overflow = "visible";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

//
var submitBtn = document.getElementById("form-submit");

var nameI = document.getElementById("name");
var isNameValid = false;

var mail = document.getElementById("mail");
var isMailValid = false;

var checkbox = document.getElementById("checkbox");
var isChecked = false;

var allowSubmit = () => {
  submitBtn.removeAttribute("disabled");
};

var isFormValid = () => {
  if (isNameValid && isMailValid && isChecked) {
    allowSubmit();
  } else {
    submitBtn.setAttribute("disabled", "");
  }
};

checkbox.addEventListener("change", (e) => {
  isChecked = e.target.checked;
  isFormValid();
});

nameI.addEventListener("input", (e) => {
  isNameValid = e.target.validity.valid;
  isFormValid();
});

mail.addEventListener("input", (e) => {
  isMailValid = e.target.validity.valid;
  isFormValid();
});

const resetFormData = () => {
  form.reset();
  submitBtn.setAttribute("disabled", "");
  closeBtn.click();
};
const sendFormData = () => {
  const nameInput = nameI.name;
  const mailInput = mail.name;
  const checkboxInput = checkbox.id;

  const data = {
    [nameInput]: nameI.value,
    [mailInput]: mail.value,
    [checkboxInput]: checkbox.checked,
  };
  console.log("result: ", data);
  resetFormData();
};

submitBtn.addEventListener("click", sendFormData);

const cookie = document.querySelector(".cookie");

const agree = document.querySelector(".btn-cookie");
const onCookieAccept = () => {
  localStorage.setItem("cookieAccepted", true);
  cookie.style.display = "none";
};
agree.addEventListener("click", onCookieAccept);
const checkCookieAccepted = () => {
  const isAccepted = localStorage.getItem("cookieAccepted");
  if (!isAccepted) {
    cookie.style.display = "block";
  }
};
checkCookieAccepted();

var map = L.map("map").setView([48.62246, 22.29825], 20);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoidGl5ZWQxMTkzOCIsImEiOiJjbDI3YWx1Y2wwMTY4M2RueGd5ajV2YXdsIn0.-rQ6TjervlJtcmPn7n5h_A",
  }
).addTo(map);

// var marker = L.marker([48.622474, 22.298105]).addTo(map);
var popup = L.popup()
  .setLatLng([48.622516, 22.298051])
  .setContent("We are here!")
  .openOn(map);
