import Rover from "./app";

let rover;
describe("Rover", () => {
  beforeEach(() => {
    rover = new Rover();
  });

  it("should start 0 0 N", () => {
    expect(rover.position()).toEqual("0 0 N");
  });

  it.each([
    ["N to E", "R", "0 0 E"],
    ["E to S", "RR", "0 0 S"],
    ["S to W", "RRR", "0 0 W"],
    ["W to N", "RRRR", "0 0 N"],
  ])("should turn right %s", (val, instruction, expected) => {
    rover.move(instruction);
    expect(rover.position()).toEqual(expected);
  });

  it.each([
    ["N to W", "L", "0 0 W"],
    ["W to S", "LL", "0 0 S"],
    ["S to E", "LLL", "0 0 E"],
    ["W to N", "LLLL", "0 0 N"],
  ])("should turn left %s", (val, instruction, expected) => {
    rover.move(instruction);
    expect(rover.position()).toEqual(expected);
  });
});
