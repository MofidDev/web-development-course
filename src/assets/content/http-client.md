## فلسفه ارتباط با API

- تعداد قابل توجهی از برنامه‌های فرانت‌اند احتیاج به برقراری ارتباط با یک سرور از طریق پروتکل HTTP دارند تا بتوانند اطلاعاتی را از سرور دریافت کرده یا به آن ارسال کنند. در واقع لازم است برنامه کلاینت به API ها و خدمات بک‌اند دسترسی پیدا کند که این کار بوسیله HTTPClient در فریم‌ورک انگولار به راحتی امکان‌پذیر است و هم‌چنین قابلیت‌های متعددی مثل پشتیبانی از تعیین نوع جواب برگشتی از سرور، رسیدگی به خطاهای احتمالی ارتباط با سرور، امکاناتی برای تست‌پذیری هرچه بیشتر ارتباط با سرور و قابلیت نوشتن میان‌افزارهای حائل بین سرور و کلاینت را ارائه می‌کند. باید توجه داشته باشیم که برای استفاده از HTTPClient به دانش خود درباره Observable ها احتیاج پیدا خواهیم کرد زیرا همانطور که قبلا بیان شد یک کاربرد مهم آن‌ها برای برنامه‌نویسی آسنکرون یا ناهمگام است درست مثل کار با یک API که نمی‌دانیم پاسخ درخواست بعد از چه مدت زمانی بدستمان می‌رسد یا اینکه شاید اصلا پاسخی نیاید و خطا در زمان اجرا رخ دهد؛ هم‌چنین باید از دانش خود درباره پروتکل HTTP استفاده کنیم چون به تمام آن مفاهیم احتیاج داریم و اینجا بطور عملیاتی از طریق Request و Response ارتباط بین سرور و کلاینت برقرار می‌شود. نکته پایانی اینکه برای استفاده از HttpClient باید ماژول HttpClientModule را در فایل app.module.ts به قسمت imports اضافه کنید.

- ```typescript
  import { NgModule } from "@angular/core";
  import { BrowserModule } from "@angular/platform-browser";
  import { HttpClientModule } from "@angular/common/http";

  @NgModule({
    imports: [
      BrowserModule,
      // import HttpClientModule after BrowserModule.
      HttpClientModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  ```

## Reading Config File

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-reading-config-file?ctl=1&embed=1"></iframe>

## برای مطالعه بیشتر

- https://angular.io/guide/http
