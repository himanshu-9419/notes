function* pauseAndReturnValues(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}
undefined
var gen = pauseAndReturnValues(6)
undefined
gen.next()
{ value: 0, done: false }
gen.next()
{ value: 1, done: false }
gen.next()
{ value: 2, done: false }
gen.next()
{ value: 3, done: false }
gen.next()
{ value: 4, done: false }
gen.next()
{ value: 5, done: false }
gen.next()
{ value: undefined, done: true }
gen.next()
{ value: undefined, done: true }