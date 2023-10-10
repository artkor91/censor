const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    let product = products.find(item => item.id == productId); //ищем в коллекции объект с нужным id и сохраняем в переменную
    if (order.find(item => item.id == productId)){ 
        alert('Товар уже добавлен'); //проверяем, если такой элемент уже есть в корзине - показывает сообщение
        } else{
            order.push(product); // если элемента нет в корзине - добавляем
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины 
            let deLIndex = order.findIndex(item => item.id == productId); // ищем индекс удаляемого элемента в массиве order
            order.splice(deLIndex, 1); // удаляем элемент с этим индексом из массива
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    let totalPrice = order.reduce((sum, item) => sum + item.price, 0);
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}

console.log(order)