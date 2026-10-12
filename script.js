// التنقل بين أقسام الموقع
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

// معاينة صورة الطالب عند رفعها
function previewStudentImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('studentPhoto');
        output.src = reader.result;
        
        // إعادة إخفاء الأشعة عند تغيير الصورة حتى يختار المعلم فحصاً جديداً
        document.getElementById('xrayOverlay').classList.add('hidden');
        document.getElementById('resultTitle').innerText = "تمت إضافة صورة الطالب بنجاح! 📸";
        document.getElementById('resultText').innerText = "اختر الآن العضو المراد فحصه بالـ X-Ray من الأزرار أعلاه.";
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// تشغيل مسح الأشعة السينية على صورة الطالب
function scanOrgan(type, icon, title, description) {
    const overlay = document.getElementById('xrayOverlay');
    const skeletonIcon = document.getElementById('skeletonIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');

    // إظهار طبقة الأشعة والرمز
    overlay.classList.remove('hidden');
    skeletonIcon.innerText = icon;

    // تحديث النتيجة والنص
    resultTitle.innerText = `🔍 نتائج فحص: ${title}`;
    resultText.innerText = description;
}

// لعبة اختبار الطبيب الصغير
const quizQuestions = [
    { q: "ما هو العضو الذي يساعدنا على التفكير والحفظ؟", options: ["القلب", "الدماغ", "المعدة"], correct: 1 },
    { q: "ما هي العظام التي تحمي الرئتين والقلب؟", options: ["القفص الصدري", "الجمجمة", "عظام القدم"], correct: 0 },
    { q: "ما وظيفة القلب الأساسية؟", options: ["هضم الطعام", "ضخ الدم للجسم", "التنفس"], correct: 1 }
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
