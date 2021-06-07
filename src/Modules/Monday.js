class Monday {
    media
    media_data = {
        0: 'https://i.imgur.com/sareEUE.mp4',
        1: 'https://i.imgur.com/fbz02Ge.mp4'
    }

    constructor() {
        const whichMedia = Math.round(Math.random())
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Monday