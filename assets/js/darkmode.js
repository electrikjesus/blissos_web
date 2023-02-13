const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    localStorage.setItem('color-theme', 'dark');
} else {
    localStorage.setItem('color-theme', 'light');
    themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
});


const dlCard = document.getElementsByClassName("opt");
    for (let element of dlCard) {
        element.addEventListener('click', function () {
            if(element.classList.contains('close')) {
                element.classList.remove('close');
                element.classList.add('open')
                for(let elm of dlCard) {
                    if (elm !== element && elm.classList.contains('open')) {
                        elm.classList.remove('open');
                        elm.classList.add('close');
                    }
                }
            }
        })
    }