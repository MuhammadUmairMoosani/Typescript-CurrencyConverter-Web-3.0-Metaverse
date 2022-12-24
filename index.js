import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgGreenBright("Welcome to Currency Converter Application"));
const countries = [
    {
        currency: "USD",
        currencyName: "US dollar",
        usdRate: 1
    },
    {
        currency: "JPY",
        currencyName: "Japanese yen",
        usdRate: 0.0075
    },
    {
        currency: "BGN",
        currencyName: "Bulgarian lev",
        usdRate: 0.5451
    },
    {
        currency: "CZK",
        currencyName: "Czech koruna",
        usdRate: 0.0438
    },
    {
        currency: "DKK",
        currencyName: "Danish krone",
        usdRate: 0.1427
    },
    {
        currency: "GBP",
        currencyName: "Pound sterling",
        usdRate: 1.2052
    },
    {
        currency: "HUF",
        currencyName: "Hungarian forint",
        usdRate: 0.0026
    },
    {
        currency: "PLN",
        currencyName: "Polish zloty",
        usdRate: 0.2287
    },
    {
        currency: "RON",
        currencyName: "Romanian leu",
        usdRate: 0.2165
    },
    {
        currency: "SEK",
        currencyName: "Swedish krona",
        usdRate: 0.0949
    },
    {
        currency: "CHF",
        currencyName: "Swiss franc",
        usdRate: 1.0716
    },
    {
        currency: "ISK",
        currencyName: "Icelandic krona",
        usdRate: 0.0069
    },
    {
        currency: "NOK",
        currencyName: "Norwegian krone",
        usdRate: 0.1009
    },
    {
        currency: "HRK",
        currencyName: "Croatian kuna",
        usdRate: 0.1408
    },
    {
        currency: "TRY",
        currencyName: "Turkish lira",
        usdRate: 0.0535
    },
    {
        currency: "AUD",
        currencyName: "Australian dollar",
        usdRate: 0.6705
    },
    {
        currency: "BRL",
        currencyName: "Brazilian real",
        usdRate: 0.1937
    },
    {
        currency: "CAD",
        currencyName: "Canadian dollar",
        usdRate: 0.7346
    },
    {
        currency: "CNY",
        currencyName: "Chinese yuan renminbi",
        usdRate: 0.1431
    },
    {
        currency: "HKD",
        currencyName: "Hong Kong dollar",
        usdRate: 0.1281
    },
    {
        currency: "IDR",
        currencyName: "Indonesian rupiah",
        usdRate: 0.000064
    },
    {
        currency: "ILS",
        currencyName: "Israeli shekel",
        usdRate: 0.2855
    },
    {
        currency: "INR",
        currencyName: "Indian rupee",
        usdRate: 0.0120
    },
    {
        currency: "KRW",
        currencyName: "South Korean won",
        usdRate: 0.00078
    },
    {
        currency: "MXN",
        currencyName: "Mexican peso",
        usdRate: 0.0515
    },
    {
        currency: "MYR",
        currencyName: "Malaysian ringgit",
        usdRate: 0.2260
    },
    {
        currency: "NZD",
        currencyName: "New Zealand dollar",
        usdRate: 0.6295
    },
    {
        currency: "PHP",
        currencyName: "Philippine peso",
        usdRate: 0.0181
    },
    {
        currency: "SGD",
        currencyName: "Singapore dollar",
        usdRate: 0.7399
    },
    {
        currency: "THB",
        currencyName: "Thai baht",
        usdRate: 0.0287
    },
    {
        currency: "ZAR",
        currencyName: "South African rand",
        usdRate: 0.0588
    }
];
const selectCurrency = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: countries.map(item => `${item.currency} ${item.currencyName}`),
        message: "Please select currency from",
    },
    {
        type: "list",
        name: "to",
        choices: countries.map(item => `${item.currency} ${item.currencyName}`),
        message: "Please select currency to",
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter amount you want to convert"
    }
]);
const { from, to, amount } = selectCurrency;
if (from && to) {
    const fromIndex = countries.findIndex(item => `${item.currency} ${item.currencyName}` === from);
    const toIndex = countries.findIndex(item => `${item.currency} ${item.currencyName}` === to);
    const fromObj = countries[fromIndex];
    const toObj = countries[toIndex];
    console.log(chalk.green(`Your converted currency amount is ${((amount * fromObj.usdRate) / toObj.usdRate).toFixed(2)}`));
}
else {
    console.log(chalk.red("Something when wrong!"));
}
