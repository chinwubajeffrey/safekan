    <!-- Navbar  -->
    .dropdown-icon{
    background-color: none;
    color: white;
    outline: none;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .dropdown-icon:hover{
    background: rgba(231, 235, 255, 1);
  }

  .dropdown-content {
    visibility: hidden; /* Hidden by default */
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    margin-left: -90px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0; /* Start hidden */
    transition: opacity 0.3s ease, visibility 0.3s ease; /* Transition for fade effect */
}

.dropdown-content.show {
    visibility: visible; /* Show the dropdown */
    opacity: 1; /* Fade in */
}

.dropdown-content a {
    color: #132466;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #a3acff;
}






document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropdown-icon')) {
          if (dropdownContent.classList.contains('show')) {
              dropdownContent.classList.remove('show');
          }
      }
  });
});