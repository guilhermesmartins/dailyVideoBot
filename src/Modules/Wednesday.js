class Wednesday {
    media;
    media_data = {
        0: 'https://i.imgur.com/iefnQbl.mp4',
        1: 'https://i.imgur.com/myJX5iV.jpg'
    }

    constructor() {
        const whichMedia = Math.round(Math.random())
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Wednesday