# SMISplan (+ TypeScript + NextJS)
[SMISplan](https://ilyasy.github.io/smisplan-typescript-next/)

## Что это ?
SMISplan - стандартный трекер задач (issue tracker), сделанный для внутренней работы. Данная версия является
адаптацией закрытого репозитория для просмотра, а также с имитацией (вместо оригинального: Perl + MySQL) backend.

Архитектура полностью изменена. Проект переписан с использованием TypeScript и перенесён на NextJS

## Основные возможности
* Добавление, редактирование, удаление данных

* Добавление связанных данных (например, совещание по задаче)

* Показ связанных данных (например, проведённых совещаний по задаче)

* Сортировка

* Фильтрация

* Меню действий

* Строки с "редактируемыми" данными

* Изменение  отображаемых столбцов

* Просмотр совещаний (событий) в календаре

* Просмотр истории изменений (лог событий)

* Экспорт в PDF

* Оповещение (требуется полноценный API)

## Основные технологии
* React

* Redux (+ Thunk)

* Javascript

* TypeScript

* NextJS

* Jest (+ React Testing Library)

* HTML5

* CSS3

* Ant Design ~~Material UI~~

* Axios

* Axios-mock-adapter (для имитации API)

* REST API

* Lazy Loading компоненты

## ToDo
- [ ] Переписать с использованием NextJS

- [ ] Адаптив

## Просмотр

* Клонировать репозиторий
```
git clone https://github.com/ilyaSy/smisplan-typescript-next.git
```

* Установить зависимости
```
npm install
```

* Запустить
```
npm run dev
```

* Для запуска тестов
```
npm run test
```

* Готовый результат на gh pages
<br>[SMISplan](https://ilyasy.github.io/smisplan-typescript-next/)

-----
**Автор: Сычугов Илья / Sychugov Ilya**
