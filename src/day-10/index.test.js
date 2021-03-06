const { read } = require("../utils");

const part1 = require("./part-1");
const part2 = require("./part-2");

describe("Part 1", () => {
  it.each([
    [8, "3,4", [".#..#", ".....", "#####", "....#", "...##"].join("\n")],
    [
      33,
      "5,8",
      [
        "......#.#.",
        "#..#.#....",
        "..#######.",
        ".#.#.###..",
        ".#..#.....",
        "..#....#.#",
        "#..#....#.",
        ".##.#..###",
        "##...#..#.",
        ".#....####"
      ].join("\n")
    ],
    [
      35,
      "1,2",
      [
        "#.#...#.#.",
        ".###....#.",
        ".#....#...",
        "##.#.#.#.#",
        "....#.#.#.",
        ".##..###.#",
        "..#...##..",
        "..##....##",
        "......#...",
        ".####.###."
      ].join("\n")
    ],
    [
      41,
      "6,3",
      [
        ".#..#..###",
        "####.###.#",
        "....###.#.",
        "..###.##.#",
        "##.##.#.#.",
        "....###..#",
        "..#.#..#.#",
        "#..#.#.###",
        ".##...##.#",
        ".....#.#.."
      ].join("\n")
    ],
    [
      210,
      "11,13",
      [
        ".#..##.###...#######",
        "##.############..##.",
        ".#.######.########.#",
        ".###.#######.####.#.",
        "#####.##.#.##.###.##",
        "..#####..#.#########",
        "####################",
        "#.####....###.#.#.##",
        "##.#################",
        "#####.##.###..####..",
        "..######..##.#######",
        "####.##.####...##..#",
        ".#####..#.######.###",
        "##...#.##########...",
        "#.##########.#######",
        ".####.#.###.###.#.##",
        "....##.##.###..#####",
        ".#.#.###########.###",
        "#.#.#.#####.####.###",
        "###.##.####.##.#..##"
      ].join("\n")
    ]
  ])(
    'The map requires an output of "%s" at position "%s"',
    (output, position, input) => {
      expect(part1.sensorBoost(input).visible_asteroids).toEqual(output);
    }
  );

  // Actual test, Part 1
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(part1.sensorBoost(data).visible_asteroids).toMatchSnapshot();
  });
});

describe("Part 2", () => {
  it("Should find the best monitoring system, and get the 200th vaporized asteroid", async () => {
    const map = [
      ".#..##.###...#######",
      "##.############..##.",
      ".#.######.########.#",
      ".###.#######.####.#.",
      "#####.##.#.##.###.##",
      "..#####..#.#########",
      "####################",
      "#.####....###.#.#.##",
      "##.#################",
      "#####.##.###..####..",
      "..######..##.#######",
      "####.##.####...##..#",
      ".#####..#.######.###",
      "##...#.##########...",
      "#.##########.#######",
      ".####.#.###.###.#.##",
      "....##.##.###..#####",
      ".#.#.###########.###",
      "#.#.#.#####.####.###",
      "###.##.####.##.#..##"
    ].join("\n");

    // 802 because 8,2 => x * 100 + y
    expect(part2.findVaporizedAsteroid(map, 200)).toEqual(802);
  });

  // Actual test, Part 2
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(part2.findVaporizedAsteroid(data, 200)).toMatchSnapshot();
  });
});
