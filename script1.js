document.getElementById('depression-test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    let score = 0;

    // Menghitung nilai berdasarkan pilihan
    for (let i = 0; i < 4; i++) {
        const questionName = 'question' + (i + 1);
        const selectedAnswer = formElements[questionName] ? formElements[questionName].value : null;

        // Validasi: pastikan ada jawaban yang dipilih untuk setiap pertanyaan
        if (selectedAnswer === null || selectedAnswer === '') {
            alert(`Harap jawab pertanyaan ${i + 1}.`);
            return; // Menghentikan proses jika ada jawaban yang kosong
        }

        // Parsing nilai jawaban menjadi integer
        const answerValue = parseInt(selectedAnswer);

        // Validasi: pastikan jawaban adalah angka yang valid
        if (isNaN(answerValue)) {
            alert(`Jawaban pertanyaan ${i + 1} tidak valid.`);
            return;
        }

        score += answerValue;
    }

    // Menentukan hasil berdasarkan skor
    let resultMessage = '';
    if (score <= 6) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala kecemasan yang signifikan. Kecemasan ini adalah respons normal terhadap situasi sehari-hari, seperti menghadapi ujian atau presentasi. Gejalanya termasuk peningkatan kewaspadaan dan perhatian, tetapi individu masih mampu menyelesaikan masalah dengan baik.';
    } else if (score <= 10) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan kecemasan. Kecemasan sedang ditandai dengan penurunan kemampuan dalam memusatkan perhatian dan menyelesaikan tugas. Penderita mungkin merasa mudah tersinggung, tidak sabar, serta mengalami gejala fisik seperti berkeringat atau ketegangan otot.';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala kecemasan yang lebih serius. Kecemasan berat mengganggu fungsi sehari-hari secara signifikan. Individu akan terfokus pada satu hal tertentu, mengalami kesulitan berpikir, menarik diri dari interaksi sosial, dan menunjukkan gejala fisik yang lebih parah seperti gemetar dan perasaan bingung. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    // Menampilkan hasil tes di halaman
    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});
