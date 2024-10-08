export class Character {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
    origin: string;

    constructor (
        id: number,
        name: string,
        gender: string,
        status: string,
        species: string,
        image: string,
        origin: string,
    ) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.species = species;
        this.image = image;
        this.origin = origin
    }
}
