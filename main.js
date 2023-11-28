

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(height);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`
});






// end


let countDownDate = new Date("jun 11, 2024 23:59:59").getTime();
console.log(countDownDate);


let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;


    if (dateDiff = 0) {
        clearInterval(counter);
    }

},1000);



let span = document.querySelector(".up-key");

window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >=1070) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'Css/omar.css') {
        theme.setAttribute('href', 'Css/omarr.css');
    } else {
        theme.setAttribute('href', 'Css/omar.css');
    }
}
