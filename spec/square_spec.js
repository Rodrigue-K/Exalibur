that('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEqual(36)
    });
    can('throw error if argument is not a number', ()=> {
      square = function() { new Square('notanumber')}
      expect(square).toThrowError('argument is not a number')
    });

});
