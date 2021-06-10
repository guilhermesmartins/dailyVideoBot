class Friday {
    media
    media_data = [
        'https://i.imgur.com/0tnKAik.mp4',
        'https://i.imgur.com/Ts2WXeY.mp4',
        'https://i.imgur.com/81wmYQ1.mp4'
    ]

    constructor() {
        const whichMedia = Math.floor(Math.random() * this.media_data.length)

        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Friday