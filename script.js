
function setImage(overlayId, imageUrl) {
    let overlayElement = document.getElementById(overlayId);

    if (overlayElement === null) {
        const avatarBox = document.querySelector('.avatar-box');
        if (avatarBox === null) return;
        overlayElement = document.createElement('img');
        overlayElement.id = overlayId;
        overlayElement.classList.add('avatar-overlay');
        avatarBox.appendChild(overlayElement);
    }

    if (overlayElement.dataset.currentSrc === imageUrl && overlayElement.style.display === 'block') {
        overlayElement.style.display = 'none';
        return;
    }

    overlayElement.src = imageUrl;
    overlayElement.dataset.currentSrc = imageUrl;
    overlayElement.style.display = 'block';
}