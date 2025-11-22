// Translations
const translations = {
    ar: {
        navHome: 'الرئيسية',
        navFeatures: 'الميزات',
        navDownload: 'تحميل',
        navPrivacy: 'سياسة الخصوصية',
        navAbout: 'من نحن',
        navContact: 'تواصل معنا',
        heroSubtitle: 'تطبيق مسح الباركود المتقدم',
        heroDescription: 'حل متكامل لمسح الباركود والربط بين الهاتف والكمبيوتر. سريع، دقيق، وسهل الاستخدام.',
        btnDownload: 'تحميل التطبيق',
        btnDiscover: 'اكتشف الميزات',
        featuresTitle: 'الميزات الرئيسية',
        featuresSubtitle: 'اكتشف ما يجعل Counta Scanner مميزاً',
        feature1Title: 'مسح سريع ودقيق',
        feature1Desc: 'تقنية متقدمة لمسح الباركود بدقة عالية وسرعة فائقة',
        feature2Title: 'ربط مباشر',
        feature2Desc: 'ربط فوري بين الهاتف والكمبيوتر عبر Wi-Fi أو USB',
        feature3Title: 'لصق تلقائي',
        feature3Desc: 'لصق الباركود تلقائياً في الحقل النشط على الكمبيوتر',
        feature4Title: 'جودة عالية',
        feature4Desc: 'دعم دقات عالية تصل إلى 4K لمسح أفضل',
        feature5Title: 'أنواع متعددة',
        feature5Desc: 'دعم جميع أنواع الباركود بما فيها الباركود الشريطي',
        feature6Title: 'آمن ومحمي',
        feature6Desc: 'حماية كاملة لبياناتك مع تشفير متقدم',
        downloadTitle: 'حمّل التطبيق الآن',
        downloadSubtitle: 'متوفر على جميع المنصات',
        androidDesc: 'متوفر على Google Play',
        windowsDesc: 'متوفر للكمبيوتر',
        downloadAndroid: 'تحميل للاندرويد',
        downloadWindows: 'تحميل للويندوز',
        free: 'مجاني',
        stat1: 'مستخدم نشط',
        stat2: 'باركود تم مسحه',
        stat3: '% دقة المسح',
        stat4: 'ساعة دعم',
        footerDesc: 'تطبيق مسح الباركود المتقدم للهواتف وأجهزة الكمبيوتر',
        footerQuickLinks: 'روابط سريعة',
        footerInfo: 'معلومات',
        footerContact: 'التواصل',
        footerRights: 'جميع الحقوق محفوظة.',
        footerDev: 'Powered by',
        // Privacy Page
        privacyTitle: 'سياسة الخصوصية',
        privacyLastUpdate: 'آخر تحديث: يناير 2025',
        privacyIntro: 'مقدمة',
        privacyIntroText: 'نحن في Counta Scanner نلتزم بحماية خصوصيتك وبياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام تطبيقنا.',
        privacyDataCollected: 'البيانات التي نجمعها',
        privacyDataCollectedText: 'نقوم بجمع الأنواع التالية من البيانات:',
        privacyAccountInfo: 'معلومات الحساب:',
        privacyAccountInfoText: 'الاسم، البريد الإلكتروني، وكلمة المرور عند إنشاء حساب',
        privacyDeviceId: 'معرف الجهاز:',
        privacyDeviceIdText: 'معرف فريد لجهازك لضمان الأمان والربط',
        privacyUsageData: 'بيانات الاستخدام:',
        privacyUsageDataText: 'معلومات عن كيفية استخدامك للتطبيق',
        privacyBarcodes: 'الباركودات:',
        privacyBarcodesText: 'الباركودات التي تقوم بمسحها (محفوظة محلياً فقط)',
        privacyHowWeUse: 'كيف نستخدم بياناتك',
        privacyHowWeUseText: 'نستخدم البيانات التي نجمعها للأغراض التالية:',
        privacyProvideService: 'توفير وتحسين خدمات التطبيق',
        privacySecurity: 'ضمان أمان حسابك وبياناتك',
        privacyConnection: 'الربط بين جهازك الهاتف والكمبيوتر',
        privacyNotifications: 'إرسال إشعارات مهمة عن التطبيق',
        privacyAnalytics: 'تحليل استخدام التطبيق لتحسين الأداء',
        privacyProtection: 'حماية البيانات',
        privacyProtectionText: 'نستخدم تقنيات تشفير متقدمة لحماية بياناتك. جميع البيانات المرسلة بين التطبيق والخوادم مشفرة باستخدام بروتوكولات أمان قياسية.',
        privacySharing: 'مشاركة البيانات',
        privacySharingText: 'نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك بياناتك فقط في الحالات التالية:',
        privacyLegal: 'عند الحاجة القانونية أو عند طلب السلطات المختصة',
        privacyProviders: 'مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل التطبيق',
        privacyRights: 'لحماية حقوقنا القانونية',
        privacyYourRights: 'حقوقك',
        privacyYourRightsText: 'لديك الحق في:',
        privacyAccess: 'الوصول إلى بياناتك الشخصية',
        privacyCorrect: 'تصحيح أي بيانات غير دقيقة',
        privacyDelete: 'حذف حسابك وبياناتك',
        privacyRefuse: 'رفض جمع بيانات معينة',
        privacyCookies: 'ملفات تعريف الارتباط',
        privacyCookiesText: 'قد نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح.',
        privacyChanges: 'التغييرات على سياسة الخصوصية',
        privacyChangesText: 'قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر التطبيق أو البريد الإلكتروني.',
        privacyContactUs: 'التواصل معنا',
        privacyContactUsText: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:',
        // About Page
        aboutTitle: 'من نحن',
        aboutSubtitle: 'تعرف على فريق Counta Scanner',
        aboutIntro: 'عن Counta Scanner',
        aboutIntroText: 'Counta Scanner هو تطبيق متقدم لمسح الباركود تم تطويره لربط الهواتف الذكية بأجهزة الكمبيوتر بشكل سلس وفعال. هدفنا هو توفير حل بسيط وسريع لمسح الباركود ونقل البيانات مباشرة إلى الكمبيوتر.',
        aboutVision: 'رؤيتنا',
        aboutVisionText: 'نؤمن بأن التكنولوجيا يجب أن تكون بسيطة وسهلة الاستخدام. نسعى لجعل عملية مسح الباركود ونقل البيانات بين الأجهزة أمراً سهلاً ومباشراً دون تعقيدات.',
        aboutMission: 'مهمتنا',
        aboutMissionText: 'مهمتنا هي توفير أفضل تجربة مستخدم ممكنة من خلال:',
        aboutInnovative: 'تطوير حلول مبتكرة وسهلة الاستخدام',
        aboutSecurity: 'ضمان الأمان والخصوصية لبيانات المستخدمين',
        aboutSupport: 'توفير دعم فني متميز',
        aboutImprove: 'الاستمرار في تحسين التطبيق بناءً على ملاحظات المستخدمين',
        aboutDeveloper: 'المطور',
        aboutDeveloperText: 'تم تطوير Counta Scanner بواسطة',
        aboutDeveloperName: 'Counta',
        aboutDeveloperDesc: 'فريق متخصص في تطوير تطبيقات الهواتف الذكية وتطبيقات سطح المكتب.',
        aboutMoreInfo: 'للمزيد من المعلومات أو التواصل:',
        aboutFacebook: 'فيسبوك:',
        aboutWhatsApp: 'واتساب:',
        aboutEmail: 'البريد الإلكتروني:',
        aboutWhy: 'لماذا Counta Scanner؟',
        aboutWhyText: 'ما يميز Counta Scanner عن التطبيقات الأخرى:',
        aboutWhy1: 'دقة عالية في مسح الباركود بفضل تقنية ML Kit',
        aboutWhy2: 'ربط مباشر بين الهاتف والكمبيوتر',
        aboutWhy3: 'دعم دقات عالية تصل إلى 4K',
        aboutWhy4: 'واجهة مستخدم حديثة وسهلة',
        aboutWhy5: 'أمان عالي لحماية بياناتك',
        aboutWhy6: 'دعم كامل للغة العربية',
        // Contact Page
        contactTitle: 'تواصل معنا',
        contactSubtitle: 'نحن هنا لمساعدتك',
        contactInfo: 'معلومات التواصل',
        contactInfoText: 'نحن سعداء بالتواصل معك! يمكنك التواصل معنا عبر أي من الطرق التالية:',
        contactWhatsApp: 'واتساب',
        contactPhone: 'هاتف',
        contactEmail: 'بريد إلكتروني',
        contactFacebook: 'فيسبوك',
        contactSendMessage: 'أرسل لنا رسالة',
        contactName: 'الاسم *',
        contactEmailLabel: 'البريد الإلكتروني *',
        contactSubject: 'الموضوع *',
        contactMessage: 'الرسالة *',
        contactSend: 'إرسال الرسالة',
        contactSending: 'جاري الإرسال...',
        contactWorkHours: 'أوقات العمل',
        contactWorkHoursText: 'نحن متاحون للرد على استفساراتك خلال الأوقات التالية:',
        contactWeekdays: 'الأحد - الخميس:',
        contactWeekdaysTime: '9:00 صباحاً - 6:00 مساءً',
        contactWeekend: 'الجمعة - السبت:',
        contactWeekendTime: 'متاح عبر البريد الإلكتروني',
        contactNote: 'ملاحظة: قد يستغرق الرد على البريد الإلكتروني من 24-48 ساعة.',
        // Windows Download Modal
        windowsDownloadTitle: 'تحميل Counta Scanner لـ Windows',
        step1Title: 'تثبيت Python',
        step1Desc: 'Python مطلوب لتشغيل Counta Scanner. قم بتحميل وتثبيت Python 3.8 أو أحدث.',
        downloadPython: 'تحميل Python',
        installationInstructions: 'تعليمات التثبيت:',
        pythonStep1: 'قم بتحميل Python من الموقع الرسمي',
        pythonStep2: 'شغّل المثبّت وحدّد "Add Python to PATH"',
        pythonStep3: 'انقر على "Install Now" وانتظر اكتمال التثبيت',
        pythonStep4: 'أعد تشغيل الكمبيوتر بعد التثبيت',
        step2Title: 'تحميل التطبيق',
        step2Desc: 'قم بتحميل مثبّت تطبيق Counta Scanner لـ Windows.',
        downloadApplication: 'تحميل التطبيق',
        appInfo: 'حجم الملف: ~150 ميجابايت | متوافق مع Windows 8, 8.1, 10, و 11',
        step3Title: 'تثبيت المتطلبات',
        step3Desc: 'بعد تثبيت التطبيق، قم بتحميل وتشغيل مثبّت المتطلبات لإعداد جميع التبعيات اللازمة.',
        downloadRequirements: 'تحميل مثبّت المتطلبات',
        requirementsInfo: 'شغّل هذا المثبّت بعد تثبيت التطبيق الرئيسي'
    },
    en: {
        navHome: 'Home',
        navFeatures: 'Features',
        navDownload: 'Download',
        navPrivacy: 'Privacy Policy',
        navAbout: 'About Us',
        navContact: 'Contact',
        heroSubtitle: 'Advanced Barcode Scanner App',
        heroDescription: 'Complete solution for barcode scanning and connecting phone to computer. Fast, accurate, and easy to use.',
        btnDownload: 'Download App',
        btnDiscover: 'Discover Features',
        featuresTitle: 'Main Features',
        featuresSubtitle: 'Discover what makes Counta Scanner special',
        feature1Title: 'Fast & Accurate Scanning',
        feature1Desc: 'Advanced technology for high-precision and ultra-fast barcode scanning',
        feature2Title: 'Direct Connection',
        feature2Desc: 'Instant connection between phone and computer via Wi-Fi or USB',
        feature3Title: 'Auto Paste',
        feature3Desc: 'Automatically paste barcode into the active field on computer',
        feature4Title: 'High Quality',
        feature4Desc: 'Support for high resolutions up to 4K for better scanning',
        feature5Title: 'Multiple Types',
        feature5Desc: 'Support for all barcode types including linear barcodes',
        feature6Title: 'Secure & Protected',
        feature6Desc: 'Complete protection for your data with advanced encryption',
        downloadTitle: 'Download Now',
        downloadSubtitle: 'Available on all platforms',
        androidDesc: 'Available on Google Play',
        windowsDesc: 'Available for PC',
        downloadAndroid: 'Download for Android',
        downloadWindows: 'Download for Windows',
        free: 'Free',
        stat1: 'Active Users',
        stat2: 'Barcodes Scanned',
        stat3: '% Scan Accuracy',
        stat4: 'Hour Support',
        footerDesc: 'Advanced barcode scanner app for phones and computers',
        footerQuickLinks: 'Quick Links',
        footerInfo: 'Information',
        footerContact: 'Contact',
        footerRights: 'All rights reserved.',
        footerDev: 'Powered by',
        // Privacy Page
        privacyTitle: 'Privacy Policy',
        privacyLastUpdate: 'Last updated: January 2025',
        privacyIntro: 'Introduction',
        privacyIntroText: 'At Counta Scanner, we are committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect your information when you use our app.',
        privacyDataCollected: 'Data We Collect',
        privacyDataCollectedText: 'We collect the following types of data:',
        privacyAccountInfo: 'Account Information:',
        privacyAccountInfoText: 'Name, email, and password when creating an account',
        privacyDeviceId: 'Device ID:',
        privacyDeviceIdText: 'A unique identifier for your device to ensure security and connection',
        privacyUsageData: 'Usage Data:',
        privacyUsageDataText: 'Information about how you use the app',
        privacyBarcodes: 'Barcodes:',
        privacyBarcodesText: 'Barcodes you scan (stored locally only)',
        privacyHowWeUse: 'How We Use Your Data',
        privacyHowWeUseText: 'We use the data we collect for the following purposes:',
        privacyProvideService: 'Providing and improving app services',
        privacySecurity: 'Ensuring the security of your account and data',
        privacyConnection: 'Connecting your phone and computer',
        privacyNotifications: 'Sending important app notifications',
        privacyAnalytics: 'Analyzing app usage to improve performance',
        privacyProtection: 'Data Protection',
        privacyProtectionText: 'We use advanced encryption technologies to protect your data. All data transmitted between the app and servers is encrypted using standard security protocols.',
        privacySharing: 'Data Sharing',
        privacySharingText: 'We do not sell or rent your personal data to third parties. We may share your data only in the following cases:',
        privacyLegal: 'When legally required or requested by competent authorities',
        privacyProviders: 'With trusted service providers who help us operate the app',
        privacyRights: 'To protect our legal rights',
        privacyYourRights: 'Your Rights',
        privacyYourRightsText: 'You have the right to:',
        privacyAccess: 'Access your personal data',
        privacyCorrect: 'Correct any inaccurate data',
        privacyDelete: 'Delete your account and data',
        privacyRefuse: 'Refuse collection of certain data',
        privacyCookies: 'Cookies',
        privacyCookiesText: 'We may use cookies to improve your experience. You can disable cookies from your browser settings.',
        privacyChanges: 'Changes to Privacy Policy',
        privacyChangesText: 'We may update this privacy policy from time to time. We will notify you of any significant changes via the app or email.',
        privacyContactUs: 'Contact Us',
        privacyContactUsText: 'If you have any questions about the privacy policy, you can contact us via:',
        // About Page
        aboutTitle: 'About Us',
        aboutSubtitle: 'Meet the Counta Scanner team',
        aboutIntro: 'About Counta Scanner',
        aboutIntroText: 'Counta Scanner is an advanced barcode scanning app developed to seamlessly and efficiently connect smartphones with computers. Our goal is to provide a simple and fast solution for scanning barcodes and transferring data directly to the computer.',
        aboutVision: 'Our Vision',
        aboutVisionText: 'We believe that technology should be simple and easy to use. We strive to make the process of scanning barcodes and transferring data between devices easy and straightforward without complications.',
        aboutMission: 'Our Mission',
        aboutMissionText: 'Our mission is to provide the best possible user experience through:',
        aboutInnovative: 'Developing innovative and easy-to-use solutions',
        aboutSecurity: 'Ensuring security and privacy of user data',
        aboutSupport: 'Providing excellent technical support',
        aboutImprove: 'Continuously improving the app based on user feedback',
        aboutDeveloper: 'Developer',
        aboutDeveloperText: 'Counta Scanner was developed by',
        aboutDeveloperName: 'Counta',
        aboutDeveloperDesc: 'A team specialized in developing mobile apps and desktop applications.',
        aboutMoreInfo: 'For more information or contact:',
        aboutFacebook: 'Facebook:',
        aboutWhatsApp: 'WhatsApp:',
        aboutEmail: 'Email:',
        aboutWhy: 'Why Counta Scanner?',
        aboutWhyText: 'What makes Counta Scanner different from other apps:',
        aboutWhy1: 'High accuracy in barcode scanning thanks to ML Kit technology',
        aboutWhy2: 'Direct connection between phone and computer',
        aboutWhy3: 'Support for high resolutions up to 4K',
        aboutWhy4: 'Modern and easy user interface',
        aboutWhy5: 'High security to protect your data',
        aboutWhy6: 'Full support for Arabic language',
        // Contact Page
        contactTitle: 'Contact Us',
        contactSubtitle: 'We are here to help you',
        contactInfo: 'Contact Information',
        contactInfoText: 'We are happy to hear from you! You can contact us through any of the following methods:',
        contactWhatsApp: 'WhatsApp',
        contactPhone: 'Phone',
        contactEmail: 'Email',
        contactFacebook: 'Facebook',
        contactSendMessage: 'Send us a message',
        contactName: 'Name *',
        contactEmailLabel: 'Email *',
        contactSubject: 'Subject *',
        contactMessage: 'Message *',
        contactSend: 'Send Message',
        contactSending: 'Sending...',
        contactWorkHours: 'Working Hours',
        contactWorkHoursText: 'We are available to respond to your inquiries during the following times:',
        contactWeekdays: 'Sunday - Thursday:',
        contactWeekdaysTime: '9:00 AM - 6:00 PM',
        contactWeekend: 'Friday - Saturday:',
        contactWeekendTime: 'Available via email',
        contactNote: 'Note: Email responses may take 24-48 hours.',
        // Windows Download Modal
        windowsDownloadTitle: 'Download Counta Scanner for Windows',
        step1Title: 'Install Python',
        step1Desc: 'Python is required to run Counta Scanner. Download and install Python 3.8 or higher.',
        downloadPython: 'Download Python',
        installationInstructions: 'Installation Instructions:',
        pythonStep1: 'Download Python from the official website',
        pythonStep2: 'Run the installer and check "Add Python to PATH"',
        pythonStep3: 'Click "Install Now" and wait for installation to complete',
        pythonStep4: 'Restart your computer after installation',
        step2Title: 'Download Application',
        step2Desc: 'Download the Counta Scanner application installer for Windows.',
        downloadApplication: 'Download Application',
        appInfo: 'File size: ~150 MB | Compatible with Windows 8, 8.1, 10, and 11',
        step3Title: 'Install Requirements',
        step3Desc: 'After installing the application, download and run the requirements installer to set up all necessary dependencies.',
        downloadRequirements: 'Download Requirements Installer',
        requirementsInfo: 'Run this installer after installing the main application'
    }
};

let currentLang = localStorage.getItem('language') || 'en';
let isDarkMode = localStorage.getItem('theme') === 'dark';

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
function setupNavLinks() {
    navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate numbers
const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target.toLocaleString();
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
};

// Initialize animations
animateNumbers();

// Download buttons
const androidDownload = document.getElementById('androidDownload');
const windowsDownload = document.getElementById('windowsDownload');

if (androidDownload) {
    androidDownload.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual Android APK download link
        // For now, you can use Google Play Store link or direct APK download
        const downloadUrl = 'https://play.google.com/store/apps/details?id=com.barcodescanner.app';
        window.open(downloadUrl, '_blank');
    });
}

if (windowsDownload) {
    windowsDownload.addEventListener('click', (e) => {
        e.preventDefault();
        // Open Windows download modal
        const modal = document.getElementById('windowsDownloadModal');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
}

// Modal functionality
const modal = document.getElementById('windowsDownloadModal');
const closeModal = document.getElementById('closeModal');
const downloadAppBtn = document.getElementById('downloadAppBtn');
const downloadRequirementsBtn = document.getElementById('downloadRequirementsBtn');

if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Download app button
if (downloadAppBtn) {
    downloadAppBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual Windows installer download link
        const downloadUrl = '#'; // Add your Windows installer URL here
        if (downloadUrl !== '#') {
            window.open(downloadUrl, '_blank');
        } else {
            alert(currentLang === 'ar' ? 'رابط التحميل سيتم إضافته قريباً' : 'Download link will be added soon');
        }
    });
}

// Download requirements button
if (downloadRequirementsBtn) {
    downloadRequirementsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual requirements installer download link
        const downloadUrl = '#'; // Add your requirements installer URL here
        if (downloadUrl !== '#') {
            window.open(downloadUrl, '_blank');
        } else {
            alert(currentLang === 'ar' ? 'رابط التحميل سيتم إضافته قريباً' : 'Download link will be added soon');
        }
    });
}


// Language Toggle
function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Apply translations to all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            const translation = translations[currentLang][key];
            
            // Check if element has child elements (like <strong>, <span>, etc.)
            const hasChildren = element.children.length > 0;
            const hasTextNodes = Array.from(element.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            
            if (hasChildren && hasTextNodes) {
                // Element has both children and text - replace only text nodes
                Array.from(element.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = translation;
                    }
                });
            } else if (hasChildren && !hasTextNodes) {
                // Element has only children, no direct text - skip (children have their own data-i18n)
                // Do nothing, children will be translated separately
            } else {
                // Element has no children, just replace text content
                element.textContent = translation;
            }
        }
    });
    
    // Update language label
    const langLabels = document.querySelectorAll('#langLabel');
    langLabels.forEach(label => {
        label.textContent = currentLang.toUpperCase();
    });
    
    // Re-setup nav links after translation
    setupNavLinks();
}

// Setup language toggle for all pages
const langToggles = document.querySelectorAll('#langToggle');
langToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('language', currentLang);
        applyTranslations();
    });
});

// Theme Toggle
function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const themeIcons = document.querySelectorAll('#themeIcon');
        themeIcons.forEach(icon => {
            icon.className = 'fas fa-sun';
        });
    } else {
        document.body.classList.remove('dark-mode');
        const themeIcons = document.querySelectorAll('#themeIcon');
        themeIcons.forEach(icon => {
            icon.className = 'fas fa-moon';
        });
    }
}

// Setup theme toggle for all pages
const themeToggles = document.querySelectorAll('#themeToggle');
themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        applyTheme();
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupNavLinks();
    applyTranslations();
    applyTheme();
    
    // Re-apply translations after a short delay to ensure all elements are loaded
    setTimeout(() => {
        applyTranslations();
        setupNavLinks();
    }, 100);
    
    // Re-apply after another delay for dynamic content
    setTimeout(() => {
        applyTranslations();
    }, 500);
});

// Also apply on window load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setupNavLinks();
    applyTranslations();
    applyTheme();
});

