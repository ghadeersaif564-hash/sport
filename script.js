function showSection(sectionId, element) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.style.display = 'none');

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    if (element) {
        element.classList.add('active');
    }

    if (sectionId === 'quiz') {
        loadQuiz();
    }
}

// دالة عرض صورة الأشعة الحقيقية المباشرة
function showXray(type, imageUrl, title, description) {
    const xrayImg = document.getElementById('displayXrayImage');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');

    xrayImg.src = imageUrl;
    resultTitle.innerText = title;
    resultText.innerText = description;
}

const quizQuestions = [
    { q: "أي نوع من الأشعة يظهر عظام الجمجمة التي تحمي الدماغ؟", options: ["أشعة الجمجمة والدماغ", "أشعة القدم", "أشعة المعدة"], correct: 0 },
    { q: "ما هي العظام التي تحمي القلب والرئتين داخل الصدر؟", options: ["عظام الساق", "القفص الصدري والأضلاع", "عظام اليد"], correct: 1 },
    { q: "كم عدد عظام يد الإنسان التي تظهر في الأشعة وتساعده على الكتابة؟", options: ["5 عظام", "10 عظام", "27 عظمة"], correct: 2 }
];

let currentQ = 0;
let score = 0;

function loadQuiz() {
    if (currentQ >= quizQuestions.length) currentQ = 0;
    
    const qData = quizQuestions[currentQ];
    document.getElementById('quizQuestion').innerText = qData.q;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('quizFeedback').innerText = '';
}

function checkAnswer(selected) {
    const qData = quizQuestions[currentQ];
    const feedback = document.getElementById('quizFeedback');

    if (selected === qData.correct) {
        feedback.style.color = '#00f5d4';
        feedback.innerText = '🎉 إجابة صحيحة يا طبيب المستقبل!';
        score += 10;
        document.getElementById('scoreDisplay').innerText = score;
        currentQ++;
        setTimeout(loadQuiz, 1500);
    } else {
        feedback.style.color = '#ff0054';
        feedback.innerText = '❌ حاول مرة أخرى!';
    }
}
