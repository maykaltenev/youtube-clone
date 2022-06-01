
const theme = () => {
    const checkbox = document.querySelector("#light-dark").checked;
    const nav = document.querySelector('nav');
    const aside = document.querySelector('.aside-bar')
    const linkAside = document.querySelectorAll('.aside-bar div li a')
    const menuBar = document.querySelector('.menu-bar');
    const menuBarLinks = document.querySelectorAll('.menu-bar ul li a')
    const main = document.querySelector('main')
    let hamburgerDiv = document.querySelectorAll('.hamburger div')
    console.log(checkbox);
    if (checkbox) {
        //  this is cool state
        main.classList.add('light');
        main.classList.remove('dark');
        menuBar.classList.add('light');
        menuBar.classList.remove('dark');
        nav.classList.add("light");
        nav.classList.remove("dark");
        aside.classList.add('light');
        aside.classList.remove('dark');
        linkAside.forEach(item => {
            item.classList.add('light'),
                item.classList.remove('dark')
        })
        hamburgerDiv.forEach(item => {
            item.classList.add('light'),
                item.classList.remove('dark')
        })
        menuBarLinks.forEach(item => {
            item.classList.add('light'),
                item.classList.remove('dark')
        })
    } else {
        main.classList.remove("light");
        main.classList.add("dark");
        nav.classList.remove("light");
        nav.classList.add("dark");
        aside.classList.remove('light');
        aside.classList.add('dark');
        linkAside.forEach(item => {
            item.classList.remove('light'),
                item.classList.add('dark')
        })
        hamburgerDiv.forEach(item => {
            item.classList.remove('light'),
                item.classList.add('dark')
        })
        menuBar.classList.remove('light');
        menuBar.classList.add('dark');
        menuBarLinks.forEach(item => {
            item.classList.remove('light'),
                item.classList.add('dark')
        })
        //  this is not so cool state
        // body.style.backgroundColor = "white";
        // body.classList.toggle("light");
        // body.classList.add("light");
        // body.classList.remove("dark");
    }
};
