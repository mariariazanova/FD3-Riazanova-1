//интерфейс механизма хранения
interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine  extends IStorageEngine> {
    
    productsArr:Array<Product>;
    storage:StorageEngine;

    constructor(_storage:StorageEngine) {
        this.productsArr=[]; 
        this.storage=_storage;
    }

    add(_product:Product):void {
        this.productsArr.push(_product);
    }

    getSumScale():number {
        let sumScale:number = 0;
        let quantity:number=this.storage.getCount();
        for(let i:number=0; i<quantity; i++){
            sumScale+=this.storage.getItem(i).getScale();
        };                
        return sumScale;
    }

    getNameList():Array<string> {
        let productsList:Array<string> = [];
        this.productsArr.forEach( (prod:Product) => {
            productsList.push (prod.getName());                   
        });
        return productsList;
    }
}

class Product {

    name:string;
    weight:number;

    static numOfProducts:number = 0;//кол-во созданных продуктов

    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight;
        Product.numOfProducts++;
    }

    public getScale():number {   //получить вес продукта
        return this.weight;
    }

    public getName():string {   //получить название продукта
        return this.name;
    }
    
}


class ScalesStorageEngineArray implements IStorageEngine {
    
    storage:Array<Product> = [];

    addItem(_item:Product):void {
        this.storage.push(_item);
    };

    getItem(_index:number):Product {
        return this.storage[_index];
    };

    getCount():number {
        return this.storage.length;
    };

}    

class ScalesStorageEngineLocalStorage implements IStorageEngine {
     
    storage:Array<Product>; //хранящийся массив
    key:string = 'products'; //ключ, под которым хранится информация

    constructor() {
       
        if(localStorage.products){
            this.storage=JSON.parse(localStorage.products);
        }else {
            this.storage=[];
        }
    }

    addItem(item:Product):void {
       
        this.storage.push(item);
        localStorage.products = JSON.stringify(this.storage); 
     }

     getItem(_index:number):Product {
        //let a:any =JSON.parse(localStorage.products);
        return new Product(this.storage[_index].name,this.storage[_index].weight);
        

     }    

     getCount():number {
        //let a: any = JSON.parse(localStorage.products);
        return this.storage.length;
    }


}


let scales1:Scales<ScalesStorageEngineArray> = new Scales(new ScalesStorageEngineArray());
let scales2:Scales<ScalesStorageEngineLocalStorage> = new Scales(new ScalesStorageEngineLocalStorage());

let product1:Product = new Product("яблоко№1", 150);
let product2:Product = new Product("помидор№1", 200);

let product3:Product = new Product("яблоко№2", 160);
let product4:Product = new Product("помидор№2", 190);
let product5:Product = new Product("груша№1", 100);

scales1.add(product1);
scales1.add(product2);

scales2.add(product3);
scales2.add(product4);
scales2.add(product5);


console.log(scales1.getSumScale(), scales1.getNameList());
console.log(scales2.getSumScale(), scales2.getNameList());



//console.log("Общий вес продуктов на весах:  " + scales.getSumScale());
//console.log("Список продуктов на весах:  " + scales.getNameList());
