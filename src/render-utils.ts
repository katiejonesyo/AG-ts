
import { getUser } from './local-storage-utils';

export function renderHeader() : void {
    // grab the header from the DOM
    const header : HTMLElement = document.querySelector('header');
    // grab the user from local storage
    const user = getUser();
    // make a div
    const div : HTMLDivElement = document.createElement('div');
    // put info in the div
    div.textContent = `name: ${user.name}, class: ${user.class}, HP: ${user.hp}, gold: ${user.gold}`;
    // append that div to the header in the DOM
    header.append(div);
}

