function stat() {
    let str = document.getElementById("str").value
    let arr = str.split('').sort()
    obj = arr.reduce((pre, item) => {
        pre[item] ? pre[item]++ : pre[item] = 1
        return pre
    }, {})
    document.getElementById('result').innerText = JSON.stringify(obj)
}