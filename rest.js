class Rest{
    constructor(bodyA, pointB){
this.body = Matter.Constraint.create({
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length:10
})
World.add(world, this.body)
    }
    fly(){
     this.body.bodyA = null
    } 
    display(){
        if(this.body.bodyA){

        strokeWeight(2.5)
        line (this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.pointB.x, this.body.pointB.y)
     }
    }
}