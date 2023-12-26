// Function to create and return a navigation link
function createNavLink(href, text) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    listItem.appendChild(link);
    return listItem;
}

// Function to build the header
function buildHeader() {
    // Create the main container elements
    const header = document.createElement('header');
    const flexboxContainerHeader = document.createElement('div');
    flexboxContainerHeader.className = 'flexbox-container-header';

    // Main navigation
    const nav1 = document.createElement('nav');
    const ul1 = document.createElement('ul');
    ul1.appendChild(createNavLink("index.php", "Inicio"));
    ul1.appendChild(createNavLink("donation-main.php", "Donación"));
    ul1.appendChild(createNavLink("contact.php", "Contacto"));
    ul1.appendChild(createNavLink("about-us.php", "Sobre nosotros"));
    nav1.appendChild(ul1);


    // Assemble the header
    flexboxContainerHeader.appendChild(nav1);
    header.appendChild(flexboxContainerHeader);

    // Append the header to the body or a specific element
    document.body.insertBefore(header, document.body.firstChild);
}

// Call the function when the window loads
window.addEventListener('load', buildHeader);
