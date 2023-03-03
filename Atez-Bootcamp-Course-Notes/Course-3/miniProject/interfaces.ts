export interface IProduct {
    title: string;
    description: string,
    price: number;
    rating: number;
    id: number | string;
    thumbnail: string
}

// export interface IColor {
//     color: string;
// }

export interface ISmartPhone extends IProduct {
    color: string;
}

export interface ILaptop extends IProduct {
    discountPercentage: number,
    screenDimentions: number,
}

export interface ITablet extends ISmartPhone {
    celluar: boolean;
    wifi: boolean;
}

export interface ITelevision extends IProduct {
    smartTv: boolean;
    stock: number;
}

export interface IProductApi {
    findAll: () => IProduct[];

    findByCategory<T extends IProduct>(category: string);

    findByText: (input: string) => void;
}
