function launchCelebration() {

    // Jalankan confetti

    launchConfetti();

    // Tambahkan kata-kata tambahan

    const extraMessagesDiv = document.getElementById('extra-messages');

    extraMessagesDiv.innerHTML = `

        <p>You are a true inspiration and light up the world around you.</p>

        <p>May this birthday be the start of a fantastic journey filled with success, love, and happiness!</p>

        <p>Keep smiling, keep shining, and never forget how much you are loved!</p>

    `;

    // Menampilkan kata-kata dengan transisi halus

    setTimeout(() => {

        extraMessagesDiv.style.opacity = 1;

    }, 1000);

    // Menampilkan bagian untuk menulis harapan

    const wishSection = document.querySelector('.wish-section');

    setTimeout(() => {

        wishSection.style.opacity = 1;

    }, 1500);

}

// Fungsi untuk menambahkan confetti

function launchConfetti() {

    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement('div');

        confetti.classList.add('confetti');

        document.body.appendChild(confetti);

        // Posisi dan warna acak untuk confetti

        confetti.style.left = Math.random() * 100 + 'vw';

        confetti.style.backgroundColor = getRandomColor();

        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Hapus confetti setelah animasi selesai

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// Fungsi untuk mendapatkan warna acak

function getRandomColor() {

    const colors = ['#e91e63', '#f8bbd0', '#ffeb3b', '#ff5722', '#8bc34a', '#00bcd4', '#9c27b0'];

    return colors[Math.floor(Math.random() * colors.length)];

}

// Fungsi untuk menampilkan harapan yang ditulis dan pesan tambahan

function submitWish() {

    const wishInput = document.getElementById('birthday-wish').value;

    const userWishDiv = document.getElementById('user-wish');

    if (wishInput.trim()) {

        userWishDiv.innerHTML = `

            <p>Your Wish: "${wishInput}"</p>

            <p>Harapan kamu bagus, semoga harapan yang kamu mau tercapai ya. Aku akan mendukungmu di sini dan siap membantumu jika diperlukan!</p>

        `;

        userWishDiv.style.opacity = 1;

    } else {

        userWishDiv.innerHTML = `<p>Please write a wish before submitting!</p>`;

        userWishDiv.style.opacity = 1;

    }

}
function submitWish() {

    const wishInput = document.getElementById('birthday-wish').value;

    const userWishDiv = document.getElementById('user-wish');

    if (wishInput.trim()) {

        // Kirim harapan melalui email menggunakan EmailJS

        emailjs.send("service_qno1w0r", "template_mkgn7z8", {

            wish: wishInput,

        }).then(function(response) {

            console.log('SUCCESS!', response.status, response.text);

        }, function(error) {

            console.log('FAILED...', error);

        });

        // Tampilkan harapan yang ditulis

        userWishDiv.innerHTML = `

            <p>Harapan Kamu: "${wishInput}"</p>

            <p>Harapan kamu bagus, semoga harapan yang kamu mau tercapai ya. Aku akan mendukungmu di sini dan siap membantumu jika diperlukan!</p>

        `;

        userWishDiv.style.opacity = 1;

    } else {

        userWishDiv.innerHTML = `<p>Please write a wish before submitting!</p>`;

        userWishDiv.style.opacity = 1;

    }

}
