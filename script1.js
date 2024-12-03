document.getElementById('depression-test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    let score = 0;

    // Menghitung nilai berdasarkan pilihan
    for (let i = 0; i < 4; i++) {
        const questionName = 'question' + (i + 1);
        const selectedAnswer = formElements[questionName].value;
        score += parseInt(selectedAnswer);
    }

    let resultMessage = '';
    if (score <= 6) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala depresi yang signifikan.';
    } else if (score <= 10) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan depresi. Cobalah berbicara dengan seorang profesional untuk evaluasi lebih lanjut';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala depresi yang lebih serius. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});
