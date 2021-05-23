class Drops{
    constructor(x,y,r){
var options={
    'friction': 0.1,
    'density': 0.2,
    'restitution' :1.0,
    'isStatic' : true
}

this.x=x
this.y = y  
this.r = r 

this.rain = Bodies.circle(x,y,5,options)
World . add(world,this.rain)

    }



display(){
    var pos = this.body.position
    fill('blue')
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.r)

}

update(){
    if(this.rain.position.y > height){

  Matter . Body. setPosition(this.rain, {x:Random(0,400), y:random (0,400)})
    }
}
}