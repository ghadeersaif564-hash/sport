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

// دالة تحميل صورة الطالب وتصفير الأشعة
function previewStudentImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('studentPhoto');
        output.src = reader.result;
        
        // إخفاء الأشعة السابقة حتى يختار المستخدم جديدة
        document.getElementById('xrayOverlayImg').classList.add('hidden');
        document.getElementById('scanLine').classList.add('hidden');
        
        document.getElementById('resultTitle').innerText = "تمت إضافة صورة الطالب بنجاح! 📸";
        document.getElementById('resultText').innerText = "اضغطي الآن على أي زر بالأعلى لتطبيب صورة الأشعة السينية الحقيقية فوق الطالب.";
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// دالة تطبيق صورة الأشعة الحقيقية فوق صورة الطالب
function applyRealXray(xrayUrl, title, description) {
    const xrayImg = document.getElementById('xrayOverlayImg');
    const scanLine = document.getElementById('scanLine');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');

    // تعيين رابط صورة الأشعة الحقيقية إما قفص صدري أو جمجمة أو يد
    xrayImg.src = xrayUrl;
    xrayImg.classList.remove('hidden');
    scanLine.classList.remove('hidden');

    resultTitle.innerText = `🔍 نتيجة الفحص الطبي: ${title}`;
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
