<div dir="rtl" style="text-align:justify;">

# پروتکل HTTP

## مفهوم http transaction

- به مجموعه شامل یک درخواست و پاسخ به این درخواست که بین کلاینت و سرور تبادل می‌شود یک تراکنش http می‌گوییم.

- http request: درخواست کلاینت به سرور
- http response: پاسخ سرور برای کلاینت

## با http چه فایل‌هایی را می‌توانیم منتقل کنیم؟

- Text Documents: html, xml, json
- Multimedia: mp4, jpg, mkv
- Application: pdf, zip, rar

## http is stateless یعنی چه؟ 

- طراحی پروتکل http به گونه‌ای است که یادش نمی‌ماند کلاینتی که درخواست ارسال می‌کند چه کسی است؟ آیا قبلا درخواست ارسال کرده است یا نه؟ هویت او احراز شده است یا نه؟

- به عبارت دیگر هر تراکنش http مستقل از هر تراکنش دیگر اتفاق می‌افتد و برای نگهداری وضعیت کاربر باید از مکانیزم دیگری در کنار http استفاده کنیم.

## چرا پروتکل http را stateless طراحی کردند؟

- high performance
- low complexity

## مفهوم uniform resource locator

- در پروتکل http برای ارسال درخواست به سرور باید از یک آدرس برای مشخص کردن مقصد درخواست استفاده کنیم.

- این آدرس فرمت مشخصی دارد که به آن URL می‌گوییم.
- 
    <div dir="ltr">

    ```
    <protocol(scheme)>://<user>:<pass>@<host>:<port>/<path>?<query>#<frag>
    ```

    </div>

## مفهوم http methods

- هر URL را می‌توانیم با متدهای مختلفی صدا کنیم که هر کدام وظیفه مشخصی را بر عهده دارند و کار مشخصی را انجام می‌دهند.

    - GET
    - POST
    - PUT
    - PATCH
    - DELETE
    - OPTION
    - HEAD

## مفهوم http status codes

- 2xx (Success)
- 3xx (Redirection)
- 4xx (Client Error)
- 5xx (Server Error)

## مفهوم http header

- هدرها اطلاعات تکمیلی درباره هر تراکنش http را نگهداری می‌کنند.

- هدر ممکن است در  req یا res یا هر دو ظاهر شود.

## چگونه stateless بودن http را برطرف کنیم؟

- HTTP Cookie
- JSON Web Token (JWT)

## احراز هویت در http

- کلاینت همیشه باید خود را به سرور معرفی کند. چون از پروتکل http استفاده می‌کنیم و این پروتکل stateless طراحی شده است.

- راه‌های متداول احراز هویت:
    - Session Based Authentication
    - Token Based Authentication

## مفهوم امضای دیجیتال

- public key & private key
- cryptography algorithms
    - HS256
    - RS256

## مفهوم proxy

- پراکسی به بیان ساده یک کامپیوتر است که میان کلاینت و سرور قرار گرفته و بعنوان واسط نقش‌های مختلفی ایفا می‌کند.

- انواع پراکسی‌ها
    - forward proxy
    - reverse proxy

- کاربرد پراکسی‌ها
    - 

## نصب choco

## نصب python

## نصب httpie

## نصب postman

## سایت httpbin

## نصب EditThisCookie

## نصب Wappalyzer

## مشاهده پیام‌های پروتکل http

</div>