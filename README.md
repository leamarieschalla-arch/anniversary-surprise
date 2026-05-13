<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unser Jahrestag ❤️</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="confetti"></canvas>
    
    <div class="container">
        <!-- HEADER -->
        <h1 class="title">🎉 Unser Jahrestag 🎉</h1>
        <p class="subtitle">1 Jahr voller Liebe - 01.06.2025 bis 01.06.2026</p>
        
        <!-- COUNTDOWN -->
        <section class="section countdown-section">
            <h2>⏰ Countdown bis zu unserem Jubiläum</h2>
            <div class="countdown">
                <div class="countdown-item">
                    <span class="countdown-value" id="days">0</span>
                    <span class="countdown-label">Tage</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value" id="hours">00</span>
                    <span class="countdown-label">Stunden</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value" id="minutes">00</span>
                    <span class="countdown-label">Minuten</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value" id="seconds">00</span>
                    <span class="countdown-label">Sekunden</span>
                </div>
            </div>
        </section>
        
        <!-- SLIDESHOW -->
        <section class="section slideshow-section">
            <h2>📸 Unsere schönsten Momente</h2>
            <div class="slideshow">
                <div class="slide fade">
                    <img src="images/photo1.jpg" alt="Foto 1">
                </div>
                <div class="slide fade">
                    <img src="images/photo2.jpg" alt="Foto 2">
                </div>
                <div class="slide fade">
                    <img src="images/photo3.jpg" alt="Foto 3">
                </div>
                <div class="slide fade">
                    <img src="images/photo4.jpg" alt="Foto 4">
                </div>
                <div class="slide fade">
                    <img src="images/photo5.jpg" alt="Foto 5">
                </div>
                
                <a class="prev" onclick="changeSlide(-1)">❮</a>
                <a class="next" onclick="changeSlide(1)">❯</a>
            </div>
            
            <div class="dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
            </div>
        </section>
        
        <!-- BEARS -->
        <section class="section bears-section">
            <h2>🐻 Unsere Bärchen</h2>
            <div class="bears-container">
                <div class="bear white-bear">
                    <div class="bear-body"></div>
                    <div class="bear-head">
                        <div class="bear-eye left"></div>
                        <div class="bear-eye right"></div>
                        <div class="bear-smile"></div>
                    </div>
                </div>
                <div class="heart-animation">💕</div>
                <div class="bear brown-bear">
                    <div class="bear-body"></div>
                    <div class="bear-head">
                        <div class="bear-eye left"></div>
                        <div class="bear-eye right"></div>
                        <div class="bear-smile"></div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- WELTREISE -->
        <section class="section travel-section">
            <h2>🌍 Unsere Weltreise</h2>
            <p>Klick auf die Länder, die wir schon bereist haben!</p>
            <div class="countries-grid" id="countriesGrid"></div>
            <h3>✅ Besuchte Länder:</h3>
            <div class="visited-list" id="visitedList"></div>
        </section>
        
        <!-- BUCKET LIST -->
        <section class="section bucket-section">
            <h2>🎯 Unsere Bucket List</h2>
            <p>Träume die wir noch gemeinsam erfüllen möchten:</p>
            <div class="bucket-input-container">
                <input type="text" id="bucketInput" placeholder="Neuer Traum..." class="bucket-input">
                <button onclick="addBucketItem()" class="bucket-add-btn">➕ Hinzufügen</button>
            </div>
            <ul class="bucket-list" id="bucketList"></ul>
        </section>
        
        <!-- ÜBERRASCHUNGSBOX -->
        <section class="section surprise-section">
            <h2>🎁 Überraschung für dich</h2>
            <button class="surprise-box" onclick="openSurprise()">
                <span style="font-size: 3em;">🎁</span>
                <p>Klick mich!</p>
            </button>
            <div class="surprise-content" id="surprise-content"></div>
        </section>
        
        <!-- BRIEF -->
        <section class="section letter-section">
            <h2>💌 Ein Brief für dich</h2>
            <button class="letter-btn" onclick="openLetter()">📮 Brief öffnen</button>
            
            <div id="letterContent" class="letter-modal hidden">
                <div class="letter-box">
                    <button class="letter-close" onclick="closeLetter()">✕</button>
                    <div id="letterText" class="letter-text"></div>
                </div>
            </div>
        </section>
        
        <!-- FOOTER -->
        <footer class="footer">
            <p>Mit ❤️ erstellt für Linus</p>
            <p>01.06.2025 - 01.06.2026</p>
        </footer>
        script.js
    </div>
    
    <script src="script.js"></script>
</body>
</html>
/* ========================================
   GRUNDLAGEN & FARBEN
   ======================================== */

:root {
    --primary-purple: #9c5ba8;
    --light-purple: #e6d9f8;
    --light-blue: #d9e9f7;
    --accent-pink: #ff69b4;
    --text-dark: #333;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #e6d9f8 0%, #d9e9f7 50%, #e6d9f8 100%);
    color: var(--text-dark);
    line-height: 1.6;
    min-height: 100vh;
}

/* ========================================
   CONTAINER & LAYOUT
   ======================================== */

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.6s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========================================
   HEADER
   ======================================== */

.title {
    text-align: center;
    font-size: 3em;
    color: var(--primary-purple);
    margin: 1.5rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
    text-align: center;
    color: var(--accent-pink);
    font-size: 1.2em;
    margin-bottom: 2rem;
}

/* ========================================
   COUNTDOWN
   ======================================== */

.countdown-section h2 {
    color: var(--primary-purple);
    margin-bottom: 1.5rem;
    text-align: center;
}

.countdown {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #e6d9f8, #d9e9f7);
    padding: 1.5rem;
    border-radius: 10px;
    min-width: 80px;
    border: 2px solid var(--primary-purple);
}

.countdown-value {
    font-size: 2.5em;
    font-weight: bold;
    color: var(--primary-purple);
}

.countdown-label {
    font-size: 0.9em;
    color: #666;
    margin-top: 0.5rem;
}

/* ========================================
   SLIDESHOW
   ======================================== */

.slideshow {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
}

.slide {
    display: none;
    width: 100%;
    animation: zoom 0.5s ease;
}

.slide img {
    width: 100%;
    height: auto;
    display: block;
}

@keyframes zoom {
    from {
        transform: scale(0.95);
        opacity: 0.8;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.slide.fade {
    display: block;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    background: rgba(156, 91, 168, 0.8);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    transform: translateY(-50%);
    transition: var(--transition);
    border-radius: 5px;
}

.prev:hover, .next:hover {
    background: var(--primary-purple);
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.dots {
    text-align: center;
    padding: 1rem 0;
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s;
}

.dot.active {
    background-color: var(--primary-purple);
}

/* ========================================
   BÄRCHEN
   ======================================== */

.bears-section h2 {
    color: var(--primary-purple);
    text-align: center;
    margin-bottom: 2rem;
}

.bears-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

.bear {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: sway 3s ease-in-out infinite;
}

@keyframes sway {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.bear-head {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 1rem;
}

.white-bear .bear-head {
    background: white;
    border: 2px solid #999;
}

.brown-bear .bear-head {
    background: #8B4513;
}

.bear-eye {
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 20px;
}

.bear-eye.left {
    left: 15px;
}

.bear-eye.right {
    right: 15px;
}

.bear-smile {
    width: 15px;
    height: 8px;
    border: 2px solid black;
    border-top: none;
    border-radius: 0 0 15px 15px;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
}

.bear-body {
    width: 50px;
    height: 70px;
    border-radius: 50%;
    position: relative;
}

.white-bear .bear-body {
    background: white;
    border: 2px solid #999;
}

.brown-bear .bear-body {
    background: #8B4513;
}

.heart-animation {
    font-size: 2em;
    animation: heartbeat 1s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

/* ========================================
   WELTREISE
   ======================================== */

.travel-section h2, .travel-section h3 {
    color: var(--primary-purple);
}

.countries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.8rem;
    margin: 1.5rem 0;
}

.country-btn {
    padding: 0.8rem;
    background: linear-gradient(135deg, #e6d9f8, #d9e9f7);
    border: 2px solid var(--primary-purple);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95em;
    transition: var(--transition);
    font-weight: 500;
}

.country-btn:hover {
    background: var(--primary-purple);
    color: white;
    transform: scale(1.05);
}

.country-btn.visited {
    background: var(--primary-purple);
    color: white;
    box-shadow: 0 4px 12px rgba(156, 91, 168, 0.4);
}

.visited-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
}

.visited-item {
    padding: 0.8rem;
    background: white;
    border-left: 4px solid var(--primary-purple);
    border-radius: 4px;
    text-align: center;
}

/* ========================================
   BUCKET LIST
   ======================================== */

.bucket-section h2, .bucket-section h3 {
    color: var(--primary-purple);
}

.bucket-input-container {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
}

.bucket-input {
    flex: 1;
    padding: 0.8rem;
    border: 2px solid var(--primary-purple);
    border-radius: 8px;
    font-size: 1em;
}

.bucket-input:focus {
    outline: none;
    border-color: var(--accent-pink);
    box-shadow: 0 0 8px rgba(255, 105, 180, 0.3);
}

.bucket-add-btn {
    padding: 0.8rem 1.5rem;
    background: var(--primary-purple);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
}

.bucket-add-btn:hover {
    background: var(--accent-pink);
    transform: scale(1.05);
}

.bucket-list {
    list-style: none;
    margin-top: 1rem;
}

.bucket-item {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    animation: slideIn 0.3s ease;
}

.bucket-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 1rem;
}

.bucket-text {
    flex: 1;
}

.bucket-text.completed {
    text-decoration: line-through;
    color: #999;
}

.bucket-delete {
    background: #ff6b6b;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
}

.bucket-delete:hover {
    background: #ff5252;
    transform: scale(1.1);
}

/* ========================================
   ÜBERRASCHUNGSBOX
   ======================================== */

.surprise-section h2 {
    color: var(--primary-purple);
    text-align: center;
    margin-bottom: 1.5rem;
}

.surprise-box {
    display: block;
    margin: 0 auto 1rem;
    padding: 2rem;
    background: linear-gradient(135deg, #ffe0ec, #fff0e6);
    border: 3px solid var(--accent-pink);
    border-radius: 15px;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.1em;
    font-weight: bold;
}

.surprise-box:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
}

.surprise-content {
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    background: #fff5f9;
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.surprise-quote {
    font-size: 1.3em;
    color: var(--primary-purple);
    font-style: italic;
    padding: 1rem;
    line-height: 1.8;
}

.heart-fly {
    position: fixed;
    font-size: 2em;
    pointer-events: none;
    animation: fly 3s ease-out forwards;
}

@keyframes fly {
    to {
        transform: translate(var(--tx), var(--ty)) rotate(360deg);
        opacity: 0;
    }
}

/* ========================================
   BRIEF
   ======================================== */

.letter-section h2 {
    color: var(--primary-purple);
    text-align: center;
}

.letter-btn {
    display: block;
    margin: 1rem auto;
    padding: 1rem 2rem;
    background: var(--primary-purple);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    transition: var(--transition);
}

.letter-btn:hover {
    background: var(--accent-pink);
    transform: scale(1.05);
}

.letter-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.letter-modal.hidden {
    display: none;
}

.letter-box {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    max-width: 600px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    animation: slideIn 0.3s ease;
    max-height: 80vh;
    overflow-y: auto;
}

.letter-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-pink);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5em;
    transition: var(--transition);
}

.letter-close:hover {
    background: #ff5252;
    transform: scale(1.1);
}

.letter-text {
    color: var(--text-dark);
    line-height: 1.8;
    font-size: 1.05em;
}

.letter-text p {
    margin-bottom: 1rem;
}

/* ========================================
   FOOTER
   ======================================== */

.footer {
    text-align: center;
    padding: 2rem;
    color: var(--primary-purple);
    margin-top: 3rem;
}

/* ========================================
   RESPONSIVE
   ======================================== */

@media (max-width: 600px) {
    .title {
        font-size: 2em;
    }
    
    .countdown {
        gap: 0.5rem;
    }
    
    .countdown-item {
        min-width: 60px;
        padding: 1rem;
    }
    
    .countdown-value {
        font-size: 1.8em;
    }
    
    .bears-container {
        gap: 1rem;
    }
    
    .countries-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    
    .section {
        padding: 1.5rem;
    }
}

/* ========================================
   CONFETTI CANVAS
   ======================================== */

#confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
}
