import {Artist} from "./Artist";
import {Album} from "./Album";

export class SearchResult {

    constructor (public id: number,
                 public title: string,
                 public preview: string,
                 public artist: Artist,
                 public album: Album) {}

}
