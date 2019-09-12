---
title: 记一次http升级https
date: '2019-09-12'
spoiler: acme.sh可让全站点都支持HTTPS 🎉
---

## CentOS 7 使用 acme.sh 自动申请免费 SSL 证书

### 安装  

1. ```curl https://get.acme.sh | sh``` 用于安装 acme.sh
2. 安装完毕之后, 退出登录，再重新登录，或者执行一下 ```source ~/.bashrc```　
3. ```acme.sh -v``` 可查看版本号
***

### 申请证书  

[How to use DNS API](https://github.com/Neilpang/acme.sh/blob/master/dnsapi/README.md)  找到自己的 DNS 服务商对应的命令，如阿里云的:  

The Ali_Key and Ali_Secret will be saved in ```~/.acme.sh/account.conf``` and will be reused when needed.
```
# 换成自己的 AccessKeyID ID 和 AccessKeySecret
export Ali_Key="your Ali_Key"
export Ali_Secret="your Ali_Secret"
```
然后执行以下命令
```
# 换成自己的域名，多个域名添加多个 "-d <doman>"，支持泛域名
acme.sh --issue --dns dns_ali -d kaier33.top -d *.kaier33.top
```

+ 阿里云推荐使用 [子用户AccessKey](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fram.console.aliyun.com%2F#/user/list)，然后只给予子用户 “AliyunDNSFullAccess“ 权限。
+ 阿里云用户安全组需要启用 443 端口

***
### 保存证书  

1. 创建保存证书的目录：  
```
# 换成自己的目录名称
mkdir -p /etc/nginx/ssl
```
2. 保存证书并重启 nginx：
```
# 换成自己的域名
acme.sh --install-cert -d kaier33.top \
--key-file        /etc/nginx/ssl/kaier33.top.key \
--fullchain-file  /etc/nginx/ssl/fullchain.cer \
--reloadcmd      "sudo nginx -s reload"
```

***

### 自动更新 acme.sh  

```
acme.sh --upgrade --auto-upgrade
```
***

### nginx 配置  

1. 生成 DH 密钥参数
```
# 换成自己保存证书的路径
openssl dhparam 2048 -out /etc/nginx/ssl/dhparam.pem
```
2. SSL 配置 ```vim /etc/nginx/conf.d/ssl.conf```  
在 ```/etc/nginx/conf.d/``` 目录下创建 SSL 配置文件：  

```

# certs sent to the client in SERVER HELLO are concatenated in ssl_certificate
ssl_certificate /etc/nginx/ssl/fullchain.cer;
ssl_certificate_key /etc/nginx/ssl/kaier33.top.key;
ssl_session_timeout 1d;
ssl_session_cache shared:SSL:50m;
ssl_session_tickets off;

# Diffie-Hellman parameter for DHE ciphersuites, recommended 2048 bits
ssl_dhparam /etc/nginx/ssl/dhparam.pem;

# intermediate configuration. tweak to your needs.
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers 'ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS';
ssl_ecdh_curve secp384r1;
ssl_prefer_server_ciphers on;

# fetch OCSP records from URL in ssl_certificate and cache them
ssl_stapling on;
ssl_stapling_verify on;
resolver 223.5.5.5 223.6.6.6 114.114.114.114 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 10s;

# HSTS (ngx_http_headers_module is required) (31536000 seconds ≈ 1 year)
add_header Strict-Transport-Security 'max-age=31536000; includeSubdomains; preload';

# only allow frames form same origin
add_header X-Frame-Options SAMEORIGIN;

# no MIME-sniffing for Content-Type
add_header X-Content-Type-Options nosniff;

# hide nginx version
server_tokens off;

```

+ `ssl_certificate` ，`ssl_certificate_key` ， `ssl_dhparam` 换成自己文件的路径。
+ 这种单独的配置文件将直接被 `nginx.conf` 加载，在 http 域下生效，所有 server 都共享相同的 SSL 配置。如果想每个 server 单独配置，则添加配置代码到对应的 server 域下面。  

***

### Server配置  

在 `/etc/nginx/conf.d/` 目录下创建网站的配置文件：
```
vim /etc/nginx/conf.d/kaier33.top.conf
```
```
#　这里指向的是一个nginx静态网页,视自身情况做更改
server {
  listen 80;
  server_name kaier33.top;
  return 301 https://$http_host$request_uri;
}

# https for kaier33.top
server {
  listen 443;
  ssl on;
  server_name kaier33.top;
  root /home/kaier33/blog_manage/client;
  index index.html;
}
```
```vim /etc/nginx/nginx.conf``` 把里面的serve 不需要用的注释掉  
然后重启nginx  ```sudo nginx -s reload```   

***

### SSL 安全检测
  
检测地址：https://www.ssllabs.com/ssltest/    

输入域名，正常情况下检测结果应为 A+ 。

![result](https://i.ibb.co/L570LFj/ssl.png)

然后就阔以愉快的玩耍啦~
<!-- [end](/thanks watch/) -->