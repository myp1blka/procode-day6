
const elKnopka_start = document.querySelector('input[name="knopka_hello"]');
const elFirstName = document.querySelector('input[name="first-name"]');
const elSecondName = document.querySelector('input[name="last-name"]');
const elStatus = document.querySelector('.status')

const run = (ev) => {
    elStatus.innerHTML = '> ';
    const valueFirstName = elFirstName.value;
    const valueSecondName = elSecondName.value;
    let result = `Привіт,  ${valueFirstName} ${ valueSecondName }`;

    // почему не работает такая конструкция
    //elStatus.insertAdjacentHTML('beforeend', 'Привіт, ' , elFirstName.value, elSecondName.value);
    elStatus.insertAdjacentHTML('beforeend', result);
}

elKnopka_start.addEventListener('click', run);