//for each
function forEach(arr,callback){
	for(var i=0;i<arr.length;i++){
		callback(arr[i],i,arr);
	}
}

//example:-  var arr=[1,2,3,4]; forEach(arr,function(elem,i,arr){console.log(elem,i,arr)});

//indexOf
function findIndex(arr,callback){
	for(var i=0;i<arr.length;i++){
		if(callback(arr[i],i,arr)) return i;	
	}
	return -1;
}

// exapmple:- 
// var arr=[1,2,3,4]; 
findIndex(arr,function(num,index,array){return num===6;})

//setInterval and setTimeout both return id which by passing to clearInterval and clearTimeOut receptively we can clear this.

//setInterval example countdown
function countDown(time){
	var id=setInterval(()=>{                      
					if(time==1){
						console.log("Ring Ring Ring!!!"); 											clearInterval(id);
						}
					else console.log('Timer: '+--time)},1000)		
	}

//same thing using setinterval and set timeout
function countDown(time){
	var id=setInterval(()=>console.log('Timer:'+--time),1000);
	setTimeout(()=>{clearInterval(id);console.log("Ring Ring Ring!!!")},time*1000)
}

//promise example
var p1= new Promise(function(resolve,reject){resolve([1,2,3,4]);})
p1.then((arr)=>console.log(arr));

var p35= new Promise(function(resolve,reject){
		var num=Math.random();
		if(num<0.5) resolve(num);
		else reject("error",num);
})
p35.then((num)=>console.log(num)).catch((error,num)=>{console.log(error,num)})


//map implementation
function myMap(arr, callback) {
	var newArr = [];
	arr.forEach((elem, index, arr) =>
		newArr.push(callback(elem, index, arr))
	);
	return newArr;
}
example: -myMap([1, 2, 3], (elem) => elem * 2);

//filter implementation
function myFilter(arr, callback) {
	var newArr = [];
	arr.forEach((elem, index, arr) => { if (callback(elem, index, arr)) newArr.push(elem) }
	);
	return newArr;
}

example: -myFilter([1, 2, 3], (elem) => elem >= 2);
function onlyGreaterThanTwo(arr) {
	return myFilter(arr, (elem) => { return elem >= 2 });
}

//some implementation
function some(arr, callback) {
	for (var i = 0; i < arr.length; i++) { if (callback(arr[i], i, arr)) return true; }
	return false;
}
example: -some([1, 2, 3, 4], (x) => x === 5)

//every
function every(arr, callback) {
	for (var i = 0; i < arr.length; i++) { if (!callback(arr[i], i, arr)) return false; }
	return true;
}