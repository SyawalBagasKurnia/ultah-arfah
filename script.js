// Animasi untuk foto-foto
function animatePhotos() {
    const photos = document.querySelectorAll('.photo-container');
    photos.forEach((photo, index) => {
        gsap.from(photo, {
            duration: 1,
            delay: index * 0.2,
            opacity: 0,
            y: 50,
            ease: "power2.out"
        });
    });
}

// Fungsi untuk membuat confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.borderRadius = '50%';
        confettiContainer.appendChild(confetti);

        animateConfetti(confetti);
    }
}

// Fungsi untuk menganimasikan confetti
function animateConfetti(confetti) {
    gsap.to(confetti, {
        duration: Math.random() * 2 + 1,
        y: '100vh',
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        ease: "none",
        onComplete: () => {
            confetti.remove();
        }
    });
}

// Fungsi untuk mendapatkan warna random
function getRandomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Array pesan-pesan manis dengan emoji
const sweetMessages = [
    {
        title: '❤️ selamat ulang tahun yaa cayangg! ❤️',
        text: 'Semoga kita bisa terus bareng-bareng ya sayang, saling support dan saling sayang. Di tahun ini aku pengen liat kamu makin happy, makin dewasa, dan makin jadi versi terbaik dari diri kamu.',
        imageUrl: 'WhatsApp Image 2024-10-08 at 15.01.25_4a77ac13.jpg',
    },
    {
        title: '🌟 For My Special One anaknya i 🌟',
        text: 'Terima kasih udah mewarnai hidup akuu dengan cintamu eaa. Semoga tahun ini ada  lebih banyak kebahagiaan buat kita yaa cayangg!',
        imageUrl: 'WhatsApp Image 2024-10-08 at 15.01.27_dbc5a683.jpg',
    },
    {
        title: '💑 Happy Birthday My Love 💑',
        text: 'Setiap detik sama kamuu adalah anugerah. Semoga kita terus bersama selamanya yaa cantikuu!',
        imageUrl: 'WhatsApp Image 2024-10-08 at 15.01.28_ef337702.jpg',
    },
    {
        title: '💖 To My Beloved 💖',
        text: 'Hari ini adalah hari spesial kamuu, tapi bagiku setiap hari sama kamu adalah hari yang spesial!',
        imageUrl: 'WhatsApp Image 2024-10-08 at 15.01.29_36ff6063.jpg',
    },
    {
        title: '🎉 Harapan akuu 🎉',
        text: 'kamu kurang kurangin yaa ngambekan nya yaa cayangg terutama sama ortu mu, kalo sama aku mah gapapa',
        imageUrl: 'WhatsApp Image 2024-10-08 at 15.01.29_76b6a70e.jpg',
    }
];

let currentMessageIndex = 0;

// Event listener untuk tombol wish
document.getElementById('wishButton').addEventListener('click', async () => {
    const message = sweetMessages[currentMessageIndex];
    
    // Tampilkan sweet alert dengan animasi
    await Swal.fire({
        title: message.title,
        text: message.text,
        imageUrl: message.imageUrl,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: true,
        confirmButtonText: 'Baca Pesan Lainnya 💌',
        confirmButtonColor: '#ff1493',
        showCloseButton: true,
        background: 'rgba(255, 255, 255, 0.95)',
        backdrop: `rgba(255, 192, 203, 0.4)`,
        customClass: {
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            popup: 'custom-swal-popup'
        },
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    // Increment message index dengan loop
    currentMessageIndex = (currentMessageIndex + 1) % sweetMessages.length;
    
    // Jalankan efek confetti
    createConfetti();
});

// Tambahkan style untuk Sweet Alert
const style = document.createElement('style');
style.textContent = `
    .custom-swal-popup {
        border-radius: 20px !important;
        box-shadow: 0 0 20px rgba(255, 20, 147, 0.3) !important;
    }
    .custom-swal-title {
        color: #ff1493 !important;
        font-size: 1.8em !important;
        margin-bottom: 15px !important;
    }
    .custom-swal-content {
        color: #666 !important;
        font-size: 1.2em !important;
        line-height: 1.6 !important;
    }
    .swal2-image {
        border-radius: 10px !important;
        margin: 20px auto !important;
        box-shadow: 0 0 10px rgba(0,0,0,0.1) !important;
    }
`;
document.head.appendChild(style);

// Jalankan animasi foto saat halaman dimuat
window.addEventListener('load', animatePhotos);