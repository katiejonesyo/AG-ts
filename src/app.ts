import { Classes } from './types'
import { setUser } from './local-storage-utils';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = String(data.get('name'));
    const userClass = data.get('class') as Classes;

    const user = {
        hp: 35,
        gold: 0,
        name: name,
        class: userClass,
        completed: {}
    };

    setUser(user);

    window.location.href = './map';
});

