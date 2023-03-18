import { posts, users, comments } from './data';

//Créer une Interface Post correspondant à la structure des objects du fichier posts.ts
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

//Créer une Interface Comment correspondant à la structure des objects du fichier comments.ts
interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

// Créer une Interface User correspondant à la structure des objects du fichier users.ts
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

// Créer une Type Company correspondant à la structure de la propriété company du fichier users.ts
type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Créer une type Address correspondant à la structure de la propriété address du fichier users.ts
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

// Créer une type Geo correspondant à la structure de la propriété geo du fichier users.ts
type Geo = {
    lat: string;
    lng: string;
}

// Créer une fonction getUsers qui retourne un tableau d'objets User
function getUsers(): User[] {
    return users;
}

// Créer une fonction getPostOfAuthor qui retourne un tableau de Post
function getPostOfAuthor(id: number): ({ id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number } | { id: number; title: string; body: string; userId: number })[] {
    return posts.filter(post => post.userId === id);
}

// Créer une fonction qui permet de valider les propriétés d'un objet Post
function validatePost(post: Partial<Post>): boolean {
    return post.userId !== undefined && post.id !== undefined && post.title !== undefined && post.body !== undefined;
}

// étendre l'interface Post et ajoute une propriété comments de type Comment[]
interface Post {
    comments: Comment[];
}

// Créer une fonction populatePostsWithComments pour ajouter la propriété comments à un objet Post
function populatePostsWithComments(post: Post): Post {
    return {
        ...post,
        comments: comments.filter(comment => comment.postId === post.id)
    }
}

// Installer et importer axios
import axios from 'axios';

// Créer une class ApiService qui a une propriété url et les methodes suivantes:
// getAllpost qui retourne un tableau de post et qui utilise la propiété url
// createPost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un post retourne une promesse d'un post
// updatePost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un id, un post partiel retourne une promesse d'un post
// deletePost qui utilise axios et la propiété url, qui prend en argument un id et retourne une promesse d'une string
class ApiService {
    url = 'https://jsonplaceholder.typicode.com';

    async getAllPost(): Promise<Post[]> {
        const response = await axios.get(`${this.url}/posts`);
        return response.data;
    }

    async createPost(post: Post): Promise<Post> {
        if (validatePost(post)) {
            const response = await axios.post(`${this.url}/posts`, post);
            return response.data;
        }
        throw new Error('Invalid post');
    }

    async updatePost(id: number, post: Partial<Post>): Promise<Post> {
        if (validatePost(post)) {
            const response = await axios.put(`${this.url}/posts/${id}`, post);
            return response.data;
        }
        throw new Error('Invalid post');
    }

    async deletePost(id: number): Promise<string> {
        const response = await axios.delete(`${this.url}/posts/${id}`);
        return response.data;
    }
}