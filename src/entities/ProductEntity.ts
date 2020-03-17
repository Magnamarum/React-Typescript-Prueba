export default class ProductEntity {
    public id: number;
    public title: string;
    public price: number;
    public quantity: number;

    constructor(id, title, price, quantity =0){
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity=quantity;
    }
}