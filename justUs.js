function createCollage() {
    const collageDiv = document.getElementById('collage');
    collageDiv.innerHTML = '';

    const imageCount = 195;
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

function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
}

function getFanRotation(index) {
    const fanAngle = 15; 
    return (index - 2) * fanAngle; 
}

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 300; 
}

function getRandomPosition() {
    return Math.floor(Math.random() * 30) - 15; 
}

function animateImages() {
    const images = document.querySelectorAll('.collage img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('settle');
        }, index * 1000); 
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

let currentImageBatch = 0;
const imagesPerBatch = 20;

function showAllImages() {
    const popup = document.getElementById('imagePopup');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    function loadImages() {
        thumbnailContainer.innerHTML = ''; 

        const start = currentImageBatch * imagesPerBatch + 1;
        const end = Math.min(start + imagesPerBatch, 195 + 1);

        for (let i = start; i < end; i++) {
            const img = document.createElement('img');
            img.src = `images/${i}.jpg`; 
            img.alt = `Image ${i}`;
            img.classList.add('thumbnail');
            img.onclick = () => enlargeImage(img);
            thumbnailContainer.appendChild(img);
        }

        const navContainer = document.createElement('div');
        navContainer.classList.add('nav-container');

        if (currentImageBatch > 0) {
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.classList.add('nav-button');
            prevButton.onclick = () => {
                currentImageBatch--;
                loadImages();
            };
            navContainer.appendChild(prevButton);
        }

        if (end <= 195) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.classList.add('nav-button');
            nextButton.onclick = () => {
                currentImageBatch++;
                loadImages();
            };
            navContainer.appendChild(nextButton);
        }

        thumbnailContainer.appendChild(navContainer);
    }

    currentImageBatch = 0; 
    loadImages();
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
