const PropertyTest=require('./TestValid')

describe('Проверка свойств',()=>{
    test('Размер', ()=>{
        expect(PropertyTest('MB')).toBe('Size');
    })
    test('Вес', ()=>{
        expect(PropertyTest('KG')).toBe('Weight');
    })
    test('Размерность', ()=>{
        expect(PropertyTest('XYZ')).toBe('Dimensions');
    })
    test('Пустой тест', ()=>{
        expect(PropertyTest('')).toBe(undefined);
    })
})
