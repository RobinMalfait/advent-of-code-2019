const { read } = require("../utils");

const part1 = require("./part-1");
const part2 = require("./part-2");

describe("Part 1", () => {
  it.each([
    ["48226158", 1, "12345678"],
    ["01029498", 4, "12345678"],
    ["24176176", 100, "80871224585914546619083218645595"],
    ["73745418", 100, "19617804207202209144916044189917"],
    ["52432133", 100, "69317163492948606335995924319873"]
  ])(
    'should produce an output of "%s" after %s phases on input "%s"',
    (output, phases, input) => {
      expect(part1(input, phases)).toEqual(output);
    }
  );

  // Actual test, Part 1
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(await part1(data, 100).slice(0, 8)).toMatchSnapshot();
  });
});

describe("Part 2", () => {
  it.each([
    ["84462026", 100, "03036732577212944063491565474664"],
    ["78725270", 100, "02935109699940807407585447034323"],
    ["53553731", 100, "03081770884921959731165446850517"]
  ])(
    'should produce an output of "%s" after %s phases on input "%s"',
    (output, phases, input) => {
      expect(
        part2({
          input,
          phases,
          repeat: 10000,
          offset_end_position: 7
        })
      ).toEqual(output);
    }
  );

  // Actual test, Part 1
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    expect(
      await part2({
        input: data,
        repeat: 10000,
        offset_end_position: 7,
        phases: 100
      })
    ).toMatchSnapshot();
  });
});
