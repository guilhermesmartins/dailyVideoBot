class Saturday {
    media
    media_data = [
        'https://i.imgur.com/M4F0153.png',
        'https://i.imgur.com/g1OOfKD.jpg'
    ]

    constructor() {
        const whichMedia = Math.round(Math.random() * this.media_data.length)
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Saturday