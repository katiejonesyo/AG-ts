
export type Classes = 'wizard' | 'elf' | 'druid' | 'rogue' | ''

export interface QuestsCompleted { 
    dragon?: boolean,
    monsters?: boolean,
    treasure?: boolean
}

export interface User {
    name: string,
    class: Classes,
    hp: number,
    gold: number,
    completed: QuestsCompleted
}

export interface Choice {
    id: string,
    description: string,
    result: string,
    hp: number,
    gold: number
}

export interface Quest {
    id: string,
    title: string,
    map: {
        top: string,
        left: string
    },
    image: string,
    description: string,
    choices: Array<Choice>
};

