# 03 Node.js 简介

## Node.js 是什么

- Node.js 是一个能够在服务器端运行 JavaScript 的开发源代码、跨平台 **JavaScript 运行环境**

- Node 采用 Google 开发的 V8 引擎运行 js 代码，使用**事件驱动**、**非阻塞**和**异步 I/O 模型**等技术来提高性能，可优化应用程序的传输量和规模

- Node 大部分模块都使用 JavaScript 编写。在 Node 出现之前，JS 通常作为客户端程序设计语言使用，以 JS 写出的程序常在用户的浏览器上运行

## 写 Node.js 目的

用 JavaScript 写高性能 Web 服务器

最初起名叫 web.js

## 其它

- Node 是对 ES 标准一个实现，Node 也是一个 JS 引擎

- 通过 Node 可以使 js 代码在服务器端执行

- Node 仅仅对 ES 标准进行了实现，所以在 Node 中不包含 DOM 和 BOM

- Node 中可以使用所有的内建对象
  
  - String Number Boolean Math Date RegExp Function Object Array 都可以使用
  
  - 而 BOM 和 DOM 都不能使用
    
    - 但是可以使用 console
    
    - 也可以使用定时器

- Node 可以在后台编写服务器
  
  - Node 编写服务器都是单线程的服务器

- 传统的服务器是多线程的
  
  - 每进来一个请求，就创建一个线程去处理请求

- Node 服务器是单线程的
  
  - Node 处理请求时是单线程，但是在后台拥有一个 I/O 线程池






