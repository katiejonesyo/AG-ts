import { 
    User, 
    QuestsCompleted, 
    Choice,
    Quest
 } from './types';
 import quests  from './data';

const USER = 'USER';

const initialUser : User = {
    name: '',
    class: '',
    hp: 0,
    gold: 0,
    completed: {}
};

export function getUser() : User {
    const user = localStorage.getItem(USER);

    if (!user) return initialUser;

    return JSON.parse(user);
}

export function setUser(user : User) : void {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function updateUserGivenChoice(questId : keyof QuestsCompleted, choice : Choice) {
    // get user
    const user : User = getUser();

    // we need to change hp
    user.hp += choice.hp;

    // we need to change gold
    user.gold += choice.gold;

    // we need to change completed
    // we don't know ahead of time which quest is completed
    // that's why we use dynamic bracket notation
    user.completed[questId] = true;

    setUser(user);
}

export function areAllQuestsCompleted() : boolean {
    const user = getUser();
   // if any item in the quest data is not ALSO in my character's completed object, allQuests are not complete
    for (let quest of quests) {
        // if the user hasn't completed this quest, break out of the function with false
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;
}

