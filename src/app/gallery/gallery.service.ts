import { GalleryImg } from "./gallery.model";
import { EventEmitter } from "@angular/core";

export class GalleryService {
  private galleryItems: GalleryImg[] = [
    {
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://placekitten.com/200/198",
    },
    {
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://placekitten.com/200/202",
    },
    {
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://placekitten.com/200/203",
    },
    {
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://placekitten.com/200/204",
    },
    {
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://placekitten.com/200/205",
    },
    {
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://placekitten.com/200/206",
    },
    {
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://placekitten.com/200/207",
    },
    {
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://placekitten.com/200/208",
    },
    {
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://placekitten.com/200/209",
    },
    {
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://placekitten.com/200/200",
    }
  ];

  galleryChenged = new EventEmitter<GalleryImg[]>();

  getGalleryItems() {
    return this.galleryItems.slice();
  }

  deleteImgById(imgId: number) {
    this.galleryItems = this.galleryItems.filter(({ id }) => id !== imgId );
    this.galleryChenged.emit(this.galleryItems.slice());
  }

  deleteImgByIndex(index: number, count: number = 1) {
    this.galleryItems.splice(index, count);
    this.galleryChenged.emit(this.galleryItems.slice());
  }

  addNewImg(title: string, url: string) {
    const { id: currentLastIdCount } = this.galleryItems[this.galleryItems.length - 1];
    const newImg = new GalleryImg(currentLastIdCount, title, url)
    this.galleryItems.push(newImg);
    this.galleryChenged.emit(this.galleryItems.slice());
  }
}