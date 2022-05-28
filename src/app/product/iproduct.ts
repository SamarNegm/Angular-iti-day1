export interface IProduct {
    id: Number;
    title: string;
    price: Number;
    description: string;
    rating: {
        count: Number;
        rate: Number;
    };
    category: string;
    image: string;


}
