// Function to build the footer


const socialMedias = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jorge-castilla-coello-786713282/', icon: 'assets/images/linkedin.svg', darkIcon: 'assets/images/linkedin.svg' },
    { name: 'Twitter', url: 'https://twitter.com/JorgeJCCoello', icon: 'assets/images/x.svg', darkIcon: 'assets/images/x-white.svg' }, // Add your Twitter link
    { name: 'Github', url: 'https://github.com/espartanlast1', icon: 'assets/images/github.svg', darkIcon: 'assets/images/github-white.svg' } // Add your Github link
];

function buildFooter() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add('footerF');

    // Create and append social media links
    const socialMediaFlexbox = document.createElement('div');
    socialMediaFlexbox.id = 'social-media-flexbox';

    socialMedias.forEach(media => {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('social-media');

        const link = document.createElement('a');
        link.href = media.url;

        const img = document.createElement('img');
        img.src = window.matchMedia('(prefers-color-scheme: dark)').matches ? media.darkIcon : media.icon;
        img.alt = `${media.name}`;
        img.className = 'social-icon';

        link.appendChild(img);
        mediaDiv.appendChild(link);

        socialMediaFlexbox.appendChild(mediaDiv);
    });

    footer.appendChild(socialMediaFlexbox);

    // Append the footer to the body or specific container
    document.body.appendChild(footer);
}

function adjustFooterPosition() {
    const footer = document.querySelector('.footerF');
    if (footer) { // Check if the footer exists
        const bodyHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;

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

// Function to update logos for color scheme changes
function updateLogosForColorScheme() {
    document.querySelectorAll('.social-icon').forEach(img => {
        const media = socialMedias.find(m => m.name.toLowerCase() === img.alt.toLowerCase());
        if (media) {
            img.src = window.matchMedia('(prefers-color-scheme: dark)').matches ? media.darkIcon : media.icon;
        }
    });
}

// Listen for changes in color scheme
window.matchMedia('(prefers-color-scheme: dark)').addListener(updateLogosForColorScheme);

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    buildFooter();
    adjustFooterPosition();
    updateLogosForColorScheme();
});

// Update footer position on resize and scroll
window.addEventListener('resize', adjustFooterPosition);
window.addEventListener('scroll', adjustFooterPosition);