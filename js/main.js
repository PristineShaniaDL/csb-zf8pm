// Navigation Toggle

const navList = document.querySelector(".nav-list");




// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});

// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.mountain .col h1, .mountain .col p, .mountain .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.mountain .col:last-child`,
  {
    origin: "right",
  }
);
scroll.reveal(`.resort .col h1, .resort .col p, .resort .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.resort .col:last-child`,
  {
    origin: "right",
  }
);
scroll.reveal(`.falls .col h1, .falls .col p, .falls .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.falls .col:last-child`,
  {
    origin: "right",
  }
);
scroll.reveal(`.heritage .col h1, .heritage .col p, .heritage .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.heritage .col:last-child`,
  {
    origin: "right",
  }
);
scroll.reveal(`.caves .col h1, .caves .col p, .caves .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.caves .col:last-child`,
  {
    origin: "right",
  }
);
scroll.reveal(`.festival .col h1, .festival .col p, .festival .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.festival .col:last-child`,
  {
    origin: "right",
  }
);

