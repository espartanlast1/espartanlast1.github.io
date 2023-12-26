// Function to build the footer
function buildFooter() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add('footerF');

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

        link.appendChild(img);
        mediaDiv.appendChild(link);

        socialMediaFlexbox.appendChild(mediaDiv);
    });

    footer.appendChild(socialMediaFlexbox);

    // Append the footer to the body or specific container
    document.body.appendChild(footer);
}

function adjustFooterPosition() {
    var footer = document.querySelector('.footerF');
    if (footer) { // Check if the footer exists
        var bodyHeight = document.body.scrollHeight;
        var viewportHeight = window.innerHeight;

        if (bodyHeight <= viewportHeight) {
            footer.style.position = 'absolute';
            footer.style.bottom = '0';
            footer.style.width = '100%';
        } else {
            footer.style.position = 'relative';
            footer.style.bottom = 'auto';
        }
    }
}

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    buildFooter();
    adjustFooterPosition();
});

// Update footer position on resize and scroll
window.addEventListener('resize', adjustFooterPosition);
window.addEventListener('scroll', adjustFooterPosition);