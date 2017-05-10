/**
 * event
 */

function getEvent(e) {
    return e ? e : window.event;
}

function getTarget(e) {
    return e.target || e.srcElement;
}
/**
 * 阻止浏览器默认事件
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function preventDefault(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}
/**
 * 阻止事件冒泡
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function cancelPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

/**
 * 设置剪贴板中的数据
 */
function setClipboardText(event, value){ 
    if (event.clipboardData){ 
        return event.clipboardData.setData("text/plain", value); 
    } else if (window.clipboardData){ 
        return window.clipboardData.setData("text", value); 
    } 
}

/**
 * 访问剪贴板中的数据
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function getClipboardText(event){
    var clipboardData = (event.clipboardData || window.clipboardData);
    return clipboardData;
}

/**
 * 能够取得鼠标滚轮增量(delta)的方法
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function getWheelDelta(event){
    if(event.wheelDelta){
        return(client.engine.opera && client.engine.opera < 9.5? -event.wheelDelta:event.wheelDelta);
    }else{
        return -event.detail * 40;//firefox中的值为+3表示向上滚，-3表示向下滚
    }
}

/**
 * 跨浏览器的方式取得字符编码
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function getCharCode(event){
    if(typeof event.charCode == "number"){
        return event.charCode;
    }else{
        return event.keyCode;
    }
}

var addEvent = (function() {
    if (typeof window.addEventListener === 'function') {
        return function(element, type, handler, capture) {
            element.addEventListener(type, function(e) {
                handler.call(element, e);
            }, (capture));
        };
    } else if (typeof document.attachEvent === 'function') {
        return function(element, type, handler, capture) {
            element.attachEvent('on' + type, function(e) {
                handler.call(element, e);
            });
        };
    } else {
        return function(el, type, fn) {
            el['on' + type] = fn;
        }
    }
})();

var removeEvent = (function() {
    if (typeof window.removeEventListener === 'function') {
        return function(element, type, handler, capture) {
            element.removeEventListener(type, function(e) {
                handler.call(element, e);
            }, (capture));
        };
    } else if (typeof document.detachEvent === 'function') {
        return function(element, type, handler, capture) {
            element.detachEvent('on' + type, function(e) {
                handler.call(element, e);
            });
        };
    } else {
        return function(el, type, fn) {
            el['on' + type] = null;
        }
    }
})();


/**
 * 获取样式
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

/**
 * 获取所在位置
 */
function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    //return json
    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop };
}


/**
 * 获取变量类型
 */
function getType(stype) {
    if (stype === null) {
        return 'null'; // null
    } else if (typeof stype == 'object') {
        // except null ,array or object
        if (Array.isArray(stype)) {
            return 'array';
        } else {
            return 'object'
        }
    } else {
        return typeof stype; // number,string,boolean,undefined,function
    }
}


/**
 * 获取元素在同级当中的索引
 * @param obj
 * @returns {number}
 */
function getIndex(obj) {
    var aBrother = obj.parentNode.children;
    for (var i = 0; i < aBrother.length; i++) {
        if (aBrother[i] == obj) {
            return i;
        }
    }

}


/**
 * 判断是否是原型中的属性
 * @param object
 * @param name
 * @returns {boolean}
 */
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}


/**
 * 生成[min,max)之间的随机数
 * Math.floor() 向下取整
 * @param min
 * @param max
 * @returns {*}
 */
function randomInt(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}


function addClass(element, klsName) {
    if (element.classList) {
        element.classList.add(klsName)
    } else {
        element.className += ' ' + klsName;
    }
}

function removeClass(element, klsName) {
    if (element.classList)
        element.classList.remove(className);
    else
        element.className = element.className.replace(new RegExp('(^|\\b)' + klsName.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}



function insertAfter(element, htmlString) {
    element.insertAdjacentHTML('afterend', htmlString);
}


function insertBefore(element, htmlString) {
    element.insertAdjacentHTML('beforebegin', htmlString);
}
// get Children
function getChildren(parent) {
    var children = [];
    if (!parent.children) {
        for (var i = el.children.length; i--;) {
            // Skip comment nodes on IE8
            if (el.children[i].nodeType != 8)
                children.unshift(el.children[i]);
        }
        return children;
    } else {
        //IE 9+
        element.children
    }
}


// copy node
function cloneNode(element) {
    return element.cloneNode(true);
}

/**
 * 判断element是否包含selector
 */
function isContains(element, selector) {
    return element.querySelector(selector) !== null
}

// forEach
function forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
}
forEachElement(selector, function(el, i) {

});
// IE 9+ !!!! html collection
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i) {

});

function empty(element) {
    while (element.firstChild)
        element.removeChild(el.firstChild);
}
el.innerHTML = ''; // IE 9+






// Array.from 将一个 ArrayLike 对象或者 Iterable 对象转换成一个 Array
const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
)();


// HTMLCollection 元素遍历
// IE9+
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i) {

});
//IE8+
function forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
}
forEachElement(selector, function(el, i) {

});



// filter
function filter(selector, filterFn) {
    var elements = document.querySelectorAll(selector);
    var out = [];
    for (var i = elements.length; i--;) {
        if (filterFn(elements[i]))
            out.unshift(elements[i]);
    }
    return out;
}
filter(selector, filterFn);
// IE 9+
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);

/**
 * 将数组所有元素转为一维数组输出
 * @param arr
 * @param result
 * @returns {*}
 */
function pushElements(arr, result) {
    arr.forEach(function(element) {
        Array.isArray(element) ? pushElements(element, result) : result.push(element);
    });
    return result;
}


/*通过浏览器navigator获得我们当前所在的位置geolocation。
 位置的信息包括经度longitude和纬度latitude。*/
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
}


// 常用的 JavaScript 检测浏览器为 IE 是哪个版本的代码，包括是否是最人极端厌恶的 ie6 识别与检测。
var isIE = !!window.ActiveXObject;
var isIE6 = isIE && !window.XMLHttpRequest;
var isIE8 = isIE && !!document.documentMode;
var isIE7 = isIE && !isIE6 && !isIE8;
if (isIE) {
    if (isIE6) {
        alert("ie6");
    } else if (isIE8) {
        alert("ie8");
    } else if (isIE7) {
        alert("ie7");
    }
}


// 对象转换为数组
var argArray = Array.prototype.slice.call(arguments);
// 验证是否是数字
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// 验证是否是数组
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}



// 获取外层html内容
el.outerHTML

// 获取css样式
getComputedStyle(el)[ruleName];

// 获取文本内容
el.textContent || el.innerText

// has Class
function hasClass(element, klsName) {
    if (element.classList)
        element.classList.contains(klsName);
    else
        new RegExp('(^| )' + klsName + '( |$)', 'gi').test(element.klsName);
}

// Prev
function previousElementSibling(el) {
    do {
        el = el.previousSibling;
    } while (el && el.nodeType !== 1);
    return el;
}
el.previousElementSibling || previousElementSibling(el);

// next
function nextElementSibling(element) {
    do {
        element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
}
el.nextElementSibling || nextElementSibling(el);

// offset

function getOffsetVal(element) {

    var X = element.getBoundingClientRect().left + document.documentElement.scrollLeft;
    var Y = element.getBoundingClientRect().top + document.documentElement.scrollTop;

    return {
        left: X,
        top: Y
    };
}


// offsetParent
el.offsetParent || el

// Outer Height
el.offsetHeight
    // Outer Width
el.offsetWidth
    // parent
el.parentNode

//Outer Height With Margin
function outerHeight(el) {
    var height = el.offsetHeight;
    var style = el.currentStyle || getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
}

outerHeight(el);

// 获取元素left、top
var getElementLeft = function(element) {
    var acturalLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
        acturalLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return acturalLeft;
};

var getElementTop = function(element) {
    var acturalTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null) {
        acturalTop += current.offsetTop;
        current = current.offsetParent;
    }
    return acturalTop;
};

/**
 * 获取浏览器窗口尺寸
 */
function size() {
    var w = 0,
        h = 0;
    if (!window.innerWidth) {
        w = document.documentElement.clientWidth || document.body.clientWidth;
        h = document.documentElement.clientHeight || document.body.clientHeight;
    } else {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    return { width: w, height: h };
}



// position
function getPosition(element) {
    return {
        left: element.offsetLeft,
        top: element.offsetTop
    };
}

// Position Relative To Viewport
el.getBoundingClientRect()


// setText
function setText(element, string) {
    if (element.textContent !== undefined) {
        element.textContent = string;
    } else {
        element.innerText = string;
    }
}

// Siblings
function getSiblings(element) {
    var siblings = Array.prototype.slice.call(element.parentNode.children);

    for (var i = siblings.length; i--;) {
        if (siblings[i] === element) {
            siblings.splice(i, 1);
            break;
        }
    }
}
//Siblings IE9+
Array.prototype.filter.call(el.parentNode.children, function(child) {
    return child !== el;
});



// toggle class
function toggleClass(el, klsName) {
    if (el.classList) {
        el.classList.toggle(klsName);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = -1;
        for (var i = classes.length; i--;) {
            if (classes[i] === klsName)
                existingIndex = i;
        }

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(klsName);

        el.className = classes.join(' ');
    }
}



// ready fn
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
        });
    }
}

//将多个函数添加到onload事件中
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}


// 指定事件触发 IE9+
function triggerEvent(el, myEvent, objData) {
    // objData = {some:'data'}
    if (window.CustomEvent) {
        var event = new CustomEvent('myEvent', {
            detail: objData
        });
    } else {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('myEvent', true, true, objData);
    }

    el.dispatchEvent(event);
}

// trigger Native
function triggerNative(el) {
    if (document.createEvent) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('change', true, false);
        el.dispatchEvent(event);
    } else {
        el.fireEvent('onchange');
    }
}




// 深度扩展
var deepExtend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
            continue;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object')
                    deepExtend(out[key], obj[key]);
                else
                    out[key] = obj[key];
            }
        }
    }

    return out;
};

deepExtend({}, objA, objB);


// bind IE9+
fn.bind(context);

// indexOf  IE8+
function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item)
            return i;
    }
    return -1;
}

indexOf(array, item);


// is Array
function isArray() {
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array';
        };
    }
}

isArray(arr);


// map
function map(arr, fn) {
    var results = [];
    for (var i = 0; i < arr.length; i++)
        results.push(fn(arr[i], i));
    return results;
}

map(array, function(value, index) {

});



// now
new Date().getTime(); // IE8+
Date.now(); // IE9+


// parse htmlString
var parseHTML = function(str) {
    var el = document.createElement('div');
    el.innerHTML = str;
    return el.children;
};

parseHTML(htmlString);

// 解析JSON
JSON.parse(string);

//Trim 去除空格
function trimStr(string) {
    return string.replace(/^\s+|\s+$/g, '');
}



/** ajax fetch
 * =================================
 * fetch()请求获取的内容是一个 Stream 对象。也就是说，当我们调用 json() 方法时，返回的仍是一个 Promise 对象，这是因为对 stream 的读取也是异步的。
 */
fetch('./api/some.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });






// 继承模式实现
var inherit = (function() {
    var F = function() {};
    return function(C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
    }
}());
