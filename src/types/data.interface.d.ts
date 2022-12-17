export interface SearchDataInterface {
    resultCount?: number;
    results?: Result[];
}

export interface Result {
    wrapperType: string;
    collectionType: string;
    artistId: number,
    collectionId: number;
    amgArtistId?: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl100: string;
    collectionPrice: number;
    collectionName: string;
    collectionCensoredName: string;
    country: string;
    currency: number;
    releaseDate: string;
}