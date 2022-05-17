let intervalId=setInterval(() => {
    console.log("hello")
}, 1000);


setTimeout(() => {
    clearInterval(intervalId)
}, 4000);