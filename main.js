// 1. Знайдіть суму всіх цифр від 1 до 100.
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(`Сума чисел від 1 до 100: ${sum}.`);

// 2. Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
    const ARRAY_1 = [1, 2, 3, 4, 5];
    for(let i = 0; i < ARRAY_1.length; i++){
        console.log(ARRAY_1[i]);
    }

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення.
    const ARRAY_2 = [-1, 22, 3, 44, 5];
    let max = ARRAY_2[0];
    for(let i = 0; i < ARRAY_2.length; i++){
        if(ARRAY_2[i] > max){
            max = ARRAY_2[i];
        }
    }
    console.log(`Максимальне значення: ${max}.`);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. 
// Також досмтатньо тільки 1 змінної для отримання даних від юзера. 
    let zero = 0;
    let pos = 0;
    let neg = 0;
    let userData;
    for(let i = 0; i < 8; i++ ){
        userData = +prompt(`Задайте число як додатнє, так і від'ємне, так і нуль.`);
        if(userData === 0){
        zero += 1;
        }
        if(userData < 0){
        neg += 1;
        }
        if(userData > 0){
        pos += 1;
        }
    }
    console.log(`Статистика. Нулів: ${zero}; Додатних: ${pos}; Від'ємних: ${neg}.`);

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
    const MULT_NUMB = 8;
    console.log(`Табличка множення числа 8.`);
    for(let i = 1; i <= 9; i++){
        console.log(`${MULT_NUMB} x ${i} = ${MULT_NUMB*i}`);
    }

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. За допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
    const ARRAY_3 = [2, 5, 9, 15, 0, 4];
    console.log(`Числа в межах (3;10).`);
    for(let i = 0; i < ARRAY_3.length; i++){
        if(ARRAY_3[i] > 3 && ARRAY_3[i] < 10){
            console.log(ARRAY_3[i]);
        }
    }

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак, провести математичну операцію, 
// далі вивести результат і спитатись чи хоче юзер повторити?
    do {
        let userNumb1 = +prompt(`Введіть перше число!`);
        let userNumb2 = +prompt(`Введіть друге число!`);
        let operation = prompt(`Задайте математичну операцію між числами!`);
        let result;
    switch(operation){
        case '+':
            result = userNumb1 + userNumb2;
            break;
        case '-':
            result = userNumb1 - userNumb2;
            break;
        case '*':
            result = userNumb1 * userNumb2;
            break;
        case '/':
            result = userNumb1 / userNumb2;
            break; 
    }
    alert(`Результат: ${result}`);
} while(confirm(`Бажаєте повторити?`));
