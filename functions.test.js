const functions = require('./functions');

test('turns spider into Spider',()=>{
    expect(functions.capitalise('spider')).toBe('Spider');
});

test('turns _ into _',()=>{
    expect(functions.capitalise(' ')).toBe(' ');
});


test('reverses "hi there" to "ereht ih"', ()=>{
    expect(functions.reverse('hi there')).toBe('ereht ih');
});

test('reverses "AsDf" to "fDsA"', ()=>{
    expect(functions.reverse('AsDf')).toBe('fDsA');
});

test('add 2 + 3 to equal 5', ()=>{
    expect(functions.calculator.add(4, 6)).toBe(10);
});

test('subtract 5 from 3 to equal -2', ()=>{
    expect(functions.calculator.subtract(3, 5)).toBe(-2);
});

test('divide 10 by 5 to equal 2', ()=>{
    expect(functions.calculator.divide(10, 5)).toBe(2);
});

test('multiple 11 by 6 to equal 66', ()=>{
    expect(functions.calculator.multiply(11, 6)).toBe(66);
});

test('shift "HI there" by 5 to return ""', ()=>{
    expect(functions.caesarCipher('HI there', 2)).toBe('JK vjgtg');
});

test('get average of [1, 2, 3, 4, 5] as 3', ()=>{
    expect(functions.analyseArray([1, 2, 3, 4, 5])).toStrictEqual(({
        average: 3, 
        min: 1, 
        max: 5, 
        length: 5
    }));
});


