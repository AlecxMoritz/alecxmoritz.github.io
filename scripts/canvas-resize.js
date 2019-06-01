let interval;

const resize = () => {
    if(interval) {
        interval = clearTimeout(interval);
    }

    interval = setTimeout(() => resizeCanvas(), 1000);
}

const resizeCanvas = () => {
    restart();
}