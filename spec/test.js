describe("function to get prime number", function() {
  it("should return 2  for value 2", function() {
    expect(getPrime(5)).toEqual([2, 3]);
  });

  it("should return   [2, 3,] if value 5", function() {
    expect(getPrime(5)).toEqual([2, 3,]);
  });

  it("should return [2]  if value 2", function() {
    expect(getPrime(2)).toEqual([2]);
  });

  it("should return [3]  if value 3", function() {
    expect(getPrime(3)).toEqual([3]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ]  if value 20", function() {
    expect(getPrime(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });

  it("should return [2, 3,5,7]  for value 10", function() {
    expect(getPrime(10)).toEqual([2, 3,5,7]);
  });

  it("should return [2, 3,5]  for value 6", function() {
    expect(getPrime(6)).toEqual([2, 3,5]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13 ]  for value 15", function() {
    expect(getPrime(15)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]  for value 33", function() {
    expect(getPrime(33)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);
  });

  it("should return [ 2, 3, 5, 7 ])   for value 9", function() {
    expect(getPrime(9)).toEqual([ 2, 3, 5, 7 ]);
  });

});
