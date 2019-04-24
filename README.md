<h2>i18n js translate is a just in time and lightweight translator for websites</h2>

## Usage
1) Add references i18njs into last line body tag.<br>
```<script src="js/i18n.js"></script>```
2) Add "lang" class to the element you want to translate and the key with which you want to identify it.<br> 
```<h1 class="lang" key="key1">Hola</h1>```
3) Create your custom translate dictionary defined key/value translates, replacing "translation.js".<br>
```js
var languages = {
    'es': {
      "key1": "Hola",
      "key2": "Hola2"
      //etc
    }
    , 'en': {
      "key1": "Hello",
      "key2": "Hello2"
      //etc
    }
  };
```
  
**It is very important that you keep the folder structure.

Thanks!
