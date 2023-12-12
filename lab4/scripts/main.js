(function () {
    // Function to add 'active' class to the current menu item
    function setActiveMenuItem() {
        const pathParts = window.location.pathname.split('/');
        const page = pathParts[pathParts.length - 1];
        const menuItems = document.querySelectorAll('nav ul li a');

        menuItems.forEach(function (item) {
            if (item.getAttribute('href') === page) {
                item.classList.add('active');
                item.classList.remove('not-active');
            } else {
                item.classList.remove('active');
                item.classList.add('not-active');
            }
        });
    }

    // Function to display loading time in the footer
    function displayLoadingTime() {
        const end = new Date().getTime();
        let loadTime = end - start
        const footer = document.querySelector('footer');
        const loadingInfo = document.createElement('p');
        loadingInfo.textContent = 'Page loaded in ' + loadTime + ' milliseconds.';
        footer.appendChild(loadingInfo);
    }

    const start = new Date().getTime();
    // Event listener for page load
    window.addEventListener('load', function () {
        setActiveMenuItem();
        displayLoadingTime();
    });
})();
