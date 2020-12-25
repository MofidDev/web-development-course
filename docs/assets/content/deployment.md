## فلسفه اهمیت استقرار

- وقتی کار توسعه یک برنامه تحت وب به نقطه‌ای خوب و قابل ارائه می‌رسد برای ارائه دسترسی عمومی به نرم‌افزار باید آن را در یک remote server مستقر و منتشر کنیم که راه‌های مختلفی هم برای این کار وجود دارد و در این مبحث به دو راه مهم آن یعنی انتشار از طریق سرویس surge.sh و از طریق pages.github.com اشاره می‌کنیم. استقرار بطور کلی یعنی آماده‌سازی نرم‌افزار و بستر اجرای نرم‌افزار برای ارائه خدماتی که نرم‌افزار برای آن طراحی و پیاده‌سازی شده است. در طی فرآیند استقرار معمولا سورس‌کد اصلی پروژه را به صورت خام منتشر نمی‌کنیم بلکه یک نسخه فشرده‌تر و با سرعت اجرای بالاتر و اصطلاحاً production-ready را منتشر می‌کنیم. البته موضوع بهینه‌سازی برنامه‌های انگولار یک مبحث جداگانه‌ای است که در این قسمت به آن نمی‌پردازیم.

## نصب ابزارها و پکیج‌های لازم

- ```bash
  npm install -g @angular/cli
  npm install -g node-gyp
  npm install -g windows-build-tools@4.0.0
  npm install -g surge
  ```

## استقرار در surge.sh

- ```
  1) make sure src/environments directory exists

  2) make sure <base href="/"> tag exists

  3) ng build --prod

  4) duplicate ./dist/demo/index.html as ./dist/demo/200.html

  5) surge -p "./dist/demo/"
  ```

## استقرار در pages.github.com

- ```
  1) ng build --prod --output-path docs --base-href /web-development-course/

  2) cp ./docs/index.html ./docs/404.html

  3) git add .

  4) git commit -m "deploy"

  5) git push origin master
  ```

- <img class="img-fluid" src="./assets/image/github_pages.jpg" />

## رفع اشکالات احتمالی

- ```
  1) npm cache clean --force
  2) re-installing all global packages

  3) npm uninstall @angular-devkit/build-angular
  4) npm install --save-dev @angular-devkit/build-angular
  5) https://github.com/felixrieseberg/windows-build-tools/issues/172

  6) npm install --save-dev babel-loader
  ```

## برای مطالعه بیشتر

- https://angular.io/guide/deployment
