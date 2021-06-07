class Friday {
    media
    media_data = {
        0: 'https://i.imgur.com/0tnKAik.mp4',
        1: 'https://i.imgur.com/Ts2WXeY.mp4',
        2: 'https://i.imgur.com/81wmYQ1.mp4'
    }

    constructor() {
        const whichMedia = Math.floor(Math.random() * 3)

        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Friday