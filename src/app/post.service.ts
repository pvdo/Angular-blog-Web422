import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {BlogPost} from './BlogPost';

const perPage = 6;
const allPostsValue = Number.MAX_SAFE_INTEGER;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]>  {
    return this.http.get<BlogPost[]>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts?page=${page}&perPage=${perPage}` 
                                      + (tag? `&tag=${tag}` : '') 
                                      + (category? `&category=${category}` : ''));
  }

  getAllPosts(): Observable<BlogPost[]>  {
    return this.http.get<BlogPost[]>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts?page=1&perPage=${allPostsValue}`);
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any[]>(`https://enigmatic-refuge-29950.herokuapp.com/api/categories`);
  }
  
  getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://enigmatic-refuge-29950.herokuapp.com/api/tags`);
  }
  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`https://enigmatic-refuge-29950.herokuapp.com/api/posts/${id}`);
  }
  
}
