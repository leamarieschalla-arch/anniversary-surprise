// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    const targetDate = new Date('2026-06-01T00:00:00').getTime();
    
    function calculate() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance <= 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            triggerConfetti();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    calculate();
    setInterval(calculate, 1000);
}

// ============================================
// SLIDESHOW
// ============================================
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fade');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('fade');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto-advance slideshow every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// ============================================
// WELTREISE - LÄNDER
// ============================================
const countries = [
    { name: 'Deutschland', flag: '🇩🇪' },
    { name: 'Frankreich', flag: '🇫🇷' },
    { name: 'Spanien', flag: '🇪🇸' },
    { name: 'Italien', flag: '🇮🇹' },
    { name: 'Österreich', flag: '🇦🇹' },
    { name: 'Schweiz', flag: '🇨🇭' },
    { name: 'Polen', flag: '🇵🇱' },
    { name: 'Tschechien', flag: '🇨🇿' },
    { name: 'Ungarn', flag: '🇭🇺' },
    { name: 'Griechenland', flag: '🇬🇷' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Schweden', flag: '🇸🇪' },
    { name: 'Norwegen', flag: '🇳🇴' },
    { name: 'Dänemark', flag: '🇩🇰' },
    { name: 'Niederlande', flag: '🇳🇱' },
    { name: 'Belgien', flag: '🇧🇪' },
    { name: 'Luxemburg', flag: '🇱🇺' },
    { name: 'Irland', flag: '🇮🇪' },
    { name: 'Großbritannien', flag: '🇬🇧' },
    { name: 'Slowenien', flag: '🇸🇮' },
    { name: 'Kroatien', flag: '🇭🇷' },
    { name: 'Rumänien', flag: '🇷🇴' },
    { name: 'Bulgarien', flag: '🇧🇬' },
    { name: 'Vereinigte Staaten', flag: '🇺🇸' },
    { name: 'Kanada', flag: '🇨🇦' },
    { name: 'Mexiko', flag: '🇲🇽' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Südkorea', flag: '🇰🇷' },
    { name: 'Australien', flag: '🇦🇺' },
    { name: 'Neuseeland', flag: '🇳🇿' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Singapur', flag: '🇸🇬' },
    { name: 'Indonesien', flag: '🇮🇩' },
    { name: 'Philippinen', flag: '🇵🇭' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Indien', flag: '🇮🇳' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'Ägypten', flag: '🇪🇬' },
    { name: 'Marokko', flag: '🇲🇦' }
];

function initializeCountries() {
    const grid = document.getElementById('countriesGrid');
    grid.innerHTML = '';
    
    countries.forEach(country => {
        const btn = document.createElement('button');
        btn.className = 'country-btn';
        btn.textContent = country.flag + ' ' + country.name;
        btn.onclick = () => toggleCountry(btn, country);
        
        if (isCountryVisited(country.name)) {
            btn.classList.add('visited');
        }
        
        grid.appendChild(btn);
    });
    
    updateVisitedList();
}

function toggleCountry(btn, country) {
    btn.classList.toggle('visited');
    saveVisitedCountry(country.name, btn.classList.contains('visited'));
    updateVisitedList();
}

function saveVisitedCountry(countryName, visited) {
    let visited_countries = JSON.parse(localStorage.getItem('visited_countries')) || {};
    if (visited) {
        visited_countries[countryName] = true;
    } else {
        delete visited_countries[countryName];
    }
    localStorage.setItem('visited_countries', JSON.stringify(visited_countries));
}

function isCountryVisited(countryName) {
    const visited = JSON.parse(localStorage.getItem('visited_countries')) || {};
    return visited[countryName] === true;
}

function updateVisitedList() {
    const list = document.getElementById('visitedList');
    list.innerHTML = '';
    
    const visited = JSON.parse(localStorage.getItem('visited_countries')) || {};
    const visitedCountries = Object.keys(visited).filter(key => visited[key]);
    
    if (visitedCountries.length === 0) {
        list.innerHTML = '<p style="color: #999;">Noch keine Länder hinzugefügt 🌍</p>';
        return;
    }
    
    visitedCountries.forEach(countryName => {
        const country = countries.find(c => c.name === countryName);
        if (country) {
            const item = document.createElement('div');
            item.className = 'visited-item';
            item.innerHTML = `<span>${country.flag}</span> <span>${country.name}</span>`;
            list.appendChild(item);
        }
    });
}

// ============================================
// BUCKET LIST
// ============================================
function initializeBucketList() {
    loadBucketList();
}

function addBucketItem() {
    const input = document.getElementById('bucketInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Bitte gib einen Traum ein! 🎯');
        return;
    }
    
    const items = JSON.parse(localStorage.getItem('bucket_items')) || [];
    items.push({
        id: Date.now(),
        text: text,
        completed: false
    });
    
    localStorage.setItem('bucket_items', JSON.stringify(items));
    input.value = '';
    loadBucketList();
}

function loadBucketList() {
    const list = document.getElementById('bucketList');
    const items = JSON.parse(localStorage.getItem('bucket_items')) || [];
    
    list.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'bucket-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'bucket-checkbox';
        checkbox.checked = item.completed;
        checkbox.onchange = () => toggleBucketItem(item.id);
        
        const span = document.createElement('span');
        span.className = 'bucket-text' + (item.completed ? ' completed' : '');
        span.textContent = item.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'bucket-delete';
        deleteBtn.textContent = '✕';
        deleteBtn.onclick = () => deleteBucketItem(item.id);
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function toggleBucketItem(id) {
    const items = JSON.parse(localStorage.getItem('bucket_items')) || [];
    const item = items.find(i => i.id === id);
    if (item) {
        item.completed = !item.completed;
        localStorage.setItem('bucket_items', JSON.stringify(items));
        loadBucketList();
    }
}

function deleteBucketItem(id) {
    let items = JSON.parse(localStorage.getItem('bucket_items')) || [];
    items = items.filter(i => i.id !== id);
    localStorage.setItem('bucket_items', JSON.stringify(items));
    loadBucketList();
}

// ============================================
// ÜBERRASCHUNGSBOX
// ============================================
const surpriseQuotes = [
    "Love is not about finding someone you can live with, it's about finding someone you can't imagine living without.",
    "In your eyes, I found my home.",
    "You're my today and all of my tomorrows.",
    "I fall in love with you every single day.",
    "Every moment with you is a treasure.",
    "You make my heart skip a beat.",
    "Forever isn't long enough with you.",
    "You're my greatest adventure.",
    "I love you more than words can say.",
    "You're the best decision I ever made."
];

function openSurprise() {
    const choice = Math.floor(Math.random() * 3);
    const content = document.getElementById('surprise-content');
    
    content.innerHTML = '';
    
    if (choice === 0) {
        // Fliegende Herzen
        createHearts();
        content.innerHTML = '<p style="color: #9c5ba8; font-size: 1.5em;">Ich liebe dich! 💕</p>';
    } else if (choice === 1) {
        // Liebeszitat
        const quote = surpriseQuotes[Math.floor(Math.random() * surpriseQuotes.length)];
        content.innerHTML = `<div class="surprise-quote">"${quote}"</div>`;
    } else {
        // Bild (platzhalter)
        content.innerHTML = `<div class="surprise-quote">🥰 Du bist mein größtes Geschenk! 🥰</div>`;
    }
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-fly';
            heart.textContent = ['❤️', '💗', '💖', '💝'][Math.floor(Math.random() * 4)];
            
            const startX = Math.random() * window.innerWidth;
            const startY = window.innerHeight / 2;
            
            heart.style.left = startX + 'px';
            heart.style.top = startY + 'px';
            
            const tx = (Math.random() - 0.5) * 200;
            const ty = -Math.random() * 200 - 100;
            
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
}

// ============================================
// BRIEF
// ============================================
function openLetter() {
    document.getElementById('letterContent').classList.remove('hidden');
}

function closeLetter() {
    document.getElementById('letterContent').classList.add('hidden');
}

// HIER KANNST DU DEINEN BRIEF EINFÜGEN!
function initializeLetter() {
    const letterText = document.getElementById('letterText');
    letterText.innerHTML = `
        <p>Lieber Linus,</p>
        
        <p>ich kann nicht glauben, dass bereits ein Jahr vergangen ist, seitdem wir unser großes Abenteuer begonnen haben. 
        Jeder einzelne Tag mit dir war ein Segen und ich bin so dankbar, dich an meiner Seite zu haben.</p>
        
        <p>Du hast mein Leben in so vielen Wegen bereichert. Dein Lachen, deine Freundlichkeit, deine Unterstützung - 
        all das bedeutet mir mehr als du je wissen wirst. Mit dir fühle ich mich zu Hause, egal wo wir sind.</p>
        
        <p>Diese Website ist ein kleiner Beweis meiner Liebe zu dir. Jede Kategorie, jede Animation, jeder Button - 
        es ist alles mit Liebe gemacht.</p>
        
        <p>Ich freue mich auf viele weitere Jahre mit dir, auf mehr Abenteuer, mehr Lachen, mehr Liebe.</p>
        
        <p><strong>Ich liebe dich mehr als alles andere auf der Welt. ❤️</strong></p>
        
        <p>Deine Lieblingsmensch</p>
    `;
}

// ============================================
// KONFETTI
// ============================================
function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 2,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 2,
            color: ['#ff69b4', '#9c5ba8', '#d9e9f7', '#e6d9f8', '#ffd700'][Math.floor(Math.random() * 5)],
            emoji: ['🎉', '❤️', '💕', '✨', '🎊'][Math.floor(Math.random() * 5)]
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += 0.1;
            
            if (p.y > canvas.height) {
                particles.splice(i, 1);
            }
            
            ctx.fillStyle = p.color;
            ctx.font = p.size + 'px Arial';
            ctx.fillText(p.emoji, p.x, p.y);
        });
        
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.style.display = 'none';
        }
    }
    
    animate();
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    showSlide(slideIndex);
    initializeCountries();
    initializeBucketList();
    initializeLetter();
});

// Lade auch die Länder beim Neuladen
window.addEventListener('load', () => {
    updateVisitedList();
});
