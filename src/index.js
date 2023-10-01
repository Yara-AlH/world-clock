// los angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesAElement = losAngelesElement.querySelector(".A");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss");
  losAngelesAElement.innerHTML = moment().tz("America/Los_Angeles").format("a");
}, 1000);

// sydney
setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyAElement = sydneyElement.querySelector(".A");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss");
  sydneyAElement.innerHTML = moment().tz("Australia/Sydney").format("a");
}, 1000);

// tokyo
setInterval(() => {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoAElement = tokyoElement.querySelector(".A");

  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss");
  tokyoAElement.innerHTML = moment().tz("Asia/Tokyo").format("a");
}, 1000);

// paris
setInterval(() => {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisAElement = parisElement.querySelector(".A");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss");
  parisAElement.innerHTML = moment().tz("Europe/Paris").format("a");
}, 1000);
