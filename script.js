const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        switch (command) {
            case 'createLink':
            case 'insertImage':
                let url = prompt('Type the url:', 'https://')
                document.execCommand(command, false, url);
                break;
            case 'foreColor':
            case 'backColor':
                let hex = prompt('Type the hex of a color:', '#')
                document.execCommand(command, false, hex);
                break;
            default:
                document.execCommand(command, false, null);
                break;
        }
    });
});