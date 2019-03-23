export class Playlist {

    constructor (public id: number,
                 public title: string,
                 public nb_tracks: number,
                 public link: string,
                 public picture: string,
                 public picture_small: string,
                 public picture_medium: string,
                 public picture_big: string,
                 public picture_xl: string,
                 public checksum: string,
                 public tracklist: string,
                 public creation_date: string,
                 public type: string) {}
}
