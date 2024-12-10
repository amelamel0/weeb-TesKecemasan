document.getElementById('depression-test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    let score = 0;

    // Menghitung nilai berdasarkan pilihan
    for (let i = 1; i <= 20; i++) { // Menggunakan 1 sampai 20 untuk 20 pertanyaan
        const selectedAnswer = formElements[`q${i}`]; // Mendapatkan elemen berdasarkan name 'q1', 'q2', ... 'q20'

        if (selectedAnswer) {
            // Pastikan ada jawaban yang dipilih
            for (let j = 0; j < selectedAnswer.length; j++) {
                if (selectedAnswer[j].checked) {
                    // Menambahkan nilai berdasarkan pilihan yang dipilih
                    const value = selectedAnswer[j].value;
                    if (value === 'Selalu') score += 4;
                    else if (value === 'Sering') score += 3;
                    else if (value === 'Kadang-kadang') score += 2;
                    else if (value === 'Tidak Pernah') score += 1;
                    break; // Keluar setelah menemukan pilihan yang dipilih
                }
            }
        }
    }

     // Menentukan hasil berdasarkan skor
    let resultMessage = '';
    if (score <= 15) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala kecemasan yang signifikan. Kecemasan ini adalah respons normal terhadap situasi sehari-hari, seperti menghadapi ujian atau presentasi. Gejalanya termasuk peningkatan kewaspadaan dan perhatian, tetapi individu masih mampu menyelesaikan masalah dengan baik.';
    } else if (score <= 40) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan kecemasan. Kecemasan sedang ditandai dengan penurunan kemampuan dalam memusatkan perhatian dan menyelesaikan tugas. Penderita mungkin merasa mudah tersinggung, tidak sabar, serta mengalami gejala fisik seperti berkeringat atau ketegangan otot.';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala kecemasan yang lebih serius. Kecemasan berat mengganggu fungsi sehari-hari secara signifikan. Individu akan terfokus pada satu hal tertentu, mengalami kesulitan berpikir, menarik diri dari interaksi sosial, dan menunjukkan gejala fisik yang lebih parah seperti gemetar dan perasaan bingung. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    // Menampilkan hasil tes di halaman
    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});

