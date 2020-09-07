class Scales {
    
    productsArr:Array<Product>;

    constructor() {
        this.productsArr=[]; 
    }

    add(_product:Product):void {
        this.productsArr.push(_product);
        console.log( "На весы добавлен продукт:" + _product.name);   
    }

    getSumScale():number {
        let sumScale:number = 0;
        this.productsArr.forEach( (prod:Product) => {
            sumScale+= prod.getScale();                   
        });
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

    getScale():number {   //получить вес продукта
        return this.weight;
    }

    getName():string {   //получить название продукта
        return this.name;
    }
    
}

class Apple extends Product {

    color:string;

    constructor(_name:string, _weight:number, _color:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(_name, _weight); 
        this.color=_color;
    }

    /*
    constructor(_name:string, _weight:number, _color:string) {
        super("apple", _weight); 
        this.color=_color;
    }


    */

    getColor():string {   //получить цвет продукта
        return this.color;
    }

    getName():string {   //получить название продукта
        super.getName();      
        //this.getColor();
        return (this.getColor() + " " + this.name); 
       
    }
   
}

class Tomato extends Product {

    //color:string;

    constructor(_name:string, _weight:number){ //_color:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(_name, _weight); 
        //this.color=_color;
    }
   
}



let scales:Scales = new Scales();

let apple1:Apple=new Apple("яблоко№1", 150, "зеленое");
console.log("Вес продукта  " + apple1.color+ apple1.name + "  равен  "+ apple1.weight )

let tomato1:Tomato=new Tomato("помидор№1", 200);
console.log("Вес продукта  " +  tomato1.getName() + "  равен  "+ tomato1.getScale() )

let apple2:Apple=new Apple("яблоко№2", 210, "красное");
console.log("Вес продукта  " +  apple2.getName() + "  равен  "+ apple2.getScale() )
let tomato2:Tomato=new Tomato("помидор№2", 205);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);


console.log("Общий вес продуктов на весах:  " + scales.getSumScale());
console.log("Список продуктов на весах:  " + scales.getNameList());
console.log("Создано продуктов:" + Product.numOfProducts);