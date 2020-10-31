call ng build --prod --output-path docs --base-href /web-development-course/
call cp ./docs/index.html ./docs/404.html
call git add .
call git commit -m "deploy"
call git push origin master
