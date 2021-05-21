import { User } from '../types';

import { getUser } from '../local-storage-utils';
import { renderHeader } from '../render-utils';
import { 
    aliveGoldMessages, 
    deadGoldMessages,
    hpMessages,
} from './messages';

renderHeader();

const user : User = getUser();

const userIsDead : boolean = user.hp <= 0;

export interface GoldMessage {
    rich: string
    poor: string
    modest: string,
}

export interface HPMessage {
    dead: string
    frail: string
    healthy: string,
}

let goldStatus : keyof GoldMessage;

if (user.gold < 20) {
    goldStatus = 'poor';
} else if (user.gold < 50) {
    goldStatus = 'modest';
} else {
    goldStatus = 'rich';
}

let hpStatus : keyof HPMessage;

if (userIsDead) {
    hpStatus = 'dead';
} else if (user.hp < 10) {
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

// let goldMessagesToUse;

// if (userIsDead) {
//     goldMessagesToUse = deadGoldMessages;
// } else {
//     goldMessagesToUse = aliveGoldMessages;
// }

const goldMessagesToUse : GoldMessage = userIsDead 
    ? deadGoldMessages 
    : aliveGoldMessages;

const resultsString = `${goldMessagesToUse[goldStatus]}. ${hpMessages[hpStatus]}`;

const section = document.querySelector('section');

section.textContent = resultsString;

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();

    window.location.href = '../';
});

