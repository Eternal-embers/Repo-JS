function compare(a,b){
    return a - b;//从小到大排序
}
function fill(array,n){
    if(!Array.isArray(array)) return;
    for(var i = 0;i < n;i++){
        arr[i] = Math.round(Math.random() * 100) + 1;
    }
}
var arr = [];//创建数组
fill(arr,10);//向数组中填充10个数

/* 数组排序 */
console.log(arr.join(" "));
arr.sort(compare);
console.log(arr.join(" "));

/* 数组反转 */
arr.reverse();
console.log(arr.join(" "));

/* 随机打乱数组 */
arr.sort(function(a,b){return 0.5 - Math.random();});
console.log(arr.join(" "));

/* 字符串排序 */
var list = ["Java","C++","Python","JavaScript","mysql","HTML","CSS","react","vue","bat","bash",];
list.sort();
console.log(list.join(" "));