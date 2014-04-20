// Part 1
function Sum(array){
var array = [1,2,3,4,5,6,7,8,9,10];
var total = 0;

 for(i = 0; i < array.length;i++){
total += parseInt(array[i],10);  
 };
 return total;
};

Sum(Array);

// Part 2
function Mean(array) {
var array = [1,2,3,4,5,6,7,8,9,10];	
var total = 0;

for(i = 0; i < array.length;i++){
total += parseInt(array[i],10);  
 };
 return total/(array.length);
};

Mean(Array);

// Part 3
function countRepeat(array) {
    var solo = {};

    for(var i = 0; i < array.length; i++) {
        solo[array[i]] = (solo[array[i]] || 0) + 1;
    } 

    var max = { val: array[0], count: 1 };
    for(var v in solo) {
        if(max.count < solo[v]) { max = { val: v, count: solo[v] }; }
    }  

    return max.val;
}

var array = [1,2,3,4,5,6,7,8,9,10,10];
countRepeat(array);