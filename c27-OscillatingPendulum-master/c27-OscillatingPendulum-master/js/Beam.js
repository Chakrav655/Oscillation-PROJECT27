class Beam{
    constructor(){
        var beam_options={
            isStatic: true
          }        
        this.beam = Bodies.rectangle(200,100,100,10,beam_options);
        World.add(world,this.beam);
    }
    display(){
        noStroke();
        fill ("maroon");
        rectMode(CENTER);
        rect(this.beam.position.x,this.beam.position.y,100,10);
        
    }
}