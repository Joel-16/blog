"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entity/post.entity");
let PostService = class PostService {
    constructor(article) {
        this.article = article;
    }
    async Create(postDto) {
        const result = await this.article.save({
            name: postDto.name,
            email: postDto.email,
            body: postDto.body,
            title: postDto.title
        });
        return result;
    }
    async getAll() {
        const result = await this.article.find();
        return result;
    }
    async getOne(id) {
        const result = await this.article.findOne(id);
        return result;
    }
    async Update(title, postDto) {
        const article = await this.article.findOne({ where: { title: title } });
        article.body = postDto.body;
        article.email = postDto.email;
        article.name = postDto.name;
        article.title = postDto.title;
        article.save();
        return article;
    }
    async Delete(id) {
        const resu = await this.article.delete(id);
        return "successful";
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map