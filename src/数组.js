/* 回调函数，callbackFn,参数一般是value，index，array */
function traverse(value){
    console.log(value + " ");
} 

/* 分割线 */
function line(){
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
}

/* 创建数组 */
var arr1 = ["ok",128,518];
var arr2 = [100,3.14,"hello","html"];

/* 添加数组元素 */
arr1.push(12);
arr1.push(30);
arr2.push("JavaScript");
arr2.push(0.618);
arr1[arr1.length] = "html";
arr2[arr2.length] = "array";

/* 遍历数组 */
console.log("遍历数组arr1:");
for(i in arr1)
    console.log(arr1[i] + " ");
line();
console.log("遍历数组arr2:");
arr2.forEach(traverse);

/* 数组转字符串 */
line();
console.log("arr1: " + arr1.toString());
console.log("arr2: " + arr2.join(" "));//join()方法将数组组合成一个字符串还可以自由设置分隔符

/* 删除最后一个元素 */
line();
console.log("删除arr1的最后一个元素:" + arr1.pop());
console.log(arr1);
console.log("删除arr2的最后一个元素:" + arr2.pop());
console.log(arr2);

/* 将数组左移 */
line();
console.log("arr1左移删除的首元素: " + arr1.shift());
console.log(arr1);
console.log("arr2左移删除的首元素: " + arr2.shift());
console.log(arr2);

/* 将数组右移并在首位置添加元素 */
line();
console.log("arr1右移后的数组长度: " + arr1.unshift("mysql"));
console.log(arr1);
console.log("arr2右移后的数组长度: " + arr2.unshift("oracle"));
console.log(arr2);

/*  拼接元素
    splice()的第一个参数指定插入的开始索引，第二个参数指定向后删除的元素个数，其他参数指定插入的元素 
*/
line();
console.log("arr1中删除的数组部分: " + arr1.splice(2,1,"slice","shift"));
console.log(arr1);
console.log("arr2中删除的数组部分: " + arr2.splice(3,2,"C++","Python"));
console.log(arr2);
var arr3 = arr1.concat(arr2);
console.log(arr3);

/* 
    裁剪数组,slice(start,end)裁剪数组索引start到索引end-1的数组部分
 */
line();
console.log("从arr1的索引3向后裁剪:");
console.log(arr1.slice(3));
console.log("裁剪arr3的索引3到索引8: ");
console.log(arr3.slice(3,8));


 