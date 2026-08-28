(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function () {
  var ham = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', function () {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      ham.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

(function () {
  var btns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  if (!btns.length) return;
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var cats = card.getAttribute('data-cats') || '';
        if (filter === 'All' || cats.includes(filter)) {
          card.removeAttribute('data-hidden');
        } else {
          card.setAttribute('data-hidden', 'true');
        }
      });
    });
  });
})();

(function () {
  var form = document.getElementById('contact-form');
  var wrap = document.getElementById('form-wrap');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = form.querySelector('[name="name"]').value;
    var email   = form.querySelector('[name="email"]').value;
    var subject = form.querySelector('[name="subject"]').value || 'Message from ' + name;
    var msg     = form.querySelector('[name="message"]').value;
    var body    = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + msg;
    window.location.href = 'mailto:sandalisawmindi5@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    if (wrap) wrap.classList.add('sent');
  });
  var again = document.getElementById('btn-again');
  if (again) {
    again.addEventListener('click', function () {
      form.reset();
      if (wrap) wrap.classList.remove('sent');
    });
  }
})();
