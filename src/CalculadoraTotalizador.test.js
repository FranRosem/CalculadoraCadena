describe("String Calculator ", () => {
    it("deberia retornar la suma de un string con coma", () => {
        expect(sumar("1,2,3")).toEqual(6);
      });
    it("deberia retornar la suma de un string con coma y un guión", () => {
        expect(sumar("1-2,3")).toEqual(6);
    });
  });
  
  function sumar(stringNumbers){
    const numbers = stringNumbers
        .replace('-', ',')
        .split(',')
        .map(n => parseInt(n, 10))
    return numbers.reduce((s, n) => s + n)
  }
  