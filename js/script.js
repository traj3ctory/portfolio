// Perloader

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");

  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});


// Aside Navication

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTooglerBtn();
    }
  });
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];

  document.querySelector("#" + target).classList.add("active");
}

function navUpdate(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  navUpdate(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

// Nav toogle

const navToogleBtn = document.querySelector(".nav-toggle"),
  aside = document.querySelector(".aside");

navToogleBtn.addEventListener("click", asideSectionTooglerBtn);

function asideSectionTooglerBtn() {
  aside.classList.toggle("open");
  navToogleBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const data =
{
  "title": "BZ David",
  "description": "My Information",
  "type": "object",
  "name": {
    "lastName": "Benard",
    "middleName": "Zibiri",
    "firstName": "David",
    "nameAbbrv": "BZ David",
    "job": "Frontend Web Developer",
    "linkedin": "https://www.linkedin.com/in/david-benard-196961121/",
    "twitter": "https://twitter.com/dav3ly",
    "whatsapp": "https://api.whatsapp.com/send?phone=09038660972&text=Hi%20There!",
    "profile": "../images/me.jpeg"
  },
  "birthday": {
    "day": 29,
    "month": "April",
    "year": "1997"
  },
  "stack": [
    {
      "name": "html",
      "progress": "90%"
    },
    {
      "name": "css",
      "progress": "80%"
    },
    {
      "name": "sass",
      "progress": "60%"
    },
    {
      "name": "bootstrap",
      "progress": "90%"
    },
    {
      "name": "javascript",
      "progress": "50%"
    },
    {
      "name": "react",
      "progress": "70%"
    },
    {
      "name": "wordpress",
      "progress": "70%"
    }
  ],
  "workXp": [
    {
      "date": "2021-Present",
      "role": "Frontend Web Developer at eHealth4Everyone"
    },
    {
      "date": "2020-2021",
      "role": "Frontend Web Developer at Mira Technologies"
    },
    {
      "date": "(Sept)2018-2019",
      "role": "IT Student at GTBank"
    },
    {
      "date": "(April)2018-2019",
      "role": "Frontend Tutor at Center4Tech"
    },
    {
      "date": "(April)2015-2016",
      "role": "University of Benin(Uniben) work study programme"
    }
  ],
  "detail": {
    "website": "http://davidbd.netlify.app",
    "email": "davidbenard.bd@gmail.com",
    "degree": "Bsc. Computer Science",
    "phone": "+2349059892959",
    "city": "Lagos",
    "freelance": "Available"
  },
  "school": [
    {
      "date": "2015 - 2019",
      "name": "University of Benin, Benin-City, Edo State."
    },
    {
      "date": "2009 - 2014",
      "name": "Command Day Secondary School, Kaduna."
    },
    {
      "date": "2000 - 2008",
      "name": "New Life Nursery and Primary School, Okerube, Ikotun, Lagos State."
    }
  ],
  "portfolio": [
    {
      "name": "Leerix Application",
      "image": "../images/portfolio/leerix.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "react"
    },
    {
      "name": "Portfolio Site",
      "image": "../images/portfolio/portfolio.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "web"
    },
    {
      "name": "Todo Application",
      "image": "../images/portfolio/todo.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "react"
    },
     {
      "name": "Sysbanker EE",
      "image": "../images/portfolio/sys.jpg",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "web"
    },
     {
      "name": "Utali Igbo",
      "image": "../images/portfolio/uifww.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "wordpress"
    },
     {
      "name": "Johanan Blog",
      "image": "../images/portfolio/jwlblog.png",
      "description": "lorem ipsum",
      "link": "www.hello.com",
      "category": "wordpress"
    },
     {
      "name": "Johanan World",
      "image": "../images/portfolio/jwl.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "opencart"
    },
    {
      "name": "Accsiss eBs",
      "image": "../images/portfolio/ebs.png",
      "description": "lorem ipsum",
      "link": "hello",
      "category": "web"
    }
  ]
}

const website = document.querySelector('#website');
const email = document.querySelector('#email');
const degree = document.querySelector('#degree');
const phoneNumber = document.querySelector('#phoneNumber');
const city = document.querySelector('#city');
const available = document.querySelector('#available');

const stack = document.querySelector('#stack');

const education = document.querySelector('#education');

const workXp = document.querySelector('#workexp');

const portfolioData = document.querySelector('#portfolioData');

website.innerHTML = `</span><a href="${data.detail.website}" target="_blank" rel="noopener noreferrer">${data.detail.website}</a>`
email.innerHTML = `<a href="mailto:${data.detail.email}">${data.detail.email}</a>`
degree.innerHTML = `${data.detail.degree}`
phoneNumber.innerHTML = `<a href="tel:${data.detail.phone}">${data.detail.phone}</a>`
city.innerHTML = `${data.detail.city}`
available.innerHTML = `${data.detail.freelance}`

data.stack.forEach(data => {
  stack.insertAdjacentHTML('beforeend', `<div class="skill-item pad-15 mb-3">
<h5>${data.name}</h5>
<div class="progress">
  <div class="progress-in" style="width: ${data.progress};"></div>
    <div class="skill-persent">
      ${data.progress}
    </div>
  </div>
</div>`)

});

data.school.forEach(data => {
  education.insertAdjacentHTML('beforeend', ` <div class="time-line-item">
  <div class="circle-dot"></div>
  <h6 class="time-line-date">
    <i class="fa fa-calendar" aria-hidden="true"></i>
    ${data.date}
  </h6>
  <h4 class="time-line-title">
    ${data.name}
  </h4>
</div>`)

});

data.workXp.forEach(data => {
  workXp.insertAdjacentHTML('beforeend', `<div class="time-line-item">
  <div class="circle-dot"></div>
  <h6 class="time-line-date">
    <i class="fa fa-calendar" aria-hidden="true"></i>
    ${data.date}
  </h6>
  <h4 class="time-line-title">
    ${data.role}
  </h4>
</div>`)

});

data.portfolio.forEach(data => {
  portfolioData.insertAdjacentHTML('beforeend', `<div class="portfolio-item pad-15" data-category="${data.category}">
  <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src="${data.image}" alt="${data.name}" />
    </div>
    <div class="portfolio-info">
      <a href="${data.link}" target="_blank" noopener noreferrer><h4>${data.name}</h4></a>
      <div class="icon">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>`)

});


// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
(filterBtns = filterContainer.children),
  (totalFilterBtn = filterBtns.length),
  (portfolioItems = document.querySelectorAll(".portfolio-item")),
  (totalPortfolioItem = portfolioItems.length);

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portfolio Lightbox

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxCounter = lightbox.querySelector(".caption-count");

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

// close Lightbox

lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
