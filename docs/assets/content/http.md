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
- ...

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
    <div dir="ltr" style="text-align:left;">

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
    - OPTIONS
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

- کلاینت همیشه باید خود را به سرور معرفی کند؛ چون از پروتکل http استفاده می‌کنیم و این پروتکل stateless طراحی شده است.

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
    - To avoid browsing restrictions 
    - To block access to certain content 
    - To protect online identity 
    - Load Balancing
    - Protection from attacks 
    - Caching 
    - SSL encryption
    - Logging
    
</div>

<div dir="rtl" style="text-align:justify;">

# تمارین عملی http

## نصب ابزارهای لازم

- نصب postman
    - پستمن از طریق پروتکل HTTP و شبیه یک مرورگر عمل می‌کند اما امکانات بسیار زیادی برای تست و مستندسازی API ها در اختیار برنامه‌نویسان قرار می‌دهد.
    - https://www.postman.com

- نصب choco
    - همیشه جای خالی یک Package Manager خوب در ویندوز احساس میشد که چوکو این مسئله را تا حد بسیار زیادی برطرف کرده است.
    - https://chocolatey.org
    - https://chocolatey.org/docs/installation
    -
        <div dir="ltr">

        ```
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
        ```

        </div>

- نصب python

    <div dir="ltr" style="text-align:left;">

    ```
    choco install python
    ```
    
    </div>

- نصب httpie

    <div dir="ltr" style="text-align:left;">

    ```
    python --version

    pip install --upgrade pip setuptools

    pip install --upgrade httpie

    pip --version
    ```
   
    </div>

## مشاهده تراکنش‌های پروتکل http

- Chrome DevTools
- با قسمت توسعه‌دهندگان مرور کروم یا فایرفاکس خیلی کار داریم اما در اینجا فقط به تب Network و قابلیت‌های آن اشاره می‌کنیم.

## مشاهده پیام‌های پروتکل http

- httpie
-
    <div dir="ltr" style="text-align:left;">

    ```
    http -v https://httpie.org/hello --offline

    http -v httpbin.org/cookies/set?name=hosein

    http -v httpbin.org/cookies
    
    http -v httpbin.org/cookies Cookie:name=hosein;family=ghanbari
    
    http -v httpbin.org/cookies/delete?family=ghanbari Cookie:name=hosein;family=ghanbari
    ```

    </div>

## اتصال به یک api آزمایشی با postman

- httpbin

    - https://httpbin.org/post
    - https://httpbin.org/image
    - https://httpbin.org/uuid

## مشاهده کوکی‌های فعال در یک صفحه وب

- EditThisCookie

## مشاهده تکنولوژی‌های یک صفحه وب

- Wappalyzer

</div>


