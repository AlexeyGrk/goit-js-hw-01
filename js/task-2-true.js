const invoice = 100;
const stock = 100;
const bigInvoice = 150;
// Write code under this line
const message =
  stock >= invoice
    ? `Заказ оформлен, с вами свяжется менеджер`
    : `На складе недостаточно товаров!`;

console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'