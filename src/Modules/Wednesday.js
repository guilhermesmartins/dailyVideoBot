class Wednesday {
    media;
    media_data = [
        'https://i.imgur.com/iefnQbl.mp4',
        'https://i.imgur.com/myJX5iV.jpg',
        'https://i.imgur.com/9TK3EyW.mp4'
    ]

    constructor() {
        const whichMedia = Math.round(Math.random() * this.media_data.length)
        
        this.media = this.media_data[whichMedia]
    }

    getMedia() {
        return this.media;
    }
}

module.exports = Wednesday