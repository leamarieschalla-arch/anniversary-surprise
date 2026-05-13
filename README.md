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
        slides[i].style.display = 'none';
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
    // Deutschland und Europa
    { name: 'Deutschland', flag: '🇩🇪' },
    { name: 'Österreich', flag: '🇦🇹' },
    { name: 'Schweiz', flag: '🇨🇭' },
    { name: 'Frankreich', flag: '🇫🇷' },
    { name: 'Italien', flag: '🇮🇹' },
    { name: 'Spanien', flag: '🇪🇸' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Polen', flag: '🇵🇱' },
    { name: 'Tschechien', flag: '🇨🇿' },
    { name: 'Ungarn', flag: '🇭🇺' },
    { name: 'Griechenland', flag: '🇬🇷' },
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
    { name: 'Finnland', flag: '🇫🇮' },
    { name: 'Serbien', flag: '🇷🇸' },
    // Americas
    { name: 'Vereinigte Staaten', flag: '🇺🇸' },
    { name: 'Kanada', flag: '🇨🇦' },
    { name: 'Mexiko', flag: '🇲🇽' },
    { name: 'Brasilien', flag: '🇧🇷' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'Argentinien', flag: '🇦🇷' },
    // Asien
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Südkorea', flag: '🇰🇷' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Singapur', flag: '🇸🇬' },
    { name: 'Indonesien', flag: '🇮🇩' },
    { name: 'Philippinen', flag: '🇵🇭' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Indien', flag: '🇮🇳' },
    { name: 'Dubai', flag: '🇦🇪' },
    // Afrika
    { name: 'Ägypten', flag: '🇪🇬' },
    { name: 'Marokko', flag: '🇲🇦' },
    { name: 'Südafrika', flag: '🇿🇦' },
    { name: 'Kenia', flag: '🇰🇪' },
    // Ozeanien
    { name: 'Australien', flag: '🇦🇺' },
    { name: 'Neuseeland', flag: '🇳🇿' }
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
        list.innerHTML = '<p style="color: #999; text-align: center; grid-column: 1/-1;">Noch keine Länder hinzugefügt 🌍</p>';
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
    
    if (items.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = '#999';
        emptyMsg.textContent = 'Noch keine Träume hinzugefügt...';
        list.appendChild(emptyMsg);
        return;
    }
    
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
    "You're the best decision I ever made.",
    "My heart chose you before my mind could understand why.",
    "With you, I found my soulmate and my best friend.",
    "You are my today and all of my tomorrows.",
    "I'm falling for you more every day."
];

function openSurprise() {
    const choice = Math.floor(Math.random() * 3);
    const content = document.getElementById('surprise-content');
    
    content.innerHTML = '';
    
    if (choice === 0) {
        // Fliegende Herzen
        createHearts();
        content.innerHTML = '<p style="color: #9c5ba8; font-size: 1.5em; font-weight: 600;">Ich liebe dich! 💕</p>';
    } else if (choice === 1) {
        // Liebeszitat
        const quote = surpriseQuotes[Math.floor(Math.random() * surpriseQuotes.length)];
        content.innerHTML = `<div class="surprise-quote">"${quote}"</div>`;
    } else {
        // Liebesbotschaft
        const messages = [
            '🥰 Du bist mein größtes Glück! 🥰',
            '❤️ Danke dass es dich gibt! ❤️',
            '💕 Du bist mein Ein und Alles! 💕',
            '✨ Mit dir ist das Leben ein Traum! ✨'
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];
        content.innerHTML = `<div class="surprise-quote">${message}</div>`;
    }
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-fly';
            heart.textContent = ['❤️', '💗', '💖', '💝', '💞'][Math.floor(Math.random() * 5)];
            
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
        <p><strong>Lieber Linus,</strong></p>
        
        <p>ich kann nicht glauben, dass bereits ein Jahr vergangen ist, seitdem wir unser großes Abenteuer begonnen haben! 
        Jeder einzelne Tag mit dir war ein wahrer Segen, und ich bin unendlich dankbar, dich an meiner Seite zu haben.</p>
        
        <p>Du hast mein Leben in so vielen Wegen bereichert. Dein wunderschönes Lachen, deine unglaubliche Freundlichkeit, 
        deine bedingungslose Unterstützung und deine Liebe - all das bedeutet mir mehr als du je wissen wirst. Mit dir an meiner Seite 
        fühle ich mich zu Hause, egal wo wir sind und was wir tun.</p>
        
        <p>Diese Website ist ein kleiner Beweis meiner großen Liebe zu dir. Jede Kategorie, jede Animation, jeder Button - 
        alles ist mit so viel Liebe und Gedanken für dich gemacht. Ich möchte, dass du siehst, wie wichtig du mir bist.</p>
        
        <p>Ich freue mich unglaublich auf viele weitere Jahre mit dir! Auf mehr gemeinsame Abenteuer, mehr verrückte Momente, 
        mehr Lachen und vor allem auf noch mehr Liebe. Du bist mein Traum, der wahr geworden ist.</p>
        
        <p><strong>Ich liebe dich mehr als alles andere auf dieser Welt! ❤️</strong></p>
        
        <p>Für immer deine,<br>
        <em>Deine Lieblingsmensch 💕</em></p>
    `;
}

// ============================================
// KONFETTI
// ============================================
function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 2,
            speedX: Math.random() * 6 - 3,
            speedY: Math.random() * 4 + 3,
            color: ['#ff69b4', '#9c5ba8', '#d9e9f7', '#e6d9f8', '#ffd700', '#ff1493'][Math.floor(Math.random() * 6)],
            emoji: ['🎉', '❤️', '💕', '✨', '🎊', '💖', '💗'][Math.floor(Math.random() * 7)],
            rotation: Math.random() * 360
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += 0.1;
            p.rotation += 5;
            
            if (p.y > canvas.height) {
                particles.splice(i, 1);
            }
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.font = p.size + 'px Arial';
            ctx.fillText(p.emoji, 0, 0);
            ctx.restore();
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

// Update visited list on page load
window.addEventListener('load', () => {
    updateVisitedList();
});
