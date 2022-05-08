function property(target: any, property_name: string): void {
    console.log('Property decorator');
    console.log(target, property_name);
}

function method(target: any, property_name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator...');
    console.log(target, property_name, descriptor);
}

function parameter(target: any, property_name: string, param: number) {
    console.log('Parameter decorator...');
    console.log(target, property_name, param);
}


class DecoratorClass {
    @property
    private product_name: string;
    public _price: number;

    constructor(product_name: string, _price: number) {
        this.product_name = product_name;
        this._price = _price;
    }

    @method
    set price(@parameter product_price: number) {
        if(product_price <= 0) throw new Error('Product price is invalid');

        this._price = product_price;
    }
}

const ccc = new DecoratorClass('banana', 2.50);