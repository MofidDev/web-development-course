## فلسفه وجود خدمت

- سرویس یا خدمت یک دسته وسیع و مهم شامل هر مقدار، تابع یا قابلیتی است که یک برنامه برای کارکرد صحیح به آن احتیاج دارد. معمولا سرویس‌ها را به صورت یک کلاس با کاربرد محدود و مشخص تعریف می‌کنیم. باید توجه کنیم در فریم‌ورک انگولار کامپوننت با سرویس از هم جدا شده است تا modularity و reusability افزایش یابد. این تصمیم باعث می‌شود کامپوننت تنها وظایف مرتبط با لایه نمایش را برعهده داشته باشد که باعث بهینه‌تر شدن و مختصرشدن کدهای کامپوننت‌ها می‌شود. بطور خاص کامپوننت برخی وظایف مثل گرفتن اطلاعات از یک وب سرور، اعتبارسنجی اطلاعات ثبت شده یا لاگ زدن از رویدادهای برنامه را می‌تواند به سرویس‌ها محول کند و با این کار این خدمات که آن‌ها را نام بردیم به صورت یک injectable service در هر کامپوننتی قابل استفاده خواهد بود.

## دلایل استفاده از سرویس

- preventing duplication of code
- data storage / management
- cross component communication
- logic centralization
- shared state
- shared logic

## فلسفه وجود تزریق وابستگی

- تزریق وابستگی یا Dependency Injection به این معناست که فریم‌ورک انگولار بطور خودکار و با دستور مستقیم برنامه‌نویس هرجا که کامپوننت به یک سرویس یا هرچیز دیگری برای اجرای درست نیاز دارد آن را به کامپوننت تزریق می‌کند و بطور مثال با تزریق یک سرویس به کامپوننت آن کامپوننت می‌تواند به آن سرویس دسترسی داشته باشد و از خدمات آن استفاده کند. البته همانطور که می‌دانید وابستگی‌ها لزوما سرویس نیستند بلکه می‌توانند هر مقدار یا تابعی باشند که کامپوننت برای اجرای صحیح به آن‌ها لازم دارد. وابستگی‌های یک کامپوننت را معمولا باید بعنوان پارامترهای ورودی به constructor آن کامپوننت مشخص کنیم و با این کار هر وقت که لازم است یک نمونه جدید از کامپوننت ساخته شود انگولار بطور خودکار و از طریق DI نمونه سرویس یا مقدار موردنیاز را تامین کرده و به کامپوننت تزریق می‌کند.

- <img class="img-fluid" src="./assets/image/ng_injector_injects.jpg" />

## Simple Dependency Injection

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-simple-injection?ctl=1&embed=1&file=src/app/message.service.ts"></iframe>

## Cross Component Communication

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-cross-component-communication?ctl=1&embed=1&file=src/app/logout-form/logout-form.component.ts"></iframe>

## برای مطالعه بیشتر

- https://angular.io/guide/hierarchical-dependency-injection
- https://angular.io/guide/singleton-services
- https://angular.io/guide/architecture-services
