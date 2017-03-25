# xss-node
xss-node project

mkdir xss

express -e ./

npm install 

npm start   ./xss目录下

反射型攻击存储在url中

xss/routes/routes/index.js 编辑 res.render('index', { title: 'Express',xss:req.query.xss });

xss/routes/views/index.ejs 编辑 <%- xss %>

localhost:3000/?xss=<img%20src="null"%20onerror="alert(1)"/>

close 浏览器防御 xss/routes/routes/index.js 编辑 res.set('X-XSS-Protection',0);

localhost:3000/?xss=<iframe%20src="//baidu.com/t.html"/>

iframe嵌入式攻击
localhost:3000/?xss=<p%20onclick="alert(%27点我%27)">点我</p>

存储在服务端 存储在服务端（数据库，内存，问价系统等）

xss防御措施（编码、过滤、校正）
编码 （对用户输入的数据进行html entity 编码
" 转义字符 &quot；
& 转义字符 &amp；
<转义字符 &lt；
>转义字符 &gt；
不断开空格 转义字符 &nbsp；
