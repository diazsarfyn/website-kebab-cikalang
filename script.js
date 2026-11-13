// Inisialisasi setelah dokumen HTML siap dimuat
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.arfyn_nav_link');

    // Fungsi Toggle Menu Navigasi Mobile
    function toggleMenu() {
        const isOpen = navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    }

    // Event Listener Klik pada Tombol Hamburger
    hamburgerBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    // Menutup menu mobile saat salah satu link navigasi diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Menutup menu mobile jika pengguna mengklik area luar menu
    document.addEventListener('click', (event) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !hamburgerBtn.contains(event.target)) {
            toggleMenu();
        }
    });
});
