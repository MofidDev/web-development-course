## فلسفه وجود کامپوننت

- براساس آنچه از برنامه‌نویسی پیمانه‌ای یا ماژولار یاد گرفتیم می‌دانیم باید وظایف یک نرم‌افزار را بین اجزای مستقلی که ماژول نام دارد تقسیم کنیم. هر کدام از این جزءها تمام آنچه برای عمل به وظیفه‌ای مشخص لازم دارد را دراختیار دارد. یکی از مفاهیم فریم‌ورک انگولار که ارتباط نزدیکی با برنامه‌نویسی ماژولار دارد مفهوم کامپوننت یا مولفه است که در این بخش به آن می‌پردازیم. کامپوننت ها در واقع زیرمجموعه دستورالعمل‌ها یا directive ها به حساب می‌آیند که منتهی هر مولفه همواره به یک تمپلیت متصل می‌شود. با استفاده از کامپوننت‌ها عناصر جدید html می‌سازیم که تا قبل از این وجود نداشته است. به نوعی html را extend کرده‌ایم. ویژگی selector در اعلان (declaration) مربوط به تعریف کامپوننت باعث شناسایی مولفه در یک تمپلیت می‌شود. به عبارت دیگر هرجا قرار است یک نمونه از این مولفه ساخته شود به وسیله selector آن را ایجاد می‌کنیم.

## دستور ایجاد کامپوننت

- ```bash
  ng g c First
  ```

## First Component

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-first-component?ctl=1&embed=1&file=src/app/app.component.html"></iframe>

## برای مطالعه بیشتر

- https://angular.io/guide/architecture-components
- https://angular.io/guide/component-overview
- https://angular.io/guide/lifecycle-hooks
- https://angular.io/guide/view-encapsulation
- https://angular.io/guide/dynamic-component-loader
- https://angular.io/guide/elements
