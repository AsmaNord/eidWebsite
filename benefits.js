const hadithElement = document.getElementById('hadiith');
const newHadithButton = document.getElementById('newb');
const narratorElement = document.getElementById('narrator');
let hadiths = [];

// Fetch Hadiths from the API
async function fetchHadiths() {
    do {
        try {
            const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json');
            const data = await response.json();
            hadiths = data.hadiths;
            console.log('Hadiths loaded:', hadiths.length);
        } catch (error) {
            console.error('Error fetching Hadiths:', error);
        }
    } while (hadiths.length >  8000) // To limit the length of the hadiths
    
}

// Get a random Hadith
function fetchRandomHadith() {
    if ((hadiths.length === 0)) {
        hadithElement.innerText = "Hadiths not loaded yet. Please try again.";
        return;
    } 
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    const selectedHadith = hadiths[randomIndex];

    hadithElement.innerText = selectedHadith.text;
    narratorElement.innerText = `(${selectedHadith.hadithnumber})`;
}

// Event Listeners
newHadithButton.addEventListener('click', fetchRandomHadith);
// Load Hadiths on startup
fetchHadiths();



/*
const hadithElement = document.getElementById('hadiith');
const newHadithButton = document.getElementById('newb');
const narratorElement = document.getElementById('narrator');
let hadiths = [];

// Fetch Hadiths from the API
async function fetchHadiths() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json');
        const data = await response.json();
        hadiths = data.hadiths;
        console.log('Hadiths loaded:', hadiths.length);
    } catch (error) {
        console.error('Error fetching Hadiths:', error);
    }
}

// Get a random Hadith
function fetchRandomHadith() {
    if ((hadiths.length === 0)) {
        hadithElement.innerText = "Hadiths not loaded yet. Please try again.";
        return;
    } 
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    const selectedHadith = hadiths[randomIndex];

    hadithElement.innerText = selectedHadith.text;
    narratorElement.innerText = `(${selectedHadith.hadithnumber})`;
}

// Event Listeners
newHadithButton.addEventListener('click', fetchRandomHadith);
// Load Hadiths on startup
fetchHadiths();
*/