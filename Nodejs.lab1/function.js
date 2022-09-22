//1. Hàm không có tham số(parametor) và không có return (giá trị trả về )
function hello(){
    console.log("Hello GreenWich")
}
hello()
//2. hàm có tham số và không có return
function sum(a,b){
    console.log(a+b)
}
sum(20, 30)
//3. hàm không có tham số nhưng có return
function year(){
    return 2022
}
console.log(`Current year is`, year())
console.log("Current year is " + year())
//4. hàm có cả tham số và có return
function sayHello(name, age){
    var output = ("Hello" + name +" You are"  + age + "year old")
    return output
}
console.log(sayHello("Minh", 40))

//var: phạm vi tác dụng là trong toàn bộ file code
//let: pạm vi tác dụng chỉ trong 1 đoạn code(function)