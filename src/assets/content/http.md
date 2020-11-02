## مفهوم http transaction

- به مجموعه شامل یک درخواست و پاسخ به این درخواست که بین کلاینت و سرور مبادله می‌شود یک تراکنش http می‌گوییم.

- http request: درخواست کلاینت به سرور
- http response: پاسخ سرور برای کلاینت

## با http چه فایل‌هایی را می‌توانیم منتقل کنیم؟

- Text Documents: html, xml, json
- Multimedia: mp4, jpg, mkv
- Application: pdf, zip, rar
- ...

## http is stateless یعنی چه؟

- طراحی پروتکل http به گونه‌ای است که یادش نمی‌ماند کلاینتی که درخواست ارسال می‌کند چه کسی است؟ آیا قبلا درخواست ارسال کرده است یا نه؟ هویت او احراز شده است یا نه؟ به عبارت دیگر هر تراکنش http مستقل از هر تراکنش دیگر اتفاق می‌افتد و برای نگهداری وضعیت کاربر باید از مکانیزم دیگری در کنار http استفاده کنیم.

## چرا پروتکل http را stateless طراحی کردند؟

- high performance
- low complexity

## مفهوم uniform resource locator

- در پروتکل http برای ارسال درخواست به سرور باید از یک آدرس برای مشخص کردن مقصد درخواست استفاده کنیم.

- این آدرس فرمت مشخصی دارد که به آن URL می‌گوییم.
  - ```
    <protocol(scheme)>://<user>:<pass>@<host>:<port>/<path>?<query>#<frag>
    ```

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

- **2xx** _Success_

  - 200 OK
  - 201 Created
  - 204 No Content

- **3xx** _Redirection_

  - 301 Moved Permanently
  - 302 FOUND

- **4xx** _Client Error_

  - 403 Forbidden
  - 405 Method Not Allowed
  - 422 Unprocessable Entity
  - 429 Too Many Requests
  - 451 Unavailable For Legal Reasons

- **5xx** _Server Error_

  - 500 Internal Server Error
  - 501 Not Implemented
  - 502 Bad Gateway
  - 503 Service Unavailable

## مفهوم http header

- هدرها اطلاعات تکمیلی درباره هر تراکنش http را نگهداری می‌کنند.

- هدر ممکن است در req یا res یا هر دو ظاهر شود.

## چگونه stateless بودن http را برطرف کنیم؟

- HTTP Cookie
- JSON Web Token (JWT)

## احراز هویت در http

- کلاینت همیشه باید خود را به سرور معرفی کند؛ چون از پروتکل http استفاده می‌کنیم و این پروتکل stateless طراحی شده است.

- راه‌های متداول احراز هویت:
  - Session Based Authentication
    - <img class="img-fluid" src="./assets/image/session_based_authentication.jpg" />
  - Token Based Authentication
    - <img class="img-fluid" src="./assets/image/token_based_authentication.jpg" />

## مفهوم امضای دیجیتال

- public key & private key
- cryptography algorithms
  - HS256
  - RS256

## مفهوم proxy

- پراکسی به بیان ساده یک کامپیوتر است که میان کلاینت و سرور قرار گرفته و بعنوان واسط نقش‌های مختلفی ایفا می‌کند.

- انواع پراکسی‌ها

  - forward proxy
    - <img class="img-fluid" src="./assets/image/forward_proxy.jpg">
  - reverse proxy
    - <img class="img-fluid" src="./assets/image/reverse_proxy.jpg">

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

## ابزارهای کار با پروتکل http

- نصب postman

  - پستمن از طریق پروتکل HTTP و شبیه یک مرورگر عمل می‌کند اما امکانات بسیار زیادی برای تست و مستندسازی API ها در اختیار برنامه‌نویسان قرار می‌دهد.
  - https://www.postman.com

- نصب choco

  - همیشه جای خالی یک Package Manager خوب در ویندوز احساس میشد که چوکو این مسئله را تا حد بسیار زیادی برطرف کرده است.
  - https://chocolatey.org
  - https://chocolatey.org/docs/installation

  - ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

- نصب python

  - ```powershell
    choco install python
    ```
    ```
    python --version
    ```

- نصب httpie

  - ```powershell
    pip install --upgrade pip setuptools
    pip install --upgrade httpie
    ```
    ```
    pip --version
    http --version
    ```

## مشاهده تراکنش‌های پروتکل http

- Chrome DevTools
  - با قسمت توسعه‌دهندگان مرور کروم یا فایرفاکس خیلی کار داریم اما در اینجا فقط به تب Network و قابلیت‌های آن اشاره می‌کنیم.

## مشاهده پیام‌های پروتکل http

- ## httpie

  - ```powershell
    http -v https://httpie.org/hello --offline
    http -v https://httpie.org/hello
    http -v https://httpie.io/hello
    ```

    ```http
    GET /hello HTTP/1.1
    Accept: */*
    Accept-Encoding: gzip, deflate
    Connection: keep-alive
    Host: httpie.io
    User-Agent: HTTPie/2.3.0
    ```

    ```http
    HTTP/1.1 200 OK
    CF-Cache-Status: DYNAMIC
    CF-RAY: 5ebf78c6f9e106dd-LHR
    Connection: keep-alive
    Content-Length: 116
    Content-Type: text/x-rst;charset=utf-8
    Date: Mon, 02 Nov 2020 17:10:55 GMT
    Etag: "234b9a1fe19f125356a5396c8cc72d54493a2eef"
    Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
    NEL: {"report_to":"cf-nel","max_age":604800}
    Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report?s=GAvuUd8aA9JxEZZJWqKIXxqKXFdaqfw4BWGXbufeP9t9xrQlj3k06t84gWzBz%2FcstOTnmcsKwTyVkGQs1lMjB%2F30mHl5f4XoqfE%3D"}],"group":"cf-nel","max_age":604800}
    Server: cloudflare
    Set-Cookie: __cfduid=d3bb513fdd24ed832262d3f51b6865ac01604337055; expires=Wed, 02-Dec-20 17:10:55 GMT; path=/; domain=.httpie.io; HttpOnly; SameSite=Lax; Secure
    cf-request-id: 062b89d05d000006ddae349000000001

    Hello, World! 👋
    ~~~~~~~~~~~~~~~~

    Thank you for trying out HTTPie 🥳

    I hope this will become a friendship.

    ```

## اتصال به یک api آزمایشی با postman

- httpbin

  - ```
    https://httpbin.org/post
    https://httpbin.org/image
    https://httpbin.org/uuid
    ```

    ```
    https://httpbin.org/cookies/set?name=hosein
    https://httpbin.org/cookies
    https://httpbin.org/cookies Cookie:name=hosein;family=ghanbari
    https://httpbin.org/cookies/delete?family=ghanbari Cookie:name=hosein;family=ghanbari
    ```

## مشاهده کوکی‌های فعال در یک صفحه وب

- EditThisCookie

## مشاهده تکنولوژی‌های یک صفحه وب

- Wappalyzer

## برای مطالعه بیشتر

- [Hypertext Transfer Protocol -- HTTP/1.0](https://tools.ietf.org/html/rfc1945)
- [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2068)
- [Hypertext Transfer Protocol Version 2 (HTTP/2)](https://tools.ietf.org/html/rfc7540)
- [HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
- [JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [The 'Basic' HTTP Authentication Scheme](https://tools.ietf.org/html/rfc7617)
- [HTTP Digest Access Authentication](https://tools.ietf.org/html/rfc7616)
- [The OAuth 2.0 Authorization Framework: Bearer Token Usage](https://tools.ietf.org/html/rfc6750)
- [Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986)
