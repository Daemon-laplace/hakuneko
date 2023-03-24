import WordPressMadara from './templates/WordPressMadara.mjs';

export default class VoirComic extends WordPressMadara {

    constructor() {
        super();
        super.id = 'voir-comic';
        super.label = 'Voir-Comic';
        this.tags = [ 'manga', 'webtoon', 'french' ];
        this.url = 'https://voircomic.com/';
    }
}