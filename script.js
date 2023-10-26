const body = document.querySelector(`body`),
    sidebar = body.querySelector(`.sidebar`),
    toggle = body.querySelector(`.toggle`),
    modeSwitch = body.querySelector(`.toggle-switch`),
    modeText = body.querySelector(`.mode-text`);

toggle.addEventListener(`click`, () => {
    sidebar.classList.toggle(`close`);
})

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    modeText.innerText = 'Light Mode';
} else {
    body.classList.remove('dark');
    modeText.innerText = 'Dark Mode';
}

modeSwitch.addEventListener(`click`, () => {
    body.classList.toggle(`dark`);

    if (body.classList.contains(`dark`)) {
        modeText.innerText = `Light Mode`;
        localStorage.setItem('theme', 'dark');
    } else {
        modeText.innerText = `Dark Mode`;
        localStorage.setItem('theme', 'light');
    }
})