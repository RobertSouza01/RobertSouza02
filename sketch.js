function setup() {
    createCanvas(600,600);
    background("back");
    }

    function draw() {
        stroke("blue");
        fill("red");

        if(mouseIsPressed){
            react(mouseX, mouseY, 20, 35);
            }

}            