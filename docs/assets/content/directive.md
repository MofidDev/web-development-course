## فلسفه وجود دستورالعمل

- در فریم‌ورک انگولار می‌توانید دستورالعمل‌های خودتان را تعریف کنید تا یک رفتار یا ظاهر سفارشی را به عنصرهای DOM وصل کنید. در واقع دستورالعمل‌ها یک رفتار یا ظاهر سفارشی را پیاده‌سازی می‌کنند تا بتوانید قابلیت‌های عناصر صفحه را گسترش دهید. جلوتر خواهیم دید که اگر دستورالعمل دارای تمپلیت باشد تبدیل به یک کامپوننت می‌شود.

## انواع دستورالعمل‌

- **Components**: دستورالعملی که تمپلیت دارد. مثل همه کامپوننت‌هایی که می‌سازیم.
- **Structural directives**: با اضافه یا کم کردن عناصر DOM باعث تغییر ساختار DOM می‌شود. مثل NgFor و NgIf و NgSwitch
- **Attribute directives**: باعث تغییر ظاهر یا رفتار یک عنصر، کامپوننت یا دستورالعمل دیگر می‌شود. مثل NgStyle و NgClass و NgModel

## Using NgFor, NgIf, NgSwitch

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-built-in-structural-directives?ctl=1&embed=1&file=src/app/app.component.html"></iframe>

### Using NgClass, NgStyle, NgModel

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-built-in-attribute-directives?ctl=1&embed=1&file=src/app/app.component.html"></iframe>

## Custom Highlight Directive

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-highlight-directive?ctl=1&embed=1&file=src/app/highlight.directive.ts"></iframe>

## برای مطالعه بیشتر

- https://angular.io/guide/built-in-directives
- https://angular.io/guide/attribute-directives
- https://angular.io/guide/structural-directives
