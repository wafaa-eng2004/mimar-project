const { validateMimarInput, calculateConstructionCost } = require('./app');

test('التحقق من صحة النص المدخل لمشروع مِعمار', () => {
    expect(validateMimarInput("مشروع مِعمار")).toBe(true);
    expect(validateMimarInput("م")).toBe(false);
});

test('حساب تكلفة البناء بشكل صحيح في مِعمار', () => {
    expect(calculateConstructionCost(100, 50)).toBe(5000);
    expect(calculateConstructionCost(0, 50)).toBe(0);
});
