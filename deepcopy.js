


function deepcopy(obj){
    if(obj===null || typeof(obj)!=='object'){
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepcopy(obj[key]);
        }
    }
    return copy;
}

const person1 = {
    name: 'Ravi',
    age: 20,
    address: {
        city: 'Ananthapur',
        state: 'Andhra Pradesh'
    }
};

const person2 = deepcopy(person1);
person2.name = 'Theja';
person2.address.city = 'Kalyanadurg';

console.log(person1.name); 
console.log(person2.name); 
console.log(person1.address.city); 
console.log(person2.address.city); 
