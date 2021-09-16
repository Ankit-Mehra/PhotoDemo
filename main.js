
import {Photo,MattedPhoto,FramedPhoto} from './photo.js';

let newPhoto1  = new Photo(10,12);
console.log(newPhoto1.price())
console.log(newPhoto1.tostring());


let newPhoto2 = new MattedPhoto(10,12,'Black');
console.log(newPhoto2.price());
console.log(newPhoto2.tostring());

let newPhoto3 = new FramedPhoto(10,12,'silver','Regular');
console.log(newPhoto3.price());
console.log(newPhoto3.tostring());
// price;