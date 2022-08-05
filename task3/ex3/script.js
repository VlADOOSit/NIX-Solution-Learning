function circleArray() {
    this.arr = [];

    this.add = function(data) {
        this.arr.push(data);
    };
    this.printArr = function() {
        console.log(this.arr);
    };
    this.get = function(num) {
        if (num >= 0) {
            return this.arr[num % this.arr.length];
        }
        else {
            if (num === -1) {
                return this.arr[this.arr.length - 1];
            }
            else {
                let curr = this.arr.length - ((num * -1) % this.arr.length);
                if (curr === this.arr.length) {
                    return this.arr[0];
                }
                return this.arr[curr];
            }
        }
    };
}

let circledArray = new circleArray();

circledArray.add('Kharkiv');
circledArray.add('Kiyiv');
circledArray.add('Kramatorsk');
circledArray.add('Kherson');

circledArray.printArr();

console.log(circledArray.get(-1));
