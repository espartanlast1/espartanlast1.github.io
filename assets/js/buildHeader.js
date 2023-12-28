// Function to toggle the menu visibility
function toggleMenu() {
    const menuLinks = document.getElementById('menulinks');
    menuLinks.classList.toggle('active');
}

// Function to create and return a navigation link
function createNavLink(href, text) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    return link;
}

// Function to build the header
function buildHeader() {
    // Create the main container elements
    const header = document.createElement('header');
    header.className = 'header sticky';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header-div';

    // Name/Title part
    const headerName = document.createElement('div');
    headerName.className = 'header-name-left';
    const nameLink = createNavLink("#", "Jorge JC. Coello");
    headerName.appendChild(nameLink);

    // Menu toggle button
    const headerMenu = document.createElement('div');
    headerMenu.className = 'header-menu';
    headerMenu.setAttribute('onclick', 'toggleMenu()');
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('div');
        headerMenu.appendChild(bar);
    }

    // Navigation links
    const menuLinks = document.createElement('div');
    menuLinks.id = 'menulinks';
    menuLinks.className = 'header-links';
    menuLinks.appendChild(createNavLink("index.html", "Home"));
    menuLinks.appendChild(createNavLink("about.html", "About"));
    // menuLinks.appendChild(createNavLink("#projects", "Projects")); // Uncomment if needed
    menuLinks.appendChild(createNavLink("#contact", "Contact"));

    // Assemble the header
    headerDiv.appendChild(headerName);
    headerDiv.appendChild(headerMenu);
    headerDiv.appendChild(menuLinks);
    header.appendChild(headerDiv);

    // Append the header to the body or a specific element
    document.body.insertBefore(header, document.body.firstChild);
}

// Call the function when the window loads
window.addEventListener('load', buildHeader);