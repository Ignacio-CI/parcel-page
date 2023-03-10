import anime from "animejs";
import { text } from "./modules/module";


anime({
    targets: 'h1',
    rotate: 360,
    duration: 2000
})

// Images

const img = document.createElement('img');
document.body.append(img);
// img.src = './media/pic1.png' funkar inte på det här sättet

console.log(import.meta.url)

const imgUrl = new URL('./media/pic1.png', import.meta.url);
img.src = imgUrl;

console.log(imgUrl)