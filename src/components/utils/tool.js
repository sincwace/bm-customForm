export function isHaveKey(obj, keyName) {
    if (typeof obj === 'object') {
        let keys = Object.keys(obj)
        let pass = false
        if (keys.length === 0) return false

        keys.forEach(i => {
            if (i === keyName) {
                pass = true
            }
        })

        return pass
    }
}

// 数据类型判断
function judgeType(data) {
    if (arguments.length == 0) {
        return '0'; // 无参数传入
    }
    if (data === null) {
        return 'null'
    }
    if (data === undefined && arguments.length > 0) {
        return 'undefined'
    }
    if (data instanceof Function) {
        return 'function'
    }
    if (data instanceof Array) {
        return 'array'
    }
    if (Object.prototype.toString.call(data).slice(8, -1) === 'Object') {
        return 'object'
    }
    if (data instanceof Number || typeof data == 'number') {
        return 'number'
    }
    if (data instanceof String || typeof data == 'string') {
        return 'string'
    }
    if (data instanceof Boolean || typeof data == 'boolean') {
        return 'boolean'
    }
}

// 数据类型验证
export function bmDataCheck(data, type) {
    if (judgeType(data) === type) {
        return true
    } else {
        return false
    }
}

export var bmDataCheckjs = {
    // 空验证
    isEmpty: function (data) {
        if (bmDataCheck(data, 'null')) return false
        if (bmDataCheck(data, 'string') || bmDataCheck(data, 'array')) {
            if (data.length === 0) {
                return false
            }
        }
        return true
    },

    // 手机号验证
    isMobileReg: function (val) {
        var mobileReg = /^((13[0-9])|(14[5|7])|(15[0|1|2|3|5|6|7|8|9])|(17[6|7|8])|18[0-9])\d{8}|(170[0|5|9]\d{7})$/
        if (mobileReg.test(val)) {
            return true
        } else {
            return false
        }
    },

    // 身份证号验证
    isIdCard: function (val) {
        return /^[1-9][0-9]{5}(18|19|(2[0-9]))[0-9]{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)[0-9]{3}[0-9Xx]$/.test(val)
    },

    // 邮箱验证
    isEmail: function (val) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
    },

    // 电话号码验证
    isPhone: function (val) {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(val)
    },

    // 数字验证
    isNumber: function (val) {
        return Object.prototype.toString.call(val).slice(8, -1) === 'Number'
    },

    // url验证
    isURL: function (val) {
        return /^http[s]?:\/\/.*/.test(val)
    },

    // 字符串验证
    isString: function (val) {
        return Object.prototype.toString.call(val).slice(8, -1) === 'String'
    },

    // 日期验证
    isDate: function (str) {
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    },

    // 英文验证
    isEnglish: function (str) {
        return /^[a-zA-Z]+$/.test(str)
    },

    // 中文验证
    isChinese: function (str) {
        return /^[\\u4E00-\\u9FA5]+$/.test(str)
    },

    // 大写验证
    isUpper: function (str) {
        return /^[A-Z]+$/.test(str)
    },

    // 小写验证
    isLower: function (str) {
        return /^[a-z]+$/.test(str)
    },

    // 检测密码强度
    checkPwd: function (str) {
        var Lv = 0;
        if (str.length < 6) {
            return Lv
        }
        if (/[0-9]/.test(str)) {
            Lv++
        }
        if (/[a-z]/.test(str)) {
            Lv++
        }
        if (/[A-Z]/.test(str)) {
            Lv++
        }
        if (/[\.|-|_]/.test(str)) {
            Lv++
        }
        return Lv;
    },

    // 检查小数
    checkDecimal: function () {
        return str.match(/ ^-?\d+(\.\d+)?$/g) === null
    },

    // 最大最小长度检查
    maxMinLength: function (data, max, min) {
        data = parseInt(data)
        if (isNaN(data)) {
            data = 0
        }
        if (data > parseInt(max)) {
            return false
        }
        if (data < parseInt(min)) {
            return false
        }
        return true
    },

    // 字符长度检查
    lengthCheck: function (data, length) {
        if (bmDataCheck(data, 'array')) {
            return !data.length > length
        } else {
            data = data.toString()
            if (bmDataCheck(data, 'string')) {
                return !data.length > length
            } else {
                return false
            }
        }
    },

    // 验证集合
    checkStr: function (str, type) {
        switch (type) {
            case 'mobile':   // 手机号码
                return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
            case 'phone':     // 座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
            case 'idCard':    // 身份证
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
            case 'pwd':     // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                return /^[a-zA-Z]\w{5,17}$/.test(str)
            case 'postal':  // 邮政编码
                return /[1-9]\d{5}(?!\d)/.test(str)
            case 'QQ':      // QQ号
                return /^[1-9][0-9]{4,9}$/.test(str)
            case 'email':   // 邮箱
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
            case 'money':   // 金额(小数点2位)
                return /^\d*(?:\.\d{0,2})?$/.test(str)
            case 'url':     // 网址
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
            case 'ip':      // IP
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
            case 'date':    // 日期时间
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
            case 'number':  // 数字
                return /^[0-9]$/.test(str)
            case 'english': // 英文
                return /^[a-zA-Z]+$/.test(str)
            case 'chinese': // 中文
                return /^[\\u4E00-\\u9FA5]+$/.test(str)
            case 'lower':   // 小写
                return /^[a-z]+$/.test(str)
            case 'upper':   // 大写
                return /^[A-Z]+$/.test(str)
            case 'HTML':    // HTML标记
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)

            default:
                return true
        }
    }
}