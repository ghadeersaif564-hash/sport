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

function previewStudentImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('studentPhoto');
        output.src = reader.result;
        document.getElementById('xrayOverlay').classList.add('hidden');
        document.getElementById('resultTitle').innerText = "تمت إضافة صورة الطالب بنجاح! 📸";
        document.getElementById('resultText').innerText = "اختاري نوع الأشعة السينية الحقيقية من الأزرار أعلاه لمسحها فوق صورة الطالب.";
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// تفعيل عرض صورة الأشعة الحقيقية فوق صورة الطالب
function scanRealXray(type, title, imageUrl, description) {
    const overlay = document.getElementById('xrayOverlay');
    const realImg = document.getElementById('xrayRealImage');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');

    realImg.src = imageUrl;
    overlay.classList.remove('hidden');
    
    resultTitle.innerText = `🔍 نتائج فحص: ${title}`;
    resultText.innerText = description;
}

const quizQuestions = [
    { q: "أي نوع من الأشعة يظهر عظام الجمجمة التي تحمي الدماغ؟", options: ["أشعة الجمجمة والراس", "أشعة القدم", "أشعة المعدة"], correct: 0 },
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
