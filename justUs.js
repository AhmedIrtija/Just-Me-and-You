function createCollage() {
    const collageDiv = document.getElementById('collage');
    collageDiv.innerHTML = '';

    const imageCount = 80; // Total number of images available
    const selectedImages = [];

    while (selectedImages.length < 5) {
        const randomNumber = Math.floor(Math.random() * imageCount) + 1;
        if (!selectedImages.includes(randomNumber)) {
            selectedImages.push(randomNumber);
        }
    }

    selectedImages.forEach((imageNumber, index) => {
        const img = document.createElement('img');
        img.src = `images/${imageNumber}.jpg`;
        img.alt = `Us ${imageNumber}`;
        img.classList.add('collage-image');
        
        img.style.width = `${getRandomSize()}px`;
        img.style.height = 'auto';
        img.style.transform = `rotate(${getFanRotation(index)}deg) translate(${getRandomPosition()}px, ${getRandomPosition()}px)`;
        
        img.onclick = () => enlargeImage(img);
        collageDiv.appendChild(img);
    });

    animateImages();
}

// JavaScript function to show the message
function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
}


function getFanRotation(index) {
    const fanAngle = 15; // Degrees to rotate each image
    return (index - 2) * fanAngle; // Adjust -2 to center the fan
}

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 300; // Random size between 300px and 400px
}

function getRandomPosition() {
    return Math.floor(Math.random() * 30) - 15; // Random translation between -15px and 15px
}

function animateImages() {
    const images = document.querySelectorAll('.collage img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('settle');
        }, index * 1000); // Each image appears after 1 second
    });
}

function enlargeImage(img) {
    const enlarged = document.createElement('div');
    enlarged.className = 'enlarged';
    enlarged.onclick = () => document.body.removeChild(enlarged);
    
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlarged.appendChild(enlargedImg);
    
    document.body.appendChild(enlarged);
}


function showAllImages() {
    const popup = document.getElementById('imagePopup');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';

    for (let i = 1; i <= 195; i++) {
        const img = document.createElement('img');
        img.src = `images/${i}.jpg`; // Ensure the path matches your image source
        img.alt = `Image ${i}`;
        img.classList.add('thumbnail');
        img.onclick = () => enlargeImage(img);
        thumbnailContainer.appendChild(img);
    }

    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.classList.add('hidden');
}

function enlargeImage(img) {
    const enlarged = document.createElement('div');
    enlarged.className = 'enlarged';
    enlarged.onclick = () => document.body.removeChild(enlarged);
    
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlarged.appendChild(enlargedImg);
    
    document.body.appendChild(enlarged);
}