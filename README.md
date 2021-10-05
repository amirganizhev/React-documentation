Библиотека React это ядро, которое работает (отображает контект) в браузере с помощью
библиотеки React-DOM, а в мобильных приложениях на ANDROID и IOS работает
(отображает контент) с помощью библиотеки React-Native.

Virtual-DOM - легкая форма обычного DOM дерева в контексте браузера, при внесении
изменений в DOM-дерево, они не переносятся в DOM-дерево сразу, вместо этого
создается новое DOM-дерево с новыми значениями и она сравнивается с предыдущим
(эта стадия сравнения называется СОГЛАСОВАНИЕ(RECONCILIATION)). После того как
как была найдена разница между 2 деревьями, происходит фаза визуализации
(ОТРИСОВКА(RENDER)), т.е мы видим обновленные данные на странице. Для каждого
изменения React устанавливает свою приоритетность, более приоритетные изменения
вносятся раньше, менее позже.   

---Создание проекта---
1) Создание приложения: npx create-react-app "название приложения";
2) Запуск приложения: npm start;
3) Структура проекта: В папке public, лежит index.html, все остальные файлы
можно сразу удалять. В папке src, находится исходный код нашего приложения,
все файлы кроме index.js и App.js, можно удалять.
--.--

---Состояние компонента---
1) Импортируем функцию useState: import React, {useState} from 'react';
2) Объявляем состояние компонента: const [counter, setCounter] = useState(5),
где counter - состояние компонента (просто значение), setCounter - изменение
состояния компонента (функция), в () - значение компонента по умолчанию;
3) Прописываем функции изменения состояния компонента, они вызывают из себя
функцию setCounter() (что то типа замыкания) с какими либо зачениями;
4) Прописываем обработчики событий в тегах, для смены состояния компонента;
5) Компоненты бывают управляемые и неуправляемые:
  1* Управляемые компоненты - сами управляют своим состоянием и обновляют его
  когда пользователь вводит данные (например <input /> <textarea />), изменить
  состояние можно с помощью хука useState().
  2* Неуправляемые компоненты - они хранят данные формы прямо в DOM, изменить
  состояние можно с помощью хука useRef().
--.--

---Функциональный компонент---
В функциональных компонентах, состоянием компонента можно управлять с помощью
хуков ({useState} и т.д.). Алгоритм описан выше. В последнее время, в основном
приоритет отдается функциональным компонентам.
--.--

---Классовый компонент---
В классовых компонентах, состоянием компонента управляет constructor класса.
В последнее время, компоненты в классовом стиле, используют все реже, и отдают
предпочтение функциональным и использованию хуков.
--.--

---Хуки---
Хуки - это некоторые функции, которые предоставляет React, эти функции всегда
начинаются со слова use, при этом хуки можно использовать либо в функциональных
компонентах, либо в собственных хуках, т.е. мы можем на основании основных
хуков, делать свои собственные хуки, с различным функционалом. Хуки можно
использовать только на верхнем уровне вложенности. Основных React хуков 6:
useState();
useEffect();
useRef();
useMemo();
useCallback();
useContext();
Подробное описание хуков:
1) useState() - хук состояния компонента, с помощью него мы создаем состояние у
управляемого компонента и меняем его.
Пример: const [title, setTitle] = useState('shocv');
2) useRef() - с помощью этого хука, мы можем получить доступ с DOM - элементу,
и уже у этого DOM - элемента забрать value. Использется для управление
состоянием неуправляемого компонента.
Пример: const bodyInputRef = useRef();
3) useMemo(callback, deps) - этот хук производит вычисления, запоминает
результат этого вычисления и кэширует (такое поведение называется мемоизация),
и на каждую перерисовку компонента, она не пересчитывает заново, она достает
пересчитанные данные из кэша, и использует их. Но если какая то из зависимостей
изменилась, то хук вновь пересчитывает и кэширует результат выполнения до тех
пор, пока опять одна из зависимостей не изменится. Первым параметром этот хук
принимает callback - функцию обратного вызова, а вторым массив зависимости.
Пример:
const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
}, [searchQuery, sortedPosts])
--.--

---Props - аргументы компонента---
1) Props - некоторые входные данные (объект), которые может принимать компонент,
для более гибкой настройки компонента.
2) Key - когда мы создаем списки с помощью Props, обязательным условием является
указание ключа (key), значение этого ключа должно быть уникальным (как правило
это id элемента списка). Ключи позволяют React делать рендеринг и перерисовывать
не весь список, а только те элементы, в которых произошли изменения.
3) Props.children - React не знает, в какое место компонента нужно добавлять
вложенные элементы, для этого используется Props.children. Например, мы сделали
UI - компонент кнопки, и мы используем эту кнопку несколько раз в проекте,
значит текст внутри кнопки, при каждом использовании, у нас будет разным, чтобы
сказать React в каком месте кнпки можно вставить текст используем Props.children.
Пример кода: <button>{props.children}</button>.
--.--

---React Transition Group---
React Transition Group - это библиотека React, для создания анимации. С помощью
нее можно анимировать переходы входы и выходы, отслеживать фазы анимации
(т.е когда анимация активна, когда анимация закончилась). Инструкция по
использованию находится на сайте документации.
Команда для установки: npm install react-transition-group --save
---.---
