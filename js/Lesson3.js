// const x1 = 10;
// const x2= 30;
// const number = 45;
// console.log(`Число &{(number)} потрапляє у відрозок до &{x1}?`,number <x1); 
// Чи потравляє до x1
// console.log(`Число &{(number)} потрапляє у відрозок до &{x2}?`,number >x2); 
//  Чи потрапляє до ч2 
// console.log(`Число &{(number)} потрапляє у відрозок від &{x1} до &{x2}?`,number >x1  && number<x2); 
// Чи входить выд x1 до x2
// console.log(`Число &{(number)} потрапляє у відрозок до &{x1} або після &{x2}?`,number <x1  || number>x2); 
// Логічне або 


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend &&!isDnd;
// console.log('Можна відкрити чат? ', canOpenChat);


// const sub = 'free';
// якщо користувач pro або користувач vip тоді є доступ
// const canAccessContent = sub==="pro" || sub==="vip" ;
// console.log('Є доступ до контенту? ', canAccessContent)



// if(true){
//     console.log(правда)
// }
// Якщо if виконається, Якщо false не виконається


// let vip =false;
// if(vip){
//     console.log('Ви отримаєте доступ');
// }
// else{
//     console.log('У вас немає доступу');
// }



// const salary = 500;


// if (salary < 1000) {
//     console.log('Level 1');
// }
//  else if(salary > 2000 && salary<3000) {
//     console.log('Level2');
// }
// else if(salary > 3000 && salary<4000) {
//     console.log('Level3');
// }
// else{
//     console.log('ТИ не наш робітник')
// }

// Якщо є дві умови


// const salary = 50000;
// let message;

// if(salary<=5000){
//     message ='Ваша зп менше 5000';
//     console.log(message);
// }
// else{
//     message = 'Ваша зп більше 5000';
//     console.log(message);
// }

// const message = salary<=5000?'Ваша зп менше 5000!':'Ваша зп більше 5000!';
// console.log(message)
// Тринарний оператор


// const a = 5;
// console.log(5);

// if(true){
//     const b =10;
//     console.log(a);
//     console.log(b);
// }
// console.log(b)


/*
 * Напиши скрипт обробки покупки в магазині.
 *
 * - Баланс користувача зберігається в змінній balance
 * - Сумма покупки зберігається в змінній payment
 *
 * - Перед перевіркою вивести повідомлення:
 * «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість 
 * доступних коштів на рахунку»
 *
 * - Якщо сума покупки не перевищує баланс:
 *    - Відняти з балансу суму покупки
 *    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
 * - Якщо сума покупки перевищує ба
- Якщо сума покупки перевищує баланс:
 *    - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
 * - В кінці вивести повідомлення «Операція завершена»
 */

// let balance = 1000000;
// const payment = 20000;
// alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість 
//     * доступних коштів на рахунку`)
// if(balance >payment){
//    balance -= payment
// alert(`На рахунку залишилося ${balance} кредитів`)
// }
// else{
//     alert(`На рахунку недостатньо коштів для проведення операції!`)
// }
// alert('операція завершена!')





/*
 * Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої 
 * суми за весь час (партнерська програма).
 *
 * - Загальна сума витрачених коштів зберігається в змінній totalSpent
 * - Сума поточного платежа зберігається в змінній payment
 * - Знижка зберігається в змінній discount
* - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
 * - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
 * - Якщо витрачено менше 100) - не партнер, знижка 0%
 *
 * - В результаті вивести повідомлення
 * «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»
 */
    // const totalSpent = 2000;
    // let payment = 500;
    // let discount = 0;

    // if(totalSpent=>100 && totalSpent<1000){
    //     discount =0.02;
    //     console.log(`Бронзовий партнер, знижка ${discount*100}%`)
    // }
    // else if(totalSpent>=1000 && totalSpent<=5000){
    //     discount = 0.05;
    //     console.log('Срібний партнер, знижка ${discount*100}%')
    // }
    // else{}
    // 'Бронзовий партнер, знижка 2%'
    // 'Срібний партнер, знижка 5%'
    // 'Золотий партнер, знижка 10%'
    // 'У вас ще немає партнерської знижки'





    const stars = 5;
    let price;

// if(stars === 1){
//     price =`20$`;
//     console.log(`Вартість номеру ${price}`);
// }
// else if(stars === 2){
//     price =`30$`;
//     console.log(`Вартість номеру ${price}`)
// }
// else if(stars === 3){
//     price =`50$`;
//     console.log(`Вартість номеру ${price}`)
// }
// else if(stars === 4){
//     price =`70$`;
//     console.log(`Вартість номеру ${price}`)
// }
// else if(stars === 5){
//     price =`120$`;
//     console.log(`Вартість номеру ${price}`)
// }
// else{
//     console.log(`Такї кількості зірок немає`)
// }

switch(stars){
    case 1:
        price =`20$`;
        console.log(`Вартість номеру ${price}`);
        break;
    case 2:
        price =`30$`;
        console.log(`Вартість номеру ${price}`)
        break;
    case 3:
        price =`50$`;
    console.log(`Вартість номеру ${price}`)
    break;
    case 4:
    price =`70$`;
    console.log(`Вартість номеру ${price}`)
    break;
    case 5:
        price =`120$`;
    console.log(`Вартість номеру ${price}`)
    break;

    default:
        console.log('Такої кількості зірок немає');
}