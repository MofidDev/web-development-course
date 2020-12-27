## فلسفه وجود الگوی observer

- یک مفهوم بسیار مهم در فریم‌ورک انگولار موضوع Observable ها است که از آن‌ها برای پاس دادن مقادیر بین قسمت‌های مختلف برنامه استفاده می‌شود. از این تکنیک مکرراً در فریم‌ورک انگولار استفاده می‌شود و یک راه پیشنهادی برای مدیریت رویدادها، برنامه‌نویسی ناهمگام یا آسنکرون و مدیریت چندمقداری است. شایان ذکر است که الگوی observer یک الگوی طراحی نرم‌افزار است که یک شئ بنام subject یک لیست از اشیاء دیگری که به خودش وابستگی دارند را نگهداری می‌کند که به آن‌ها observers می‌گویند و خود subject هر وقت که وضعیت تغییر می‌کند به همه‌ی observer ها خبر می‌دهد و مقدار یا وضعیت جدید را به آن‌ها ارسال می‌کند. این الگو بسیار شبیه به الگوی publish/subscribe می‌باشد البته با آن یکسان نیست. موضوع مهم دیگر آنکه فرقی نمی‌کند که مقدار مورد انتظار شما یک استریم از کلیدهایی است که کاربر می‌فشارد یا HTTP response است یا یک تایمر زمانی یا هر چیزی دیگر در هر صورت شما در برنامه‌نویسی Observable ها تنها باید به فکر subscribe کردن به observable باشید و از مقادیری که به دستتان می‌رسد استفاده کنید و هر وقت هم کارتان تمام شد باید unsubscribe کنید. البته گاهی اوقات به شکل خودکار unsubscribe انجام می‌شود مثل وقتی که فقط قرار است یک مقدار دریافت شود یا وقتی که خود فریم‌ورک انگولار عملیات unsubscribe را انجام می‌دهد.

## Using Route Params

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-simple-routing-params?ctl=1&embed=1&file=src/app/app.component.html"></iframe>

## Simple Live Clock

- <iframe height="512" style="width: 100%;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" src="https://stackblitz.com/edit/angular-ivy-live-clock?ctl=1&embed=1&file=src/app/app.component.ts"></iframe>

## برای مطالعه بیشتر

- https://www.learnrxjs.io/
