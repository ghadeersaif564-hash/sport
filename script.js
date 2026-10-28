let uploadedStudentImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=80";

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

// حفظ صورة الطالب المرفوعة في الذاكرة
function previewStudentImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        uploadedStudentImage = reader.result;
        const screen = document.getElementById('displayScreen');
        screen.src = uploadedStudentImage;
        
        document.getElementById('scanLine').classList.add('hidden');
        document.getElementById('resultTitle').innerText = "تم رفع صورة الطالب بنجاح! 📸";
        document.getElementById('resultText').innerText = "اضغطي الآن على أي زر فحص لعرض صورة الأشعة السينية الخاصة بذلك العضو.";
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// استبدال الشاشة بصورة الأشعة السينية الواضحة
function showRealXray(xrayUrl, title, description) {
    const screen = document.getElementById('displayScreen');
    const scanLine = document.getElementById('scanLine');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');

    // إظهار خط المسح لإعطاء شعور بالتفاعل
    scanLine.classList.remove('hidden');
    
    setTimeout(() => {
        screen.src = xrayUrl;
        scanLine.classList.add('hidden');
    }, 500);

    resultTitle.innerText = `🔍 نتائج الفحص الطبي: ${title}`;
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
