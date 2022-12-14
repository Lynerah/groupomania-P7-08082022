import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { IntranetPost } from '../models/intranet-post.model';

@Injectable({
  providedIn: 'root'
})
export class IntranetPostService {

  constructor(private http: HttpClient) {}

  intranetPostId(id: number) {
    throw new Error('Method not implemented.');
  }



  // intranetPosts: IntranetPost[] = [
    // {
    //   id: 1,
    //   title: 'Archibald',
    //   description:'Mon meilleur ami depuis tout petit !',
    //   imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   createdDate: new Date(),
    //   snaps:200
    // },
    // {
    //   id: 2,
    //   title: 'Three Rock Mountain',
    //   description: 'Un endroit magnifique pour les randonnées.',
    //   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    //   createdDate: new Date(),
    //   snaps: 0
    // },
    // {
    //   id: 3,
    //   title: 'Un bon repas',
    //   description: 'Mmmh que c\'est bon !',
    //   imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    //   createdDate: new Date(),
    //   snaps: 0
    // },
    // {
    //   id: 4,
    //   title: 'Archibald',
    //   description:'Mon meilleur ami depuis tout petit !',
    //   imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   createdDate: new Date(),
    //   snaps:0
    // },
    // {
    //   id: 5,
    //   title: 'Three Rock Mountain',
    //   description: 'Un endroit magnifique pour les randonnées.',
    //   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    //   createdDate: new Date(),
    //   snaps: 0
    // },
    // {
    //   id: 6,
    //   title: 'Un bon repas',
    //   description: 'Mmmh que c\'est bon !',
    //   imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    //   createdDate: new Date(),
    //   snaps: 0
    // }
  // ];

  // getAllIntranetPosts(): IntranetPost[] {
  //   return this.intranetPosts;
  // }

  getAllIntranetPosts(): Observable<IntranetPost[]> {
    return this.http.get<IntranetPost[]>('http://localhost:3000/facesnaps');
  }

  // getSnapIntranetById(intranetPostId:number) : IntranetPost {
  //   const intranetPostById = this.intranetPosts.find(intranetPostById => intranetPostById.id === intranetPostId );
  //   if (!intranetPostById) {
  //     throw new Error('Post Not found!');
  //   } else {
  //     return intranetPostById;
  //   }
  // }
  getSnapIntranetById(intranetPostId:number) : Observable<IntranetPost> {
    return this.http.get<IntranetPost>(`http://localhost:3000/facesnaps/${intranetPostId}`)
  }
  // snapIntranetById(intranetPostId:number, snapType: 'Like' | 'Dislike'): void {
  //   // const intranetPostById = this.getSnapIntranetById(intranetPostId);
  //   // snapType === 'Like' ? intranetPostById.snaps++ : intranetPostById.snaps--;  
  // }

  snapIntranetById(intranetPostId:number, snapType: 'Like' | 'Dislike'):  Observable<IntranetPost> {
    return this.getSnapIntranetById(intranetPostId).pipe(
      map(intranetPost => ({
        ...intranetPost, snaps: intranetPost.snaps + (snapType === 'Like' ? 1 : -1)
      })),
      switchMap(updateIntranetPost => this.http.put<IntranetPost>(`http://localhost:3000/facesnaps/${intranetPostId}`, updateIntranetPost))
    )
  }

  // addIntranetPost(formvalue: {title: string, description: string, imageUrl: string}) : void{
  //   const intranetPost: IntranetPost = {
  //     ...formvalue, 
  //     snaps: 0,
  //     createdDate: new Date(),
  //     id: this.intranetPosts[this.intranetPosts.length - 1].id + 1
  //   };
  //   this.intranetPosts.push(intranetPost);
  // }
  addIntranetPost(formValue: {title: string, description: string, imageUrl: string}) : Observable<IntranetPost> {
    return this.getAllIntranetPosts().pipe(
      map(intranetPosts => [...intranetPosts].sort((a,b) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<IntranetPost>(
            'http://localhost:3000/facesnaps',
            newFacesnap)
      )
    );
  }
}
