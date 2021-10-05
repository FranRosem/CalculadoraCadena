describe("String Calculator ", () => {
    it("deberia retornar la suma de un string con coma", () => {
        expect(sumar("1,2,3")).toEqual(6);
      });
    it("deberia retornar la suma de un string con coma y un guión", () => {
        expect(sumar("1-2,3")).toEqual(6);
    });
    it("deberia retornar la suma de un string con delimitador personalizado", () => {
        expect(sumar("//;\n1;2;3")).toEqual(6);
    });
  });
  
  function sumar(stringNumbers) {
    var delimeter = ',';
    if (stringNumbers.substring(0, 2) === '//') {
      delimeter = stringNumbers.substring(2, stringNumbers.indexOf('\n'));
      stringNumbers = stringNumbers.substring(stringNumbers.indexOf('\n') + 1);
    }
    return stringNumbers.replace(/(\n|-)/gm, delimeter).split(delimeter).reduce(function(previous, current) {
      return parseInt(previous) + parseInt(current);
    }, 0);
  }
  