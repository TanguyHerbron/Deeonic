export class Artist {

    constructor (public id: string,
                 public name: string,
                 public link: string,
                 public share: string,
                 public picture: string,
                 public picture_small: string,
                 public picture_medium: string,
                 public picture_big: string,
                 public picture_xl: string,
                 public nb_album: number,
                 public nb_fan: number,
                 public radio: boolean,
                 public tracklist: string,
                 public type: string,
                 public position: number,
                 public nb_fan_form: string) {}
}
