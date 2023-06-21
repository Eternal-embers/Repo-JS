/*
	所有数字的通用方法
	value.valueOf();//以数字形式返回数字
	value.toString();//将数字作为字符串返回
	value.toExponential(v);//返回以指数形式书写的数字
	toFixed(digit);//返回带指定小数为digit的数字
	toPrecision(length);//返回指定长度的数字
*/
	/* 测试 */
	var num1 = 12.34;
	var num2 = 3.1415;
	console.log(isNaN("12.34".valueOf()));//返回false
	console.log(num1.toString());//返回字符串"12.34"
	console.log(num1.toExponential());//返回1.234e+1
	console.log(num2.toExponential());//返回3.1315e+0
	console.log(num1.toFixed(0));//返回12
	console.log(num1.toFixed(2));//返回12.34
	console.log(num2.toFixed(3));//返回3.14
	console.log(num2.toFixed(5));//返回3.14150
	console.log(num2.toPrecision(3));//返回3.14
	console.log(num2.toPrecision(4));//返回3.141
	console.log(num2.toPrecision(6));//返回3.14150
	console.log("- - - - - - - - - - - - - - - - - - -");
/*
	将变量转换成数字
	Number();//返回将变量转换成数字
	x.parseInt();//将变量转换成整数
	x.parseFloat();//将变量转换成浮点数
*/
	var str1 = "5000 year";
	var str2 = "10 20 30";
	var str3 = "10.1 20.2 30.3";
	console.log(Number(str1));
	console.log(parseInt(str1));
	console.log(parseInt(str2));
	console.log(parseFloat(str3));
	