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
class MattedPhoto extends Photo{
    constructor(width =8 , height=10,color){
        super(width,height)
        this.color = color
    }
    price(){        
        let newPrice  = super.price() +10 ;
        return newPrice
    }
    tostring(){
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs $${this.price()}`
    }
}
class FramedPhoto extends Photo{
    constructor(width =8 , height=10,material, style){
        super(width,height)
        this.material = material;
        this.style = style;
    }
    price(){        
        let newPrice  = super.price() +25 ;
        return newPrice
    }
    tostring(){
        return `This is a ${this.width} by ${this.height} ${this.material} framed photo.The style is ${this.style} and it costs $git ${this.price()}`
    }
}
let newPhoto1  = new Photo(10,12);
console.log(newPhoto1.price());
console.log(newPhoto1.tostring());


let newPhoto2 = new MattedPhoto(10,12,'Black');
console.log(newPhoto2.price());
console.log(newPhoto2.tostring());

let newPhoto3 = new FramedPhoto(10,12,'silver','Regular');
console.log(newPhoto3.price());
console.log(newPhoto3.tostring());
// price;
// string;