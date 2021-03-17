document.addEventListener("DOMContentLoaded",function(){
    let beginning = [
        "Two things are infinite: ",
        "A room without books ",
        "Be who you are and say what you feel ",
        "You only live once ",
        "Your time is limited, so don't waste it living someone else's life "
    ];

    let middle = [
        "the universe and human stupidity; ",
        "is like a body ",
        "because those who mind don't matter ",
        "but if you do it right ",
        "don't be trapped by dogma "
    ];

    let end = [
        "and I'm not sure about the universe.",
        "without a soul.",
        "and those who matter don't mind.",
        "once is enough.",
        "which is living with the results of other people's thinking."
    ];

    function getRandomQuote() {
        let randomBeginning = Math.floor(Math.random() * beginning.length);
        let randomMiddle = Math.floor(Math.random() * middle.length);
        let randomEnd = Math.floor(Math.random() * end.length);
        let quote = beginning[randomBeginning] + middle[randomMiddle] + end[randomEnd];
        let div = document.getElementById("quoteDisplay");
        div.innerHTML = quote;
    }

    function exitButton() {
        if (confirm("Close Window?")) {
            close();
        }
    }

    let btn1 = document.getElementById("button1");
    btn1.addEventListener("click", getRandomQuote);

    let btn2 = document.getElementById("button2");
    btn2.addEventListener("click", exitButton);
});