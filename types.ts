//type을 unknown으로 지정하면 어떻게 되는지도 확인하기 
let num; //변수 선언만 했을 때의 타입은 any다

// type의 알리아스를 지정 가능
type numstr = number | string 
type returntype = [string | number, string] //복잡한 형태의 타입도 가능

//enum은 약간 key-vlaue가 key-index 의 쌍 같은 느낌임. value 지정 시 비로소 딕셔너리 느낌임
enum convertType {num, text} 

//알리아스로 지정한 인자 타입 및 리턴 타입까지 적용한 함수 선언
function func(a: numstr, b: numstr, convert: convertType.num | convertType.text): returntype {
    if (isNaN(+a + +b)) {
        num = a.toString() + b.toString();
    } else {
        num = +a + +b;
        if (convert == convertType.text) {
            num = num.toString()
        }
    }
    return [num, typeof num];
}

console.log(`num + num: ${func(1,2, 1)}`)
console.log(`num + str: ${func(1,'2', 0)}`)
console.log(`str + str: ${func('1','2', 0)}`)
console.log(`realstr + num: ${func('max',2, 1)}`)

//튜플은 딱 그 거푸집 모양대로 풀체인지 해야 재할당 가능
let tuple: [string, boolean];
tuple = ['a',true]

function voidFunc(a: numstr, b: numstr, convert: convertType.num | convertType.text) {
    console.log(`output in voidFunc: ${+a + +b}`);
}

let result: Function;
result = voidFunc;
console.log(result(3,4,0))


// 더 공부해야 할 것 
// 1. 복잡한 형태의 객체 타입 
// 2. TS에서 undefined와 void 
// 3. JS에서 undefined와 null 
// 4. never type