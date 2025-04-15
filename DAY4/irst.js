let quotes = [
    "The only way to do great work is to love what you do.  Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. John Lennon",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. Ralph Waldo Emerson",
    "It does not matter how slowly you go as long as you do not stop. Confucius",
    "Be the change that you wish to see in the world. Mahatma Gandhi",
    "The only limit to our realization of tomorrow is our doubts of today. Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. Winston Churchill",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Act as if what you do makes a difference. It does. – William James",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "It is never too late to be what you might have been. – George Eliot"
];

function timing(){
const text = document.getElementById("qoute");
const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}

setInterval(timing,5000);