class Wood extends classemae {
    constructor(x, y, height, angle) {
      super(x, y, 20, height, angle)
     Matter.Body.setAngle(this.body, angle)
     this.image = loadImage("wood2.png")
    }

  };
  