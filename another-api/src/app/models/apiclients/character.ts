export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string, url: string };
  location: { name: string, url: string };
  image: string;
  episode: string[];
  url: string;
  created: Date;

  constructor(
      id: number, name: string, status: string, species: string, type: string, gender: string,
      origin: { name: string, url: string }, location: { name: string, url: string }, image: string,
      episode: string[], url: string, created: Date
  ) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.species = species;
      this.type = type;
      this.gender = gender;
      this.origin = origin;
      this.location = location;
      this.image = image;
      this.episode = episode;
      this.url = url;
      this.created = created;
  }
}
