const timer = setInterval(() => {
    console.log(timer);
    console.log(Math.random());
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 5000);