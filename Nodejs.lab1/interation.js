//for loop
//in ra dãy só từ 1 đến 10 
for(var i = 1; i <= 10; i++){
    console.log(i)
}
console.log("================")
//in ra dãy số từ 1 đến 10 nhưng stop ở 5
for(var i = 1; i <= 10; i++){
    console.log(i)
    if(i == 5){
        break
    }
    
}
console.log("================")
//in ra dãy số 1 đến 10 nhưng bỏ qua số 5
for(var i = 1; i <= 10; i++){
    if (i== 5){
        continue
    }
    console.log(i)
}
console.log("===========")
//do while: chạycode trong "do" ít nhất 1 lần mới check điều kiện trong while
let a= 1 
do {
    console.log(a)
    a++
} while (a<=10);
console.log("===========")
//while: chỉ chạy code trong while nếu thỏa mãn điều kiện
let b  = 1
while(b<=10){
    console.log(b)
    b++
}
console.log("===========")

var x = 10
//post- fix operator
//x++: gán giá trị của x cho y rồi mới tăng thêm 1 đơn vị
var y = x++
//prèixx operator
//++x: tăng thêm x 1 đơn vị rồi mới gán giá trị của x cho x
var z = ++x
console.log("x = "+ x)
console.log("y = "+ y)
console.log("z = "+ z)