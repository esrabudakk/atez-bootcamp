import {ILaptop, IProduct, IProductApi, ISmartPhone, ITablet, ITelevision} from "./interfaces";
import {dummyData} from "./models";

class ProductApi implements IProductApi {
    findAll(): IProduct[] {
        const products = [];

        for (let i = 0; i < dummyData.length; i++) {
            const currentProduct = dummyData[i];

            const rest = {
                title: currentProduct.title,
                description: currentProduct.description,
                rating: currentProduct.rating,
                price: currentProduct.price,
                id: currentProduct.id,
                thumbnail: currentProduct.thumbnail,
            }

            if (dummyData[i].category === "smartphones") {

                products.push({
                    ...rest,
                    color: currentProduct.color,
                } as ISmartPhone)


            } else if (dummyData[i].category === "laptop") {
                products.push({
                    ...rest,
                    discountPercentage: currentProduct.discountPercentage,
                    screenDimentions: currentProduct.screenDimentions,

                } as ILaptop);

            } else if (dummyData[i].category === "television") {

                products.push({
                    ...rest,
                    smartTv: currentProduct.smartTv,
                    stock: currentProduct.stock

                } as ITelevision);

            } else if (dummyData[i].category === "tablet") {
                products.push({
                    ...rest,
                    celluar: currentProduct.celluar,
                    color: currentProduct.color,
                    wifi: currentProduct.wifi,

                } as ITablet);
            }
        }
        return products
    }

    findByCategory<T extends IProduct>(category: string): T[] {
        let product = []
        for (let i = 0; i < dummyData.length; i++) {
            const currentProduct = dummyData[i]
            if (dummyData[i].category === category) {
                const rest = {
                    title: currentProduct.title,
                    description: currentProduct.description,
                    rating: currentProduct.rating,
                    price: currentProduct.price,
                    id: currentProduct.id,
                    thumbnail: currentProduct.thumbnail,
                }
                if (category === "laptop") {
                    product.push({
                        ...rest,
                        discountPercentage: currentProduct.discountPercentage,
                        screenDimentions: currentProduct.screenDimentions,
                    })
                } else if (category === "smartphones") {
                    product.push({
                        ...rest,
                        color: currentProduct.color,
                    })
                } else if (category === "television") {
                    product.push({
                        ...rest,
                        smartTv: currentProduct.smartTv,
                        stock: currentProduct.stock,
                    })
                } else if (category === "tablet") {
                    product.push({
                        ...rest,
                        celluar: currentProduct.celluar,
                        color: currentProduct.color,
                        wifi: currentProduct.wifi,
                    })
                }

            }
        }
        return product
    }

    findByText(input: string): IProduct[] {
        const filteredProducts: IProduct[] = [];
        let currentProduct;
        for (let i = 0; i < dummyData.length; i++) {
            currentProduct = dummyData[i];
            for (const key in currentProduct)
                if (currentProduct[key].toString().includes(input)) {
                    filteredProducts.push(currentProduct);
                }
        }
        return filteredProducts;
    }
}


/****************TEST****************/


const A = new ProductApi();

// console.log(A.findAll())
console.log(A.findByText("Galaxy S23"))
// console.log(A.findByCategory("laptop"))

