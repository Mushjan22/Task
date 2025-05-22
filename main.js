document.querySelectorAll('.leftContentMenus a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelectorAll('.leftContentMenus a').forEach(function(a) {
        a.classList.remove('activeBtn');
      });
  
      this.classList.add('activeBtn');
    });
  });