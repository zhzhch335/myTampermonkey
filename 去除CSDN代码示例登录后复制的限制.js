// ==UserScript==
// @name         去除CSDN代码示例登录后复制的限制
// @namespace    https://github.com/zhzhch335/myTampermonkey
// @version      1.1
// @description  解决未登录时CSDN不能复制代码的问题
// @author       zhzhch335
// @match        http*://blog.csdn.net/*/article/details/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelectorAll("code").forEach(function(item) {
        item.style = item.style + ";user-select: text !important;";
        return item;
    })
})();
