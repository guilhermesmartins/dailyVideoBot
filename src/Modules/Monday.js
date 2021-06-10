class Monday {
    media
    media_data = [
        'https://i.imgur.com/sareEUE.mp4',
        'https://i.imgur.com/fbz02Ge.mp4'
    ]

    constructor() {
        const whichMedia = Math.round(Math.random() * this.media_data.length)
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Monday