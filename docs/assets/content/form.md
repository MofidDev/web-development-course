## فلسفه وجود فرم‌های ورود اطلاعات

- مدیریت و رسیدگی به ورودی‌های کاربر اساس خیلی از برنامه‌های تحت وب است. در برنامه‌ها از فرم ورود اطلاعات برای ورود کاربر به سیستم، بروزرسانی اطلاعات پروفایل یا گرفتن اطلاعات مهم استفاده می‌کنیم که در همه این موارد در حال پیاده‌سازی و اجرای یک data-entry هستیم؛ یعنی ورود اطلاعات را برای کاربر امکان‌پذیر کرده‌ایم تا برنامه ورودی‌های لازم را از کاربر بگیرید. در فریم‌ورک انگولار دو شیوه مهم برای مدیریت و رسیدگی به فرم‌های ورود اطلاعات تعبیه شده است که یک روش template-driven و دیگری reactive نام دارد. در این بخش سراغ روش مدرن reactive می‌رویم چون دسترسی مستقیم به شئ متناظر با فرم را فراهم می‌کند و در مقایسه با روش template-driven، قدرتمند‌تر، مقیاس‌پذیرتر، قابل استفاده مجدد بیشتر و قابل تست‌پذیری بیشتر و راحت‌تر است. نکته پایانی اینکه برای استفاده از فرم‌های reactive باید ماژول ReactiveFormsModule را در app.module.ts به قسمت imports اضافه کنید. هم‌چنین اگر ماژول FormsModule در قسمت imports آمده است آن را حذف کنید چون این ماژول برای حالت template-driven کاربرد دارد.

- ```typescript
  import { ReactiveFormsModule } from "@angular/forms";

  @NgModule({
    imports: [
      // other imports ...
      ReactiveFormsModule,
    ],
  })
  export class AppModule {}
  ```

## First Reactive Form

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-simple-reactive-form?ctl=1&embed=1&file=src/app/app.component.ts"></iframe>

## برای مطالعه بیشتر

- https://angular.io/guide/forms-overview
- https://angular.io/guide/reactive-forms
