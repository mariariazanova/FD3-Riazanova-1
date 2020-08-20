var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productsArr.push(_product);
        console.log("На весы добавлен продукт:" + _product.name);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.productsArr.forEach(function (prod) {
            sumScale += prod.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var productsList = [];
        this.productsArr.forEach(function (prod) {
            productsList.push(prod.getName());
        });
        return productsList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
        Product.numOfProducts++;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.numOfProducts = 0; //кол-во созданных продуктов
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight, _color) {
        var _this = 
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        _super.call(this, _name, _weight) || this;
        _this.color = _color;
        return _this;
    }
    Apple.prototype.setColor = function () {
        return this.color;
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        this.setColor();
        return (this.color + " " + this.name);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    //color:string;
    function Tomato(_name, _weight) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        return _super.call(this, _name, _weight) || this;
        //this.color=_color;
    }
    return Tomato;
}(Product));
var scales = new Scales();
var apple1 = new Apple("яблоко№1", 150, "зеленое");
console.log("Вес продукта  " + apple1.color + apple1.name + "  равен  " + apple1.weight);
var tomato1 = new Tomato("помидор№1", 200);
console.log("Вес продукта  " + tomato1.getName() + "  равен  " + tomato1.getScale());
var apple2 = new Apple("яблоко№2", 210, "красное");
var tomato2 = new Tomato("помидор2", 210);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log("Общий вес продуктов на весах:  " + scales.getSumScale());
console.log("Список продуктов на весах:  " + scales.getNameList());
console.log("Создано продуктов:" + Product.numOfProducts);
//# sourceMappingURL=app.js.map