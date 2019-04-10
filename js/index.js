document.querySelector('.convert').addEventListener('click', () => {
  const sourceCode = document.querySelector('.source-code').value;

  const replacement = {
    o: 'о',
    O: 'О',
    a: 'а',
    A: 'А',
    e: 'е',
    E: 'Е',
    c: 'с',
    C: 'C',
    p: 'р',
    P: 'Р',
    H: 'Н',
    M: 'М',
    K: 'K',
    x: 'х',
    X: 'Х',
    ';': '；',
    '(': '⟮',
    ')': '⟯'
  };

  const convertedCode = sourceCode
    .split('')
    .map(char => replacement[char] || char)
    .join('');

  document.querySelector('.converted-code').value = convertedCode;
});
