let seleccion = document.querySelectorAll('.valores');
console.log(seleccion[0])

seleccion.forEach((selector) => {
    selector.addEventListener('change', (e) => {
        let idioma = e.target.value;
        let pagina = e.target.name;
        console.log(idioma);
        console.log(pagina);
        console.log(`${pagina}${idioma}.html`);

        switch (idioma) {
            case '-sp':
                window.location.assign(`${pagina}-sp.html`);
                break;
            case 'en':
                window.location.assign(`${pagina}.html`);
                break;
            // case '3':
            //     window.location.assign('academy-sp.html');
            //     break;
            // case '4':
            //     window.location.assign('academy-en.html');
            //     break;
            // case '5':
            //     window.location.assign('planformSP.html');
            //     break;
            // case '6':
            //     window.location.assign('planform.html');
            //     break;
            // case '7':
            //     window.location.assign('loginSP.html');
            //     break;
            // case '8':
            //     window.location.assign('login.html');
            //     break;
            default:
                console.log(idioma);
                window.location.assign('#');
        }
    });
});