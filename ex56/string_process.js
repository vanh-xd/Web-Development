function getInputText() {
    return document.getElementById('ta_input').value;
}

function showResult(text) {
    document.getElementById('ta_result').value = text;
}

function enter_data() {
    const input = getInputText();
    showResult(input);
}

function uppercase() {
    const input = getInputText();
    showResult(input.toUpperCase());
}

function lowercase() {
    const input = getInputText();
    showResult(input.toLowerCase());
}

function count_lowercase() {
    const input = getInputText();
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 'a' && input[i] <= 'z') {
            count++;
        }
    }
    showResult(`Number of lowercase characters: ${count}`);
}

function count_uppercase() {
    const input = getInputText();
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 'A' && input[i] <= 'Z') {
            count++;
        }
    }
    showResult(`Number of uppercase characters: ${count}`);
}

function one_word_per_line() {
    const input = getInputText();
    const words = input.trim().split(/\s+/);
    showResult(words.join('\n'));
}

function word_count() {
    const input = getInputText();
    if (input.trim() === '') {
        showResult("Word count: 0");
        return;
    }
    const words = input.trim().split(/\s+/);
    showResult(`Word count: ${words.length}`);
}

function print_vow_cons() {
    const input = getInputText();
    const vowelsList = "aeiouAEIOU";
    let vowels = '';
    let consonants = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            if (vowelsList.includes(char)) {
                vowels += char + ' ';
            } else {
                consonants += char + ' ';
            }
        }
    }
    const result = `Vowels: ${vowels.trim()}\n\nConsonants: ${consonants.trim()}`;
    showResult(result);
}

function process() {
    window.open('https://www.w3.org/', '_blank');
}