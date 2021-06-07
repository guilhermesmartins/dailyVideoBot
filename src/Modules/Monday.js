class Monday {
    media
    media_data = {
        0: '../../static/videos/monday.mp4',
        1: '../../static/videos/odeio_segunda_feira.mp4'
    }

    constructor() {
        whichMedia = Math.round(Math.random())
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}