import Article from './article.model';
import { data } from '../seed';

export default class ArticleData {
    getData() {
        let articles: Article[];

        articles =
            data.map(d => new Article(d.title, d.description, d.author, d.imageUrl));
        return articles
    }
}