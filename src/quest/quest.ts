import { findById } from '../utils';
import quests from '../data';
import { updateUserGivenChoice, getUser } from '../local-storage-utils';


import { renderHeader } from '../render-utils';
import { QuestsCompleted, Choice } from '../types';

renderHeader();


const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id') as keyof QuestsCompleted;
const quest = findById(quests, questId);

const image = document.createElement('img');
const h2 = document.createElement('h2');

image.src = `../assets/quests/${quest.image}`;

h2.textContent = quest.title;


const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const formData = new FormData(form);
    const choiceId = formData.get('choice') as string;

    const choice = findById(quest.choices, choiceId) as Choice;
    updateUserGivenChoice(questId, choice);

    // alert(JSON.stringify(getUser(), true, 2));

    window.location.href = '../map';
});


section.append(h2, image, form);


