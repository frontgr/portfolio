## Для чего нужен Webpack?Всё просто - Webpack из вашего много файлного проекта собирает весь сайт в одну папку(./DIST),минимизируя код и файлы.Если проект содержит в себе один JS-файл который импортирует что-то из других файлов,то Webpack сделает все за вас и соберет все в один 'bundle.js'.Webpack из коробки умеет собирать ТОЛЬКО js/json файлы. Для того ,что-бы Webpack смог взаимодействовать с html,css,svg и т.п - нам надо установить лоадеры(loaders).  

## Настраивать вебпак дело муторное ,особенно когда ты в нем не разбираешься...Вот лоадеры которые были использованны для сборки странички:  
    - ```"copy-webpack-plugin": "^12.0.2"```  
    - ```"css-loader": "^7.1.2"```  
    - ```"css-minimizer-webpack-plugin": "^7.0.0"```  
    - ```"html-webpack-plugin": "^5.6.0"```  
    - ```"mini-css-extract-plugin": "^2.9.0"```  
    - ```"webpack": "^5.91.0"```  
    - ```"webpack-cli": "^5.1.4"```  
- [**webpack и webpack-cli**](https://www.npmjs.com/package/webpack) - без установки вебпака,вебпаком мы наверно не сможем пользоваться<br>
- [**mini-css-extract-plugin**](https://www.npmjs.com/package/mini-css-extract-plugin) - данный лоадер собирает css-код ИЗ js-файла(немного не удобно) вы можете увидеть строку 'import "../css/main.css"' по пути './src/scripts/index.js'<br>
- [**css-minimizer-webpack-plugin**](https://www.npmjs.com/package/css-minimizer-webpack-plugin) - из названия понятно,что этот лоадер отвечает за минимизацию ксс.<br>
- [**css-loader**](https://www.npmjs.com/package/webpack/css-loader) - интрепретирует '@import' и 'url()' --> 'import()' и 'require()'<br>
- [**html-webpack-plugin**](https://www.npmjs.com/package/webpack/html-webpack-plugin) - Этот лоадер используется для того что-бы вебпак мог в html(писал выше,что вебпак не может).<br>
- [**copy-webpack-plugin**](https://www.npmjs.com/package/webpack/copy-webpack-plugin) - Этот лоадер я решил загрузить,потому-что не получалось разобраться со сборкой картинок,как костыль наверно пойдет. Просто перекидывает картинки из src в dist<br>

### команды установки npm-пакетов представленны в [readme.md](./readme.md) 





