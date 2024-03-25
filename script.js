function slideshow(){
	var x=document.getElementbyId('check');
	if(x.style.display==='none'){
		x.style.display==='block'
	}
	else{
		x.style.display==='none'
	}
}

// var obg={
// 	imgs:document.getElementsByTagName('img'),
// 	arr:["beautiful.jpg", "nature.jpg", "english.jpgs"],
// 	slide:function(){
// 		for(i=0;i<this.imgs.length;i++){
// 			this.imgs[i].src=this.arr[i]
// 		}
// 		},
// 	f:function(){
//      var a=this.arr.shift();
//      this.arr.push(a);
//      this.slide()

// 	},
// 	f2:function(){
//      var a=this.arr.pop();
//      this.arr.unshift(a);
//      this.slide()

// 	}
// }