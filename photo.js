class Photo{
    constructor(width =8 , height=10){
        this.width = width;
        this.height= height;
    }
    price() {
        let price;
        if (this.width === 8 && this.height === 10){
             price = 4
        }
        if (this.width === 10 && this.height === 12){
             price = 12
        }
        else {
             price = 10
        }
        return price
    }
    tostring(){
        return `This is a ${this.width} by ${this.height} photo and it costs $${this.price()}`
    }
}

let newPhoto  = new Photo(10,12);
console.log(newPhoto.price());
console.log(newPhoto.tostring());

// price;
// string;