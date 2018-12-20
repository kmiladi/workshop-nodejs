/*function OldHorse() {
    this.age = 0;

    setInterval(function() {
        this.age++;
        console.log("Old horse is", this.age);
    }, 1000);
}

var p = new OldHorse();*/

// le ()=> change de scope
function OldHorse() {
    this.age = 0;

    setInterval(()=> {
        this.age++;
        console.log("Old horse is", this.age);
    }, 1000);
}

var p = new OldHorse();
