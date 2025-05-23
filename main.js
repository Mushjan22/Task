document.querySelectorAll('.leftContentMenus a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelectorAll('.leftContentMenus a').forEach(function(a) {
        a.classList.remove('activeBtn');
      });
  
      this.classList.add('activeBtn');
    });
  });

const inputId = document.getElementsByClassName("searchId")[0];
const inputName = document.getElementsByClassName("searchName")[0];
const select = document.getElementById("selectFilter");
const rows = document.querySelectorAll(".productTable tr:nth-child(n+3)");

inputId.addEventListener("input", function () {
    const value = this.value.toUpperCase();
    rows.forEach(row => {
        const id = row.children[0].textContent.toLowerCase(); 
        if (!value || id.includes(value)) {
        row.style.display = "";
        } else {
        row.style.display = "none";
        }
    });
});


inputName.addEventListener("input", function () {
    const value = this.value.toLowerCase();
        rows.forEach(row => {
            const name = row.children[1].textContent.toLowerCase(); 
            if (!value || name.includes(value)) {
            row.style.display = "";
            } else {
            row.style.display = "none";
            }
        });
    });

    
select.addEventListener("change", function () {
  const value = this.value.toLowerCase();
  if (value) {
    this.style.color = "#767676"; 
  } else {
    this.style.color = ""; 
  }
  rows.forEach(row => {
    const cuisine = row.children[2].textContent.toLowerCase(); 
    if (!value || cuisine.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});