const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle renders correctly', () => {
        const color = 'red';
        const circle = new Circle(color);
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`);
    });

    test('Triangle renders correctly', () => {
        const color = 'blue';
        const triangle = new Triangle(color);
        const points = "150,20 250,180 50,180";
        expect(triangle.render()).toBe(`<polygon points="${points}" fill="blue" />`);
    });

    test('Square renders correctly', () => {
        const color = 'green';
        const square = new Square(color);
        expect(square.render()).toBe(`<rect x="50" y="50" width="200" height="200" fill="green" />`);
    });
});