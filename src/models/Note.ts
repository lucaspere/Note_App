import { v4 as uuid } from 'uuid';
export interface INote {
    id: string;
    title: string;
    description: string;
}

export class Note implements INote {
    constructor(title: string, description: string, id?: string) {
        Object.defineProperties(this, {
            id: {
                enumerable: true,
                configurable: true,
                value: id ? id : uuid(),
                writable: false,
            },
            title: {
                enumerable: true,
                configurable: true,
                value: title,
                writable: true,
            },
            description: {
                enumerable: true,
                configurable: true,
                value: description,
                writable: true,
            },
        });
    }

    get id(): string {
        return this.id;
    }

    get title(): string {
        return this.title;
    }

    set title(title: string) {
        this.title = title;
    }

    get description(): string {
        return this.description;
    }

    set description(description: string) {
        this.description = description;
    }

    static from_JSON(json: string): Note {
        const note = JSON.parse(json);

        return new Note(note.title, note.description, note.id);
    }

    equals(other: Note): boolean {
        return (
            this.id === other.id ||
            this.title === other.description ||
            this.description === other.description
        );
    }

    to_JSON(): string {
        return JSON.stringify(this);
    }
}
