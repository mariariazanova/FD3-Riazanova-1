var Scales = /** @class */ (function () {
    function Scales(_storage) {
        //this.productsArr=[]; 
        this.storage = _storage;
    }
    Scales.prototype.add = function (_product) {
        this.storage.addItem(_product);
    };
    Scales.prototype.getSumScale = function () {
        var _sumScale = 0;
        var quantity = this.storage.getCount();
        for (var i = 0; i < quantity; i++) {
            _sumScale += this.storage.getItem(i).getScale();
        }
        return _sumScale;
    };
    Scales.prototype.getNameList = function () {
        var _productsList = [];
        var quantity = this.storage.getCount();
        for (var i = 0; i < quantity; i++) {
            _productsList.push(this.storage.getItem(i).getName());
        }
        return _productsList;
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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (_item) {
        this.storage.push(_item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (_index) {
        return this.storage[_index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.key = 'products'; //ключ, под которым хранится информация
        if (localStorage.products) {
            this.storage = JSON.parse(localStorage.products);
        }
        else {
            this.storage = [];
        }
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.storage.push(item);
        localStorage.products = JSON.stringify(this.storage);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (_index) {
        //let a:any =JSON.parse(localStorage.products);
        return new Product(this.storage[_index].name, this.storage[_index].weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        //let a: any = JSON.parse(localStorage.products);
        return this.storage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
localStorage.clear();
var scales1 = new Scales(new ScalesStorageEngineArray());
var scales2 = new Scales(new ScalesStorageEngineLocalStorage());
var product1 = new Product("яблоко№1", 150);
var product2 = new Product("помидор№1", 200);
var product3 = new Product("яблоко№2", 160);
var product4 = new Product("помидор№2", 190);
var product5 = new Product("груша№1", 100);
scales1.add(product1);
scales1.add(product2);
scales2.add(product3);
scales2.add(product4);
scales2.add(product5);
console.log(scales1.getSumScale(), scales1.getNameList());
console.log(scales2.getSumScale(), scales2.getNameList());
//console.log("Общий вес продуктов на весах:  " + scales.getSumScale());
//console.log("Список продуктов на весах:  " + scales.getNameList());
//# sourceMappingURL=app.js.map