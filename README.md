# bitrix-job-test
Решения по задачам:

1. По первой задаче конкретно с таким конкретно не сталкивался. Но делал другого типа хитрые акции, вроде списывания 500 рублей с напопительного счета пользователя за каждую покупку.
Можно привязаться к событию оформления заказа и подключить условия, также можно добавить произвольную именную акцию в интерфейс, чтобы администратор мог настроить период действия.
2. [/cron/whishlist_sender.php](https://github.com/ivrok/bitrix-job-test/blob/master/cron/whishlist_sender.php)
3. [/ratingUI/](https://github.com/ivrok/bitrix-job-test/tree/master/ratingUI)

Проверка знаний по битрикс для одной из вакансий.
Задачи:
1. Код приводить не требуется, достаточно письменного ответа. 
Дано: интернет магазин на "1с-битрикс: Бизнес", каталог, корзина и оформление заказа реализованы нативными компонентами (catalog, sale.basket.basker, sale.order.full). 
Задача:  реализовать акцию "Каждый N товар за X рублей". У акции должны быть настройки, где выставляется период активности акции, параметры N и X

Пример: при N=2 и X=1 каждый второй товар будет стоить 1 рубль. Выбираются товары с наименьшей ценой. Нужно считать каждый экземпляр товара. То есть если в корзине одного товара 5 штук, второго товара 3 штуки, то 4 товара надо продать за 1 рубль.

Еще один пример. В корзине:
товар 1, цена 500 рублей, 3 штуки
товар 2, цена 100 рублей, 2 штуки
товар 3, цена 200 рублей, 4 штуки
Акция: каждый 3-й товар за 1 рубль. У нас 9 предметов, значит 3 из них надо продать по рублю. Берем 3 самых дешевых предмета. Итого мы продаем товар 1 по своей цене, товар 2 продаем по рублю, у товара 3 продаем один предмет по рублю, три предмента по своей цене. Получилось 3 самых дешевых предмета по рублю, остальные по своей цене.

2.
У пользователя есть отложенные товары в корзине. Необходимо сделать почтовую рассылку по пользователям "Добрый день, #Имя_Фамилия# В вашем вишлисте хранятся товары #список_товаров#.",
в списке указать все товары, отложенные за последние тридцать дней. При этом нужно проверить, чтобы в список не попали изделия, которые присутствуют в заказах пользователя за последний месяц.
Скрипт должен быть оформлен для выполнения из консоли по крону. Пошаговое выполнение приветствуется, но необязательно.

3.
Сверстай контрол оценки и показа рейтинга. Практически все наши контролы должны быть очень гибкими к окружающему пространству, должны уметь располагаться на любом фоне и при желании легко менять свой "скин". Обрати внимание, что контрол должен не только выставлять оценку, но и показывать текущую. 

Плюсом будет верстка по БЭМу.

Макет – https://studioratio.box.com/s/8yiw3ggc86w8xp888ketkk8l62hmi36y



