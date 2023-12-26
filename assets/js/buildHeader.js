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

    // Logo container
    const flexboxContainerLogo = document.createElement('div');
    flexboxContainerLogo.className = 'flexbox-container-logo';
    const logoLink = document.createElement('a');
    logoLink.href = "index.php";
    const logoImage = document.createElement('img');
    logoImage.id = "logo-image";
    logoImage.src = "assets/images/logo-header.svg";
    logoImage.alt = "sierra-logo";
    const headerTitle = document.createElement('p');
    headerTitle.id = "header-title";
    headerTitle.textContent = "Sierra";
    logoLink.appendChild(logoImage);
    logoLink.appendChild(headerTitle);
    flexboxContainerLogo.appendChild(logoLink);

    // Main navigation
    const nav1 = document.createElement('nav');
    const ul1 = document.createElement('ul');
    ul1.appendChild(createNavLink("index.php", "Inicio"));
    ul1.appendChild(createNavLink("donation-main.php", "Donación"));
    ul1.appendChild(createNavLink("contact.php", "Contacto"));
    ul1.appendChild(createNavLink("about-us.php", "Sobre nosotros"));
    nav1.appendChild(ul1);

    // Spacer
    const flexboxSpacer = document.createElement('div');
    flexboxSpacer.className = 'flexbox-spacer';

    // Secondary navigation
    const nav2 = document.createElement('nav');
    const ul2 = document.createElement('ul');
    ul2.appendChild(createNavLink("login.php", "Iniciar Sesión"));
    ul2.appendChild(createNavLink("sign-up.php", "Registrarse"));
    nav2.appendChild(ul2);

    // Assemble the header
    flexboxContainerHeader.appendChild(flexboxContainerLogo);
    flexboxContainerHeader.appendChild(nav1);
    flexboxContainerHeader.appendChild(flexboxSpacer);
    flexboxContainerHeader.appendChild(nav2);
    header.appendChild(flexboxContainerHeader);

    // Append the header to the body or a specific element
    document.body.insertBefore(header, document.body.firstChild);
}

// Call the function when the window loads
window.addEventListener('load', buildHeader);
