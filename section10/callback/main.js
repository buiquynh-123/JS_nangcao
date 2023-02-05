/**  CALL BACK
 *  Là hàm được truyền đối số
 * khi gọi hàm khác
 * được gọi lại trong hàm và được truyền đối số
 * Cách học:
1. Đọc về khái niệm sẽ học (mozilla)
- What
- Why
- How
2.Trả lời câu hỏi how
- Syntax (Cách tạo array, hay cách tạo function)
- Trường hợp sử dụng
- Các hàm thưởng dùng
 */
// phải kiểm tra chắc chắn nó là một function thì mk mới thực thi
function myFunction(param){
    if(typeof param === 'function'){
        param('Học lập trình');
    }
  
}


function myCallback(value){
    console.log('Value' + " " + value);
}
myCallback(123);
myFunction(myCallback);


Array.prototype.map2 = function(callback){
    var output = [], arraylength = this.length;
    for(var i = 0; i < arraylength; i++){
       var result = callback(this[i], i);
       output.push(result);
    }
    return output;
}
var courses = [ 
    'Javascript',
    'PHP',
    'Ruby',
];
var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
});


console.log(htmls.join(''));
// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''))