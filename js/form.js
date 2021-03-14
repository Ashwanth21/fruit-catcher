class Form{
    constructor(){
       this.input = createInput("Name");
       this.input1 = createInput("girl/boy");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.input1.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(450, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', '#0093f5');

        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', '#00bcf5');
        this.input.style('color','#002df5')

        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', '#002df5');
        this.button.style('color','#00bcf5')

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', '#002df5');
        this.reset.style('color','#00bcf5')

        this.input1.position(550,450);
        this.input1.style('width', '200px');
        this.input1.style('height', '20px');
        this.input1.style('background', '#00bcf5');
        this.input.style('color','#002df5')

        this.button.mousePressed(() => {
            this.input.hide();
            this.input1.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', '#00bcf5');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}