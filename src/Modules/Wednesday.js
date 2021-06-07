class Wednesday {
    media;
    media_data = {
        0: 'https://i.imgur.com/iefnQbl.mp4'
    }

    constructor() {
        this.media = this.media_data[0]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Wednesday