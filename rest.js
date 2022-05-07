class Rest{
    constructor(bodyA, bodyB){
this.body = Matter.Constraint.create({
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 0.04,
    length:10
})
World.add(world, this.body)
    } 
    display(){
        strokeWeight(2.5)
        line (this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.bodyB.position.x, this.body.bodyB.position.y)
    }
}