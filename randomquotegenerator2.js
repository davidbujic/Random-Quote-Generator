document.addEventListener("DOMContentLoaded",function(){

    let sportQuotes = [
        {
            quote: 'The only way to prove that you’re a good sport is to lose.',
            author: 'Ernie Banks',
            font: 'Arial'
        },
        {
            quote: 'Age is no barrier. It’s a limitation you put on your mind.',
            author: 'Jackie Joyner-Kersee',
            font: 'Verdana'
        },
        {
            quote: 'Champions keep playing until they get it right.',
            author: 'Billie Jean King',
            font: 'Tahoma'
        },
        {
            quote: 'What makes something special is not just what you have to gain, but what you feel there is to lose.',
            author: 'Andre Agassi',
            font: 'Trebuchet MS'
        },
        {
            quote: 'The more difficult the victory, the greater the happiness in winning.',
            author: 'Pele',
            font: 'Impact'
        }
    ];

    let businessQuotes = [
        {
            quote: 'Success is not final; failure is not fatal: it is the courage to continue that counts.',
            author: 'Winston Churchill',
            font: 'Georgia'
        },
        {
            quote: 'Play by the rules, but be ferocious.',
            author: 'Phil Knight',
            font: 'Garamond'
        },
        {
            quote: 'Business opportunities are like buses, there’s always another one coming.',
            author: 'Richard Branson',
            font: 'Comic Sans MS'
        },
        {
            quote: 'Every problem is a gift—without problems we would not grow.',
            author: 'Anthony Robbins',
            font: 'Arial Black'
        },
        {
            quote: 'You only have to do a few things right in your life so long as you don’t do too many things wrong.',
            author: 'Warren Buffett',
            font: 'Bookman'
        }
    ];

    function generateQuotes() {
        let number = parseInt(quoteNumber());
        let quotes = '';
        if(document.getElementById('sport').checked) {
            for(let i = 0; i < number; i++) {
                let random1 = sportQuotes[Math.floor(Math.random() * sportQuotes.length)];
                let random2 = sportQuotes[Math.floor(Math.random() * sportQuotes.length)];
                let random3 = sportQuotes[Math.floor(Math.random() * sportQuotes.length)];
                quotes += '<p class="quote"; style=font-family:' + random3.font + ';>' + random1.quote + ' - ' + random2.author + '</p>' + '<br>';
            }
        }
        else if(document.getElementById('business').checked) {
            for(let i = 0; i < number; i++) {
                let random1 = businessQuotes[Math.floor(Math.random() * businessQuotes.length)];
                let random2 = businessQuotes[Math.floor(Math.random() * businessQuotes.length)];
                let random3 = businessQuotes[Math.floor(Math.random() * businessQuotes.length)];
                quotes += '<p class="quote"; style=font-family:' + random3.font + ';>' + random1.quote + ' - ' + random2.author + '</p>' + '<br>';
            }
        }
        /*for(let i = 0; i < number; i++){
            if(document.getElementById('sport').checked) {
                let random = sportQuotes[Math.floor(Math.random * sportQuotes.length)];
                //quotes += '<p class="quote" style=font:' + random.font + ';>' + random.quote + 
                //'<p class="author" style=font:' + random.font + ';>' + random.author + '</p>';
                //quotes += random.quote + ' ' + random.author;
            }
            else if(document.getElementById('business').checked) {
                let random = Math.floor(Math.random * businessQuotes.length);
                //quotes += businessQuotes[random].quote + ' ' + businessQuotes[random].author;
                //quotes += '<p class="quote" style=font:' + random.font + ';>' + random.quote + 
                //'<p class="author" style=font:' + random.font + ';>' + random.author + '</p>';
            }
        }*/
        let div = document.getElementById("quoteDisplay1");
        div.innerHTML = quotes;
    }

    function quoteNumber() {
        var e = document.getElementById("dropdown");
        var strUser = e.value;
        return strUser;
    }

    function exitButton() {
        if (confirm("Close Window?")) {
            close();
        }
    }

    let btn1 = document.getElementById("button3");
    btn1.addEventListener("click", generateQuotes);

    let btn2 = document.getElementById("button4");
    btn2.addEventListener("click", exitButton);

});