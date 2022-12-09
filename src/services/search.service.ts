import {SearchDataInterface} from '../types/data.interface';

export const searchService = async (search: string): Promise<SearchDataInterface> =>
    await fetch(`https://itunes.apple.com/search?term=${search}&entity=album`)
        .then(result => result.json());