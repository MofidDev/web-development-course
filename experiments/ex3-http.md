<div dir="rtl" style="text-align:justify;">

# تمارین عملی http

## نصب ابزارهای لازم

- نصب postman
    - https://www.postman.com

- نصب choco
    - https://chocolatey.org

- نصب python

    <div dir="ltr" style="text-align:left;">

    ```
    choco install python --pre
    ```
    
    </div>

- نصب httpie

    <div dir="ltr" style="text-align:left;">

    ```
    pip install --upgrade pip setuptools

    pip install --upgrade httpie
    ```
   
    </div>

## مشاهده تراکنش‌های پروتکل http

- chrome dev tools

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

## مشاهده کوکی‌های فعال در یک صفحه وب

- EditThisCookie

## مشاهده تکنولوژی‌های یک صفحه وب

- Wappalyzer

</div>


