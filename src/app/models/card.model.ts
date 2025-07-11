export class Card {
    id: string;
    name: string;
    color: string;
    type: string;
    manaCost: number;
    set: string;

    constructor(id: string, name: string, color: string, type: string, manaCost: number, set: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.type = type;
        this.manaCost = manaCost;
        this.set = set;
    }
}