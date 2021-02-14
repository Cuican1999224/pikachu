"use strict";

window.onload = function () {
  var duration = 40;
  $('.actions').on('click', 'button', function (e) {
    var $button = $(e.currentTarget); //button

    var speed = $button.attr('data-speed'); // console.log(speed);

    $button.addClass('active').siblings('.active').removeClass('active');

    switch (speed) {
      case 'slow':
        duration = 60;
        break;

      case 'normal':
        duration = 30;
        break;

      case 'fast':
        duration = 10;
        break;
    }
  });

  function writeCode(prefix, code, fn) {
    var container = document.querySelector('#code');
    var styleTag = document.querySelector('#styleTag');
    var n = 0;
    var id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;

      if (n < code.length) {
        setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }

  var code = "\n /*\n  * \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u989C\u8272\n  */\n    .preview {\n        height: 100%;\n        border: 1px solid green;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #FEE433;\n    }\n    \n    .wrapper {\n        width: 100%;\n        height: 165px;\n        position: relative;\n    }\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n */\n    .nose {\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        border-width: 12px;\n        border-color: black transparent transparent;\n        border-radius: 11px;\n        position: absolute;\n        left: 50%;\n        top: 28px;\n        margin-left: -12px;\n    }\n  /*\n   * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n   */\n    .eye {\n        width: 49px;\n        height: 49px;\n        background: #2E2E2E;\n        position: absolute;\n        border-radius: 50%;\n        border: 2px solid #000000;\n    }\n /*\n  * \u773C\u775B\u91CC\u9762\u7684\u73E0\u5B50\n  */\n    .eye::before {\n        content: '';\n        display: block;\n        width: 24px;\n        height: 24px;\n        background: white;\n        position: absolute;\n        border-radius: 50%;\n        left: 6px;\n        top: -1px;\n        border: 2px solid #000;\n    }\n/*\n * \u5DE6\u773C\u5728\u5DE6\u8FB9\n */\n    .eye.left {\n        right: 50%;\n        margin-right: 90px;\n    }\n /*\n  * \u53F3\u773C\u5728\u53F3\u8FB9\n  */\n    .eye.right {\n        left: 50%;\n        margin-left: 90px;\n    }\n    \n    .face {\n        width: 68px;\n        height: 68px;\n        background: #FC0D1C;\n        border: 2px solid black;\n        border-radius: 50%;\n        position: absolute;\n        top: 85px;\n    }\n /*\n  * \u5C06\u8138\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n  */\n    .face.left {\n        right: 50%;\n        margin-right: 116px;\n    }\n    \n    .face.right {\n        left: 50%;\n        margin-left: 116px;\n    }\n /*\n  * \u4E0A\u5634\u5507\n  */\n    .upperLip {\n        height: 25px;\n        width: 80px;\n        border: 2px solid black;\n        position: absolute;\n        top: 50px;\n        background: #FDE348;\n    }\n    \n    .upperLip.left {\n        right: 50%;\n        border-bottom-left-radius: 40px 25px;\n        border-top: none;\n        border-right: none;\n        transform: rotate(-20deg);\n    }\n    \n    .upperLip.right {\n        left: 50%;\n        border-bottom-right-radius: 40px 25px;\n        border-top: none;\n        border-left: none;\n        transform: rotate(20deg);\n    }\n /*\n  * \u4E0B\u5634\u5507\n  */\n    .lowerLip-wrapper {\n        bottom: 0;\n        position: absolute;\n        left: 50%;\n        margin-left: -150px;\n        height: 110px;\n        overflow: hidden;\n        width: 300px;\n    }\n    \n    .lowerLip {\n        height: 3500px;\n        width: 300px;\n        background: #990513;\n        border-radius: 200px/2000px;\n        border: 2px solid black;\n        position: absolute;\n        bottom: 0;\n        overflow: hidden;\n    }\n/*\n * \u5C0F\u820C\u5934\n */\n    .lowerLip::after {\n        content: '';\n        position: absolute;\n        bottom: -20px;\n        width: 100px;\n        height: 100px;\n        background: #FC4A62;\n        left: 50%;\n        margin-left: -50px;\n        border-radius: 50px;\n    } \n /*\n  * \u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60\n  */";
  writeCode('', code);
}.call();