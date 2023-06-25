/* 
    创建日期，Date()的参数依次是年、月、日、时、分、秒、毫秒
    参数可以省略，如果没有参数则默认以当前时间创建日期
    有两个以上参数，从左到右按年、月、日、时、分、秒、毫秒去对应参数
    如果只有一个参数则该参数为毫秒 
*/
var date1 = new Date();//以当前时刻创建日期
var date2 = new Date(2004,5,11);//指定年月日创建日期

/* 显示日期 */
console.log(date1);
console.log(date1.toString());
console.log(date1.toUTCString());
console.log(date1.toDateString());
console.log(date1.toISOString());
console.log(date2);
console.log(date2.toString());