/* ==========================================
   KODE - Main JavaScript
   ========================================== */

// Aktif navigasyon linkini işaretle
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupFaqToggle();
});

// Aktif sayfa linkini vurgula
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Basit karşılaştırma - tam URL yerine dosya adı kontrol et
        if (currentPath.includes(href) || 
            (href === 'index.html' && currentPath.endsWith('/')) ||
            (href === '/' && currentPath.endsWith('/'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// SSS açılır/kapanır özelliği
function setupFaqToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isOpen = faqItem.classList.contains('open');
            
            // Tüm FAQ öğelerini kapat
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
            });
            
            // Tıklanan öğeyi aç (kapalıysa)
            if (!isOpen) {
                faqItem.classList.add('open');
            }
        });
    });
}

// Form gönderimi (uyarı göster)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mesajınız alındı. Bu form veri saklamaz. İletişim için e-mail kullanınız.');
        contactForm.reset();
    });
}
