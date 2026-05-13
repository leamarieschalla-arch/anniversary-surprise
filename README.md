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
    </div>
    
    <script src="script.js"></script>
</body>
</html>
