function calculateResults() {
    const form = document.getElementById('quiz-form');
    const results = document.getElementById('results');
    
    const responses = {
        psicologia: 0,
        financeiro: 0,
        pedagogia: 0,
        rh: 0,
        administracao: 0,
        logistica: 0,
        comunicacao: 0,
        engenharia: 0,
        gestaoFiscalTributaria: 0,
        contabilidade: 0
    };
    
    for (let i = 1; i <= 10; i++) {
        const value = form[`q${i}`].value;
        if (value && responses.hasOwnProperty(value)) {
            responses[value]++;
        }
    }
    
    const maxResponses = Math.max(
        responses.psicologia,
        responses.financeiro,
        responses.pedagogia,
        responses.rh,
        responses.administracao,
        responses.logistica,
        responses.comunicacao,
        responses.engenharia,
        responses.gestaoFiscalTributaria,
        responses.contabilidade
    );
    
    let message = 'Com base nas suas respostas, sugerimos a seguinte área de carreira:';
    
    for (const area in responses) {
        if (responses[area] === maxResponses) {
            message += `\n- ${capitalizeFirstLetter(area)}`;
            break;  // Apenas um curso será sugerido
        }
    }
    
    results.textContent = message;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
