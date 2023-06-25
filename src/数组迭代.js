var res = 0;
function sum(value,index,array){
    res += array[index];
}
var arr1 = [20,39,12,45,80,43,48,14,38,81];
arr1.forEach(sum);
console.log(arr1.join(" "));
console.log(res);

/* 
    arrayName.map(func)在原先数组的情况下通过对数组每个元素调用func生成一个新的数组
*/
var arr2 = [170,167,160,162,175,164,176,161,185,166,159,177,182];
function process(value,index,array){
   return "身高" + value + "cm"; 
}
var arr3 = arr2.map(process);
console.log(arr3);

/*
    arrayName.filter(func)将通过func测试的元素组成一个新的数组
*/
function check(value,index,array){
    if(value > 165 && value < 175) return true;
    else return false;
}//选出身高大于165小于175的元素
var arr4 = arr2.filter(check);
console.log(arr4);

/*
    arrayName.reduce(func) 从左向右
    arrayName.reduceRight(func) 从右向左
*/
function combine(total,value,index,array){
    return total + value;
}//将1~9的素数组合成一个数
console.log(arr1.reduceRight(combine));

/* 
    arrayName.every(func) 检查每个元素是否通过测试
*/
function func1(value,index,array){
    return value > 155;
}
console.log(arr2.every(func1));

/* 
    arrayName.some(func) 检查是否存在元素通过测试
*/
function func2(value,index,array){
    return value > 180;
}
console.log(arr2.some(func2));

/* 
    arrayName.find(func) 返回第一通过测试的值
    arrayName.findIndex(func) 返回第一个通过测试的索引
*/
function func3(value,index,array){
    return value > 180;
}
console.log(arr2.find(func3));
console.log(arr2.findIndex(func3));