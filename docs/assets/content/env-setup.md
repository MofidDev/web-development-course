## مقدمه

- ابتدا ابزارهای لازم را در سیستم خود نصب کنید و سپس طبق راهنمای این صفحه پروژه خود را ایجاد کنید.

## نرم‌افزارها

- [NodeJS](https://nodejs.org/en)
- [VSCode](https://code.visualstudio.com)

## افزونه‌ها

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## بررسی نصب موفق nodejs و npm

- ```
  node -v
  npm -v
  ```

## ایجاد پروژه بصورت خام

- اگر قرار است بدون فریم‌ورک انگولار پروژه تحت وب بسازیم لازم است طبق یک ساختار مشخص فایل‌ها و پوشه‌هایی را ایجاد کنیم تا پروژه ایجاد شود. این ساختار (Directory Structure) معمولا شبیه به یکی از اشکال زیر می‌باشد.

  - ```
      PROJECT
        css > custom.css
        js > custom.js
        index.html
    ```

  - ```
      PROJECT
        stylesheets > custom.css
        javascripts > custom.js
        index.html
    ```

## ایجاد پروژه انگولار

- اگر قرار است پروژه را با فریم‌ورک انگولار طراحی و برنامه‌نویسی کنید خود فریم‌ورک یک ابزار قدرتمند برای ساخت پروژه در اختیار ما قرار داده است که نام آن Angular-Cli می‌باشد. برای ساخت پروژه انگولار به شکل زیر عمل می‌کنیم:

  - ```bash
    npm i -g @angular/cli
    ng new my-dream-app
    ng serve
    ```
