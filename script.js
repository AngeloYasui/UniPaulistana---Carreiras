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
        finanças: 0,
        engenharia: 0,
        comunicacao: 0
    };

    formData.forEach((value, key) => {
        if (key !== 'q11') { // Ignora a pergunta das imagens
            answers[value]++;
        }
    });

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
        case 'finanças':
            resultText = 'Você é mais apto a seguir Finanças!';
            break;
        case 'engenharia':
            resultText = 'Você é mais apto a seguir Engenharia!';
            break;
        case 'comunicacao':
            resultText = 'Você é mais apto a seguir Comunicação!';
            break;
        default:
            resultText = 'Por favor, responda todas as perguntas.';
            break;
    }
    
    document.getElementById('results').textContent = resultText;
}
