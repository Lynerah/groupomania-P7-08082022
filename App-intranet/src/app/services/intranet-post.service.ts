import { Injectable } from '@angular/core';
import { IntranetPost } from '../models/intranet-post.model';

@Injectable({
  providedIn: 'root'
})
export class IntranetPostService {
  intranetPostId(id: number) {
    throw new Error('Method not implemented.');
  }

  intranetPosts: IntranetPost[] = [
    {
      id: 1,
      title: 'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:200
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 4,
      title: 'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:0
    },
    {
      id: 5,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 6,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllIntranetPosts(): IntranetPost[] {
    return this.intranetPosts;
  }

  getSnapIntranetById(intranetPostId:number, snapType: string) : void {
    const intranetPostById = this.getSnapIntranetById(intranetPostId);
    snapType === 'Like' ? intranetPostId.snaps++ : intranetPostById.snaps--;

  }
  snapIntranetById(intranetPostId:number): void {
    const intranetPostById = this.intranetPosts.find(intranetPostById => intranetPostById.id === intranetPostId);
    if (intranetPostById) {
      intranetPostById.snaps++;
    } else {
      throw new Error('Post not found!');
    }

  }
  unSnapIntranetById(intranetPostId:number): void{

  }

}
