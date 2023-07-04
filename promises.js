// Continuation from May/June Labs - in progress..

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('.img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

// PART 1
const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('imgs/img1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 2
        img = await createImage('imgs/img2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none'
    } catch {
        console.error(err);
    }
}