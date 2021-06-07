class Friday {
    media
    media_data = {
        0: '../../static/videos/friday_yakuza.mp4',
        1: '../../static/videos/friday_vampire.mp4',
        2: '../../static/videos/sexta_dos_cria.mp4'
    }

    constructor() {
        whichMedia = Math.floor(Math.random() * 3)

        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Friday