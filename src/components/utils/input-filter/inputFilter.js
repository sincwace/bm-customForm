const addListener = function(el, type, fn) {
    el.addEventListener(type, fn, false)
}

const spaceFilter = function(el) { // 去除空格
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/\s+/, '')
    })
}

const intFilter = function(el) { // 只保留数字
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/\D/g, '')
    })
}

const intZHENGFilter = function(el) { // 只保留正整数
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/\D/g, '')
        if(el.value < 0) el.value = 0
        console.log(1213)
    })
}

const specialFilter = function(el) { // 去除特殊符号
    addListener(el, 'keyup', () => {
        console.log(123)
        el.value = el.value.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]\~]/)
    })
}

const punctuationFilter = function(el) { // 去除标点
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "")
    })
}

const chineseFilter = function(el) { // 去除中文
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/[\u4e00-\u9fa5]/g, '')
    })
}

const keepChinese = function(el) { // 保留中文
    addListener(el, 'blur', () => {
        el.value = el.value.replace(/[^\u4e00-\u9fa5]/gi, '')
    })
}

const englishFilter = function(el) { // 去除英文
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/[a-zA-Z]/g, '')
    })
}

const keepEnglish = function(el) { // 保留英文
    addListener(el, 'keyup', () => {
        el.value = el.value.replace(/[^a-zA-Z]/gi, '')
    })
}

const allSpecialFilter = function(el) { // 空格 标点 特殊符号全去
    addListener(el, 'keyup', () => {
        // 去除空格 标点
        el.value = 
        el.value.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, '')
        el.value = el.value.replace(/[\'\"\\\/\b\f\n\r\t]/g, '') // 去除转义字符
        el.value = el.value.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]\~]/) // 去除特殊符号
    })
}

export default {
    bind(el, binding) {
        if (el.tagName.toLowerCase() !== 'input') {
            if (el.getElementsByTagName('input')[0].getAttribute('readonly') !== null) {
                el = el.getElementsByTagName('input')[1] || el.getElementsByTagName('textarea')[0]
            } else {
                el = el.getElementsByTagName('input')[0] || el.getElementsByTagName('textarea')[0]
            }
        }
        spaceFilter(el)
        switch (binding.value) {
            case 'keepInt': // 整数
                intFilter(el)
                break
            case 'intZHENG': // 整数
                intZHENGFilter(el)
                break
            case 'removeSpecialChar': // 去特殊字符
                specialFilter(el)
                break
            case 'removeSpace': // 去空格
                spaceFilter(el)
                break  
            case 'removePunctuation': // 去标点符号
                punctuationFilter(el)
                break
            case 'removeChinese': // 去中文
                chineseFilter(el)
                break
            case 'keepChinese': // 中文
                keepChinese(el)
                break    
            case 'removeEnglish': // 去英文
                englishFilter(el)
                break
            case 'keepEnglish': // 英文
                keepEnglish(el)
                break
            case 'removeAllSpecial': // 标点符号、空格、特殊字符
                allSpecialFilter(el)
                break
            default:
                break
        }
    }
}