Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
    Оно не должно быть меньше 30 и больше 100 грамм. В случае некорректного количества возвращать сообщение об ошибке.
    Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
    Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
информацией (использовать внутри себя вызов геттера).


function Cat(name) {
    this.name = name;
    var foodAmount = 50;
    function formatFoodAmount() {
        return foodAmount + ' гр';
    }
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}
var barsik = new Cat('Барсик');
console.log(barsik.feed());
barsik = null;

this.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 30) {
        throw new Error('Значение должно быть больше 30');
    }
    if (amount > 100) {
        throw new Error('Значение должно быть больше 100');
    }
    foodAmount = amount;
};







function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    this.foodAmount = function(amount) {
        // вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return waterAmount;

        // иначе режим сеттера
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450

