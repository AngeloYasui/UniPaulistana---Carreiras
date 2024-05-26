function calculateResults() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {
        psicologia: 0,
        pedagogia: 0,
        logistica: 0,
        contabilidade: 0,
        rh: 0,
        administracao: 0,
        financas: 0
    };

    let allAnswered = true;
    for (let i = 1; i <= 10; i++) {
        const questionName = `q${i}`;
        const selectedOption = formData.get(questionName);
        if (!selectedOption) {
            allAnswered = false;
            break;
        } else if (selectedOption !== 'nao') {
            answers[selectedOption]++;
        }
    }

    if (!allAnswered) {
        document.getElementById('results').textContent = 'Por favor, responda todas as perguntas.';
        return;
    }

    // Encontra a área com a pontuação mais alta
    const result = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

    let resultText = '';
    switch(result) {
        case 'psicologia':
            resultText = 'Você é mais apto a seguir Psicologia!';
            break;
        case 'pedagogia':
            resultText = 'Você é mais apto a seguir Pedagogia!';
            break;
        case 'logistica':
            resultText = 'Você é mais apto a seguir Logística!';
            break;
        case 'contabilidade':
            resultText = 'Você é mais apto a seguir Contabilidade!';
            break;
        case 'rh':
            resultText = 'Você é mais apto a seguir Recursos Humanos (RH)!';
            break;
        case 'administracao':
            resultText = 'Você é mais apto a seguir Administração!';
            break;
        case 'financas':
            resultText = 'Você é mais apto a seguir Finanças!';
            break;
        default:
            resultText = 'Por favor, responda todas as perguntas.';
            break;
    }

    document.getElementById('results').textContent = resultText;
}
