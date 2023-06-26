var fs = require('fs');
function traverseDirectory(directory) {
    // 读取目录中的文件和子目录
    fs.readdirSync(directory).forEach(file => {
        // 获取文件的完整路径
        const filePath = `${directory}/${file}`;

        // 检查文件的类型
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            // 如果是目录，则递归遍历子目录
            traverseDirectory(filePath);
        } else {
            // 如果是文件，则执行你想要的操作
            console.log(filePath);
        }
    });
    console.log("遍历目录");
}
traverseDirectory("D:/programming/JavaScript/src");


