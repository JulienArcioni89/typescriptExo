"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
// Créer une fonction getUsers qui retourne un tableau d'objets User
function getUsers() {
    return data_1.users;
}
// Créer une fonction getPostOfAuthor qui retourne un tableau de Post
function getPostOfAuthor(id) {
    return data_1.posts.filter(post => post.userId === id);
}
// Créer une fonction qui permet de valider les propriétés d'un objet Post
function validatePost(post) {
    return post.userId !== undefined && post.id !== undefined && post.title !== undefined && post.body !== undefined;
}
// Créer une fonction populatePostsWithComments pour ajouter la propriété comments à un objet Post
function populatePostsWithComments(post) {
    return Object.assign(Object.assign({}, post), { comments: data_1.comments.filter(comment => comment.postId === post.id) });
}
// Installer et importer axios
const axios_1 = __importDefault(require("axios"));
// Créer une class ApiService qui a une propriété url et les methodes suivantes:
// getAllpost qui retourne un tableau de post et qui utilise la propiété url
// createPost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un post retourne une promesse d'un post
// updatePost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un id, un post partiel retourne une promesse d'un post
// deletePost qui utilise axios et la propiété url, qui prend en argument un id et retourne une promesse d'une string
class ApiService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com';
    }
    getAllPost() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${this.url}/posts`);
            return response.data;
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            if (validatePost(post)) {
                const response = yield axios_1.default.post(`${this.url}/posts`, post);
                return response.data;
            }
            throw new Error('Invalid post');
        });
    }
    updatePost(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            if (validatePost(post)) {
                const response = yield axios_1.default.put(`${this.url}/posts/${id}`, post);
                return response.data;
            }
            throw new Error('Invalid post');
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(`${this.url}/posts/${id}`);
            return response.data;
        });
    }
}
