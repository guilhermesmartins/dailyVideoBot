class Saturday {
    media
    media_data = {
        0: 'https://i.imgur.com/M4F0153.png',
        1: 'https://i.imgur.com/g1OOfKD.jpg'
    }

    constructor() {
        const whichMedia = Math.round(Math.random())
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Saturday