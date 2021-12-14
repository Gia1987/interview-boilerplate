class Rover {
  x: number;
  y: number;
  heading: string;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.heading = "N";
  }

  turnRight = (): void => {
    if (this.heading == "N") {
      this.heading = "E";
    } else if (this.heading == "E") {
      this.heading = "S";
    } else if (this.heading == "S") {
      this.heading = "W";
    } else if (this.heading == "W") {
      this.heading = "N";
    }
  };

  turnLeft = (): void => {
    if (this.heading == "N") {
      this.heading = "W";
    } else if (this.heading == "W") {
      this.heading = "S";
    } else if (this.heading == "S") {
      this.heading = "E";
    } else this.heading = "N";
  };

  move = (instructions: string) => {
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] == "R") {
        this.turnRight();
      } else {
        this.turnLeft();
      }
    }
  };

  position = () => {
    return `${this.x} ${this.y} ${this.heading}`;
  };
}

export default Rover;
