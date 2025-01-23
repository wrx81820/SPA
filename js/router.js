let pageUrls = {
    home: '/index.html',
    courses: '/index.html?courses',
    faq: '/index.html?faq',
    login: '/index.html?login'
  };
  
  function OnStartUp() {
    popStateHandler();
  }
  
  OnStartUp();
  
  document.querySelector('#home-link').addEventListener('click', (event) => {
    let stateObj = { page: 'home' };
    document.title = 'Home';
    history.pushState(stateObj, "Home", "");
    RenderHomePage();
  });
  
  document.querySelector('#courses-link').addEventListener('click', (event) => {
    let stateObj = { page: 'courses' };
    document.title = 'Courses';
    history.pushState(stateObj, "Courses", "?courses");
    RenderCoursesPage();
  });
  
  document.querySelector('#faq-link').addEventListener('click', (event) => {
    let stateObj = { page: 'faq' };
    document.title = 'FAQ';
    history.pushState(stateObj, "FAQ", "?faq");
    RenderFaqPage();
  });
  
  document.querySelector('#login-link').addEventListener('click', (event) => {
    let stateObj = { page: 'login' };
    document.title = 'Login';
    history.pushState(stateObj, "Login", "?login");
    RenderLoginPage();
  });
  
  function RenderHomePage() {
    document.querySelector('main').innerHTML = `
      <h1 class="text-center title">Welcome to PIAC E-Learning!</h1>
      <p class="text-center">Explore our wide range of courses designed to help you gain new skills and knowledge.</p>
    `;
  }
  
  function RenderCoursesPage() {
    document.querySelector('main').innerHTML = `
      <h1 class="text-center title">Our Courses</h1>
      <ul class="list-group">
        <li class="list-group-item course-item" data-id="1">Introduction to HTML & CSS</li>
        <li class="list-group-item course-item" data-id="2">JavaScript Basics</li>
        <li class="list-group-item course-item" data-id="3">Advanced React</li>
        <li class="list-group-item course-item" data-id="4">Node.js for Beginners</li>
      </ul>
    `;
  }
  
  function RenderFaqPage() {
    document.querySelector('main').innerHTML = `
      <h1 class="text-center title">Frequently Asked Questions</h1>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is the duration of each course?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Each course varies in length, typically ranging from 2 to 6 weeks depending on the content and complexity.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How do I enroll in a course?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              You can enroll in a course by clicking on the 'Enroll' button on the course page.
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  function RenderLoginPage() {
    document.querySelector('main').innerHTML = `
      <h1 class="text-center title">Login</h1>
      <form class="w-50 mx-auto">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="WiktorDerkacz03@gmail.com">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    `;
  }
  
  function popStateHandler(event) {
    let loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.home) {
      RenderHomePage();
    } else if (loc === pageUrls.courses) {
      RenderCoursesPage();
    } else if (loc === pageUrls.faq) {
      RenderFaqPage();
    } else if (loc === pageUrls.login) {
      RenderLoginPage();
    }
  }
  
  window.onpopstate = popStateHandler;
  