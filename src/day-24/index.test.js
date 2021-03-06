const { read } = require("../utils");

const part1 = require("./part-1");
const part2 = require("./part-2");

describe("Part 1", () => {
  // Actual test, Part 1
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(await part1(data)).toMatchSnapshot();
  });
});

describe("Part 2", () => {
  it.only("should produce the correct value for the input data", async () => {
    const input = ["....#", "#..#.", "#.?##", "..#..", "#...."].join("\n");

    expect(await part2(input, 10)).toEqual(99);
  });

  // Actual test, Part 2
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(await part2(data, 200)).toMatchSnapshot();
  });
});
