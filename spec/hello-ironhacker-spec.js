// // ----------------
// //                 |
// //        this Ironhack is a name and could be anything
// decribe("Hello Ironhack function", function(){
//     it("Greets an Ironhacker", function(){
//         expect(helloIronhack().toEqual("Hello Ironhackers!"));
//     });
// });


describe("Hello Ironhack function", function() {
  it("Greets an Ironhacker", function() {
    expect(helloIronhack()).toEqual("Hello Ironhackers!");
  });
});

describe("My calculator", function() {
  it("Returns 0 when the array is empty", function() {
    expect(sumArray([])).toEqual(0);
  });

  it("Returns the same number when the array has just one element", function() {
    expect(sumArray([2])).toEqual(2);
  });

  it("sums two different numbers", function(){
      expect(sumArray([2,2])).toEqual(4);
  });
});