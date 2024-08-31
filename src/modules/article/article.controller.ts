import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from 'src/core/schemas/article.schema';

@Controller('article')
export class ArticleController {
    constructor(private _articleService: ArticleService){}
    getAllArticles() {
        return this._articleService.getAllArticles();
    }
    getArticleById(_id) {
        return this._articleService.getArticleById(_id);
    }
    createArticle(article: Article) {
        return this._articleService.createArticle(article);
    }
    updateArticle(_id, updatedArticle: Article) {
        return this._articleService.updateArticle(_id, updatedArticle);
    }
    deleteArticle(_id) {
        return this._articleService.deleteArticle(_id);
    }

}
