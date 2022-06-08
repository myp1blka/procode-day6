
const run = () => {
    console.log('abc');
}

const el = document.querySelector('div');
el.addEventListener('event', run);

setTimeout(() => {
    console.log('fff');
}, 5000);

const test = () => {
    const a = 10;
    const b = 20;
    const sum = a+b;

    run();

    console.log(sum);

    const a1 = 10;
    const b1 = 20;
    const sum1 = a1+b1;

    run();

    console.log(sum1);


}






