import quests from '../data';
import { getUser, areAllQuestsCompleted } from '../local-storage-utils';
import { renderHeader } from '../render-utils';

renderHeader();

// we need to check our end game conditions

const user = getUser();
const userIsDead = user.hp <= 0;


if (userIsDead || areAllQuestsCompleted()) {
    window.location.href = '../results';
}

const section : HTMLElement = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;
    
    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}

