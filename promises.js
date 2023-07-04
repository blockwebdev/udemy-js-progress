// Continuation from May/June Labs - in progress..

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