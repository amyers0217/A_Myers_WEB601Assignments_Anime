import { Content } from './content-interface';

export class ContentList {
  private readonly _items: Content[];

  constructor() {
    this._items = [];
  }

  get items(): Content[] {
    return this._items;
  }

  addItem(oneItem: Content) {
    this._items.push(oneItem);
  }

  getLength(): number {
    return this._items.length;
  }

  returnHTML(index: number) {
    if(index < 0 || index >= this._items.length) {
      console.log("Invalid")
    }

    return `<div class="contentCard">
               <h1>${this._items[index].title}</h1>
               <h4>${this._items[index].creator}</h4>
               <img src="${this._items[index].imgURL}"  alt=""/>
               <p>${this._items[index].description}</p>
               <h5>${this._items[index].type}</h5>
            </div>`;
  }
}
