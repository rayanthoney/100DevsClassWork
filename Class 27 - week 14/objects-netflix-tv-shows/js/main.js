//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(name, eps, duration, releaseDate) {
    this.name = name;
    this.eps = eps;
    this.duration = duration;
    this.releaseDate = releaseDate;
  }

  getTitle() {
    return `${this.name}`;
  }

  totalEpisodes() {
    return this.eps;
  }

  whenDoesItReleaseDate() {
    return this.releaseDate;
  }
}

const test = new NetflixShow('anime', 12, '24mins', '04/13/2022');

console.log(test);
