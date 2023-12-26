// Function to build the footer
function buildFooter() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add('footerF');

    // Create and append the title
    const title = document.createElement('h3');
    title.textContent = 'Link to my social media';
    footer.appendChild(title);

    // Define social media links and icons
    const socialMedias = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jorge-castilla-coello-786713282/', icon: 'assets/images/linkedin.svg' },
        { name: 'Twitter', url: 'https://twitter.com/JorgeJCCoello', icon: 'assets/images/x.svg' }, // Add your Twitter link
        { name: 'Github', url: 'https://github.com/espartanlast1', icon: 'assets/images/github.svg' } // Add your Github link
    ];

    // Create and append social media links
    const socialMediaFlexbox = document.createElement('div');
    socialMediaFlexbox.id = 'social-media-flexbox';

    socialMedias.forEach(media => {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('social-media');

        const link = document.createElement('a');
        link.href = media.url;

        const img = document.createElement('img');
        img.src = media.icon;
        img.alt = `${media.name}`;
        img.width = 100;
        img.height = 100;

        link.appendChild(img);
        mediaDiv.appendChild(link);

        const p = document.createElement('p');
        p.textContent = media.name;
        mediaDiv.appendChild(p);

        socialMediaFlexbox.appendChild(mediaDiv);
    });

    footer.appendChild(socialMediaFlexbox);

    // Append the footer to the body or specific container
    document.body.appendChild(footer);
}

// Call the function to build and append the footer when the window loads
window.onload = buildFooter;