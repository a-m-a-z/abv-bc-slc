describe("function to get prime number", function() {
  it("should return 2  for value 2", function() {
    expect(getPrime(5)).toEqual([2, 3]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(5)).toEqual([2, 3,]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(2)).toEqual([2]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(3)).toEqual([3]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(10)).toEqual([2, 3,5,7]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(6)).toEqual([2, 3,5]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(15)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });

  it("should return 2  for value 2", function() {
    expect(getPrime(0)).toEqual("invalid");
  });


});
