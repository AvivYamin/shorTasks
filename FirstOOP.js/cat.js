
class Cat{
    constructor(tiredness, hunger, lonliness, happiness){
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
    }
    feed(){
        this.happiness += 2;
        this.hunger = 0;
        this.tiredness++;
        this.lonliness--;
    }
    sleep(){
        this.happiness += 1;
        this.hunger++;
        this.tiredness = 0;
        this.lonliness++;
    }
    pet(){
        this.happiness += 2;
        this.tiredness++;
        this.lonliness -= 2;
    }
    meaw(state){
            console.log(`meaw meaw I'm ${state}`);
    }
    check(){
        let flag = true;
        if(this.happiness < 0){
            this.meaw("sad!");
            flag = false;
        }
        if(this.tiredness > 5){
            this.meaw("tired!")
            flag = false;
        }
        if(this.lonliness > 5){
            this.meaw("lonely!")
            flag = false;
        }
        if(this.hunger > 5){
            this.meaw("hungry!")
            flag = false;
        }
        if(flag){
            console.log("Happy Meaw");
        }
    }
}

let jason = new Cat(1, 2, 3, 4);
jason.feed();
jason.check();
