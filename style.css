body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0d1b2a;
    color: #ffffff;
    margin: 0;
    padding: 0;
    direction: rtl;
}

.container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 0 15px;
}

header {
    background: linear-gradient(135deg, #1b263b, #415a77);
    color: #e0e1dd;
    text-align: center;
    padding: 20px 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.school-name {
    margin: 0 0 15px 0;
    font-size: 1.8rem;
    color: #90e0ef;
}

.main-nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.nav-btn {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid #778da9;
    color: #e0e1dd;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-btn:hover, .nav-btn.active {
    background-color: #00b4d8;
    color: #0d1b2a;
    border-color: #00b4d8;
}

.section-title {
    text-align: center;
    color: #90e0ef;
    margin-bottom: 5px;
}

.section-desc {
    text-align: center;
    color: #e0e1dd;
    margin-bottom: 20px;
}

.page-section {
    display: none;
}

.page-section.active {
    display: block !important;
}

/* زر تحميل صورة الطالب */
.upload-box {
    text-align: center;
    margin-bottom: 25px;
}

.upload-label {
    background-color: #00b4d8;
    color: #0d1b2a;
    padding: 12px 25px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 180, 216, 0.4);
}

.upload-label:hover {
    background-color: #90e0ef;
    transform: scale(1.03);
}

#imageUpload {
    display: none;
}

/* بيئة العمل وعرض الأشعة */
.xray-workspace {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.scanner-card {
    background: #1b263b;
    border: 3px solid #00b4d8;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0 0 25px rgba(0, 180, 216, 0.3);
}

.image-wrapper {
    position: relative;
    width: 280px;
    height: 360px;
    border-radius: 12px;
    overflow: hidden;
    background: #000;
}

#studentPhoto {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* طبقة الأشعة الخضراء/الزرقاء */
.xray-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 20, 40, 0.85);
    border: 2px solid #00f5d4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: fadeIn 0.4s ease;
}

.xray-overlay.hidden {
    display: none;
}

.skeleton-icon {
    font-size: 6rem;
    filter: drop-shadow(0 0 15px #00f5d4);
    animation: pulse 1.5s infinite alternate;
}

/* خط الأشعة الممسوح */
.scan-line {
    position: absolute;
    width: 100%;
    height: 4px;
    background: #00f5d4;
    box-shadow: 0 0 15px #00f5d4;
    animation: scanMove 2s infinite linear;
}

@keyframes scanMove {
    0% { top: 0%; }
    100% { top: 100%; }
}

@keyframes pulse {
    0% { transform: scale(0.95); }
    100% { transform: scale(1.1); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* التحكم بالأزرار والنتائج */
.scan-controls {
    max-width: 400px;
    flex: 1;
}

.xray-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.x-btn {
    background-color: #1b263b;
    border: 2px solid #00b4d8;
    color: #fff;
    padding: 12px 18px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    text-align: right;
    transition: 0.2s;
}

.x-btn:hover {
    background-color: #00b4d8;
    color: #0d1b2a;
    font-weight: bold;
}

.result-box {
    background: #1b263b;
    border-right: 4px solid #00f5d4;
    padding: 15px;
    border-radius: 10px;
}

.result-box h4 {
    margin: 0 0 8px 0;
    color: #00f5d4;
}

.result-box p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #e0e1dd;
}

/* الكروت والاختبارات */
.grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.card { background: #1b263b; border-radius: 15px; padding: 20px; text-align: center; width: 220px; border: 1px solid #415a77; }
.card-icon { font-size: 3rem; }
.quiz-card { margin: 0 auto; max-width: 500px; text-align: center; }
.options-container { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
.opt-btn { background: #415a77; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-size: 1rem; }
.opt-btn:hover { background: #00b4d8; color: black; }
.feedback-msg { font-weight: bold; margin-top: 10px; }
.score-text { font-size: 1.2rem; color: #ffd166; }
