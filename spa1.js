const APP = {
  active: "green",
  pages: [],
  baseURL: null,
  init: () => {
    APP.pages = document.querySelectorAll(".page");
    let links = document.querySelectorAll("[data-href]");
    links.forEach(link => {
      link.addEventListener("click", APP.nav);
    });
    //get the base url to use in the app
    APP.baseURL = location.href.split("#")[0];
    let hash = location.hash;
    //check for current url hash
    if (hash && hash != "#") {
      //there is an id in the url
      APP.active = hash.replace("#", "");
      APP.showPage(APP.active);
    } else {
      //no url so use our default
      history.replaceState({}, APP.active, `${APP.baseURL}#${APP.active}`);
      APP.showPage(APP.active);
    }
    //handle the back button
    window.addEventListener("popstate", APP.poppy);
  },
  nav: ev => {
    ev.preventDefault();
    ev.stopPropagation();
    let link = ev.target;
    let target = link.getAttribute("data-href");
    //update URL
    history.pushState({}, target, `${APP.baseURL}#${target}`);
    //change the display of the "page"
    APP.showPage(target);
    //use switch case with target for page specific things
  },
  showPage: target => {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`#${target}`).classList.add("active");
  },
  poppy: ev => {
    //get the id
    let target = location.hash.replace("#", "");
    APP.showPage(target);
  }
};

document.addEventListener("DOMContentLoaded", APP.init);
