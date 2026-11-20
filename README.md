# Financial Calculator 💰

**[English](#english)** · **[Български](#български)**

---

## English

An investment calculator built with **React** and **Vite**. Enter an initial amount, an annual contribution, an expected return and a duration, and the app immediately shows how the investment grows year by year.

The results update on every change in the inputs, with no "Calculate" button.

### Features

- **Live calculation:** the table is recalculated as you type.
- **Year-by-year breakdown:** investment value, interest for the year, total interest and invested capital.
- **Input validation:** the table is shown only when the duration is at least 1 year.
- **Currency formatting:** amounts are shown in US dollars (`$11,800`).
- **Mobile friendly:** on phones the inputs are laid out in a grid and the table scrolls horizontally.

### Tech stack

| | |
|---|---|
| [React 19](https://react.dev/) | UI components and state (`useState`) |
| [Vite](https://vitejs.dev/) | dev server and build |
| CSS | custom styles with media queries for mobile |

### Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/Kaligulai/Financial_calculator.git
cd Financial_calculator
npm install
npm run dev
```

Then open http://localhost:5173/ in your browser.

| Command | What it does |
|---|---|
| `npm run dev` | starts the dev server with hot reload |
| `npm run build` | creates a production build in `dist/` |
| `npm run preview` | serves the production build locally |
| `npm run lint` | checks the code with ESLint |

### Project structure

```
src/
├── App.jsx                 # root component: holds the state and validates input
├── index.jsx               # entry point, mounts App into #root
├── index.css               # all styles, including mobile
├── assets/
│   └── investment-calculator-logo.png
├── components/
│   ├── Header.jsx          # logo and title
│   ├── UserInput.jsx       # the four input fields
│   └── Results.jsx         # the results table
└── util/
    └── investment.js       # calculations and currency formatting
```

### How it works

#### Data flow

```
          ┌──────────── App ────────────┐
          │  userInput (useState)       │
          │  InputisValid               │
          └──────┬───────────────┬──────┘
   userInput +   │               │  userInput
   onChange      ▼               ▼  (only when valid)
            UserInput         Results
          (input fields)   (yearly table)
```

1. **`App`** keeps all input values in a single object:
   ```js
   { initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10 }
   ```
2. **`UserInput`** shows the values in the fields and calls `onChange(key, newValue)` on every change. The state itself lives in `App` (*lifting state up*).
3. **`App`** checks that `duration >= 1` and only then renders `Results`. Otherwise the empty results array would cause an error.
4. **`Results`** passes the data to `calculateInvestmentResults()` and uses `.map()` to render one table row per year.

#### Formulas

For each year:

```
interest for year  = value × (expected return / 100)
new value          = value + interest for year + annual contribution
```

In the table:

```
total interest     = value − annual contribution × year − initial investment
invested capital   = value − total interest
```

#### Example

Initial investment $10,000, annual contribution $1,200, expected return 6%, duration 10 years:

| Year | Investment Value | Interest (Yearly) | Total Interest | Invested Capital |
|---:|---:|---:|---:|---:|
| 1 | $11,800 | $600 | $600 | $11,200 |
| 2 | $13,708 | $708 | $1,308 | $12,400 |
| 3 | $15,730 | $822 | $2,130 | $13,600 |
| … | … | … | … | … |
| 10 | $33,725 | $1,841 | $11,725 | $22,000 |

> The results are approximate and are not financial advice.

---

## Български

Инвестиционен калкулатор, написан на **React** и **Vite**. Въвеждаш начална сума, годишна вноска, очаквана доходност и срок, а приложението веднага показва по години как расте инвестицията.

Изчислението се обновява при всяка промяна в полетата, без бутон „Изчисли“.

### Възможности

- **Изчисление на живо:** таблицата се преизчислява при всяко въвеждане.
- **Разбивка по години:** стойност на инвестицията, лихва за годината, обща лихва и вложен капитал.
- **Проверка на данните:** таблицата се показва само при срок от поне 1 година.
- **Форматиране като валута:** сумите са в щатски долари (`$11,800`).
- **Mobile friendly:** на телефон полетата се подреждат в решетка, а таблицата се скролва хоризонтално.

### Технологии

| | |
|---|---|
| [React 19](https://react.dev/) | UI компоненти и state (`useState`) |
| [Vite](https://vitejs.dev/) | dev сървър и build |
| CSS | собствени стилове с медийни заявки за мобилни устройства |

### Стартиране

Нужен е [Node.js](https://nodejs.org/) (версия 18 или по-нова).

```bash
git clone https://github.com/Kaligulai/Financial_calculator.git
cd Financial_calculator
npm install
npm run dev
```

След това отвори http://localhost:5173/ в браузъра.

| Команда | Какво прави |
|---|---|
| `npm run dev` | пуска dev сървър с автоматично презареждане |
| `npm run build` | прави production build в папка `dist/` |
| `npm run preview` | показва готовия build локално |
| `npm run lint` | проверява кода с ESLint |

### Структура на проекта

```
src/
├── App.jsx                 # главен компонент: държи state-а и проверява данните
├── index.jsx               # входна точка, монтира App в #root
├── index.css               # всички стилове, вкл. мобилните
├── assets/
│   └── investment-calculator-logo.png
├── components/
│   ├── Header.jsx          # лого и заглавие
│   ├── UserInput.jsx       # четирите полета за въвеждане
│   └── Results.jsx         # таблицата с резултатите
└── util/
    └── investment.js       # сметките и форматирането на валута
```

### Как работи

#### Поток на данните

```
          ┌──────────── App ────────────┐
          │  userInput (useState)       │
          │  InputisValid               │
          └──────┬───────────────┬──────┘
   userInput +   │               │  userInput
   onChange      ▼               ▼  (само ако е валиден)
            UserInput         Results
         (полета за вход)   (таблица по години)
```

1. **`App`** държи всички въведени стойности в един обект:
   ```js
   { initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10 }
   ```
2. **`UserInput`** показва стойностите в полетата и при промяна извиква `onChange(ключ, нова стойност)`. Самият state се променя в `App`, по шаблона *lifting state up*.
3. **`App`** проверява дали `duration >= 1` и само тогава рендерира `Results`. Иначе празният масив с резултати би предизвикал грешка.
4. **`Results`** подава данните на `calculateInvestmentResults()` и с `.map()` прави по един ред от таблицата за всяка година.

#### Формули

За всяка година:

```
лихва за годината  = стойност × (доходност / 100)
нова стойност      = стойност + лихва за годината + годишна вноска
```

В таблицата:

```
обща лихва         = стойност − годишна вноска × година − начална инвестиция
вложен капитал     = стойност − обща лихва
```

#### Пример

Начална сума $10,000, годишна вноска $1,200, доходност 6%, срок 10 години:

| Year | Investment Value | Interest (Yearly) | Total Interest | Invested Capital |
|---:|---:|---:|---:|---:|
| 1 | $11,800 | $600 | $600 | $11,200 |
| 2 | $13,708 | $708 | $1,308 | $12,400 |
| 3 | $15,730 | $822 | $2,130 | $13,600 |
| … | … | … | … | … |
| 10 | $33,725 | $1,841 | $11,725 | $22,000 |

> Резултатите са приблизителни и не са финансов съвет.
