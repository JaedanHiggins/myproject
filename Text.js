import { animate, onScroll, linear } from 'https://esm.sh/animejs';

animate('.headercam', {
    translateY: ['0px', '80px'],
    ease: linear(0, 1),
    autoplay: onScroll({
        target: '.hero',
        sync: true
    })
});

animate('.hero h1', {
    translateY: ['0px', '300x'],
    ease: linear(0, 1),
    autoplay: onScroll({
        target: '.hero',
        sync: true
    })
});