class Vehical{
    constructor(name, maker){
        this.name = name;
        this.maker = maker;
    }
    move(){
        console.log(`${this.name} is moving`);
    }
}

class Bus extends Vehical{
    constructor(name, maker, capacity){
        super(name, maker);
        this.capacity = capacity;
    }

        route() {
            console.log("Route is set");
        }
    }


    
