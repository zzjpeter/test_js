import * as path from "path";

console.log('1 准备开始执行 for 循环')
 
for (let i = 1; i <= 3; i++) {
  console.log('鲲太大一锅装不下')
}
 
console.log('2 for 循环执行结束')

function test() {
  const g_root_path = "/Users/peterzjzhu/Desktop/Tencent/app_dev/app_common";
  const file_path = path.join(g_root_path, "test");
  console.log(file_path)
}

test();