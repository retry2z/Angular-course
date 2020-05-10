export default class Article {
    constructor(
        public title: string,
        public description: string,
        public author: string,
        public imageUrl: string,
    ) {
        this.title = title;
        this.author = author;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}