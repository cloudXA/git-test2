//返回一个介于最低值和最高值的整数
var between = function (lowest, hight) {
    var range = hight - lowest ;
    return lowest + Math.floor(Math.random() * (range + 1));
   
}