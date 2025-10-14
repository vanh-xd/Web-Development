const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const resultSpan = document.getElementById('result');
const solveButton = document.getElementById('solveBtn');
const clearButton = document.getElementById('clearBtn');

function solveQuadraticEquation() 
{
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    

    if (a === 0) {
        if (b === 0) {
            resultSpan.textContent = (c === 0) ? 'Phương trình vô số nghiệm' : 'Phương trình vô nghiệm';
        } else {
            const x = -c / b;
            resultSpan.textContent = `x = ${x}`;
        }
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultSpan.textContent = `x1=${Number(x1.toFixed(4))} ; x2=${Number(x2.toFixed(4))}`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultSpan.textContent = `x1 = x2 = ${Number(x.toFixed(4))}`;
    } else {
        resultSpan.textContent = 'Phương trình vô nghiệm thực';
    }
}

function clearFields() {
    inputA.value = '';
    inputB.value = '';
    inputC.value = '';
    resultSpan.textContent = '';
}

solveButton.addEventListener('click', solveQuadraticEquation);
clearButton.addEventListener('click', clearFields);