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

    let resultMessage = '';
    if (score <= 20) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala kesehatan mental yang signifikan. Gejala kesehatan mental ini seringkali tidak terlalu mengganggu aktivitas sehari-hari, tetapi tetap perlu diperhatikan. Anda bisa mengatasinya dengan belajar meditasi dan melakukan aktivitas fisik rutin.';
    } else if (score <= 40) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan kesehatan mental. Gejala kesehatan mental sedang mulai mempengaruhi kehidupan sosial dan pekerjaan seseorang. Meliputi Gangguan tidur yang lebih serius, perasaan putus asa dan merasa tidak berharga. Anda bisa mengatasinya dengan Perawatan Mandiri Komprehensif seperti mengubah pola hidup. Cobalah berbicara dengan seorang profesional untuk evaluasi lebih lanjut.';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala kesehatan mental yang lebih serius. Kesehatan mental berat ditandai dengan gejala yang sangat mengganggu kehidupan sehari-hari dan memerlukan perhatian medis segera seperti Pikiran untuk menyakiti diri sendiri atau bunuh diri, Halusinasi atau delusi, dan Kecemasan yang parah. Anda bisa mengatasinya dengan Terapi Psikologis. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});
