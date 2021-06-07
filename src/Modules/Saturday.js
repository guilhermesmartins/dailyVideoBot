class Saturday {
    media
    media_data = {
        0: '../../static/img/alone_saturday_night.png',
        1: '../../static/img/alone_saturday_night_cosplay.jpg'
    }

    constructor() {
        whichMedia = Math.round(Math.random())
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}