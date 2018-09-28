```
> jest --resetMocks

 FAIL  ./test.js
  ✓ mocks fs.readFileSync (4ms)
  ✕ restores mock and reads file (8ms)

  ● restores mock and reads file

    expect(received).toEqual(expected)

    Expected value to equal:
      "bar"
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected string but received undefined.

      11 | it("restores mock and reads file", () => {
      12 |   const file = fs.readFileSync("foo.txt", "utf8");
    > 13 |   expect(file).toEqual("bar");
         |                ^
      14 | });
      15 |

      at Object.toEqual (test.js:13:16)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.945s
```
```
> jest --restoreMocks

 FAIL  ./test.js
  ✓ mocks fs.readFileSync (3ms)
  ✕ restores mock and reads file (9ms)

  ● restores mock and reads file

    expect(received).toEqual(expected)

    Expected value to equal:
      "bar"
    Received:
      "foo"

      11 | it("restores mock and reads file", () => {
      12 |   const file = fs.readFileSync("foo.txt", "utf8");
    > 13 |   expect(file).toEqual("bar");
         |                ^
      14 | });
      15 |

      at Object.toEqual (test.js:13:16)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.86s
```
