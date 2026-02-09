document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');

    btnOpen.addEventListener('click', () => {
        envelope.classList.add('open');
        envelope.classList.remove('close');
    });

    btnReset.addEventListener('click', () => {
        envelope.classList.add('close');
        envelope.classList.remove('open');
    });
});