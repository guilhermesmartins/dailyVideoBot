class Wednesday {
    media;
    media_data = {
        0: '../../static/videos/wednesday.mp4'
    }

    constructor() {
        this.media = this.media_data[0]
    }

    getMedia() {
        return this.media;
    }
}