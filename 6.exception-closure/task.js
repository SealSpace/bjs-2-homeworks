// Задача 1 Форматтер чисел

function parseCount(numberPars) {
    let num = parseInt(numberPars);

    if (isNaN(num)) {
        throw new Error('Невалидное значение');
    };
    return num;
};

function validateCount(parsNumber) {

    try {
        return parseCount(parsNumber);
    } catch (er) {

        return er;
    }
};


// Задача 2 Треугольник

class Triangle {
    constructor(a, b, c) {
        this.a = a,
            this.b = b,
            this.c = c
        if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        };

    }

    getPerimeter() {
        let perimetr = this.a + this.b + this.c;
        return perimetr;
    };

    getArea() {
        let s = (this.getPerimeter()) / 2;
        let area = +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(3);
        return area;
    };

};


function getTriangle(a, b, c) {


    try {
        let triangleNew = new Triangle(a, b, c);
        return triangleNew;
    } catch (err) {

        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },

            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }

        };
    };

};
