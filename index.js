 //1.ways to print in javascript
 //console.log("Hello World");
 // alert("me");
 // document.write("this is document write");

 //2.javaScript Console Api
 //  console.log("Hello World", 4 + 6, "Another log");
 //  console.warn("this is warning");
 //  console.error("this is an error");
 /*multi
  line 
  comment*/

 //3. JavaScript Variables
 //what are variables? -Containers to Store data Values

 var number1 = 34;
 var number2 = 56;
 //  console.log(number1 + number2);
 //4. Data types in JavaScript 
 //numbers
 var num1 = 455;
 var num2 = 56.76;
 //string
 var str1 = "This is a string";
 var str2 = "This is also a string";
 //objects
 var marks = {
         ravi: 34,
         shubham: 78,
         harry: 99.977
     }
     //  console.log(marks);
     //booleans
 var a = true;
 var b = false;
 //  console.log(a);
 //  var und = undefined;
 //by default undefined
 var und;
 //  console.log(und);

 var n = null;
 //  console.log(n);
 //At a very high level, there are two types of data types in JavaScript
 //  1. Primitive: undefined,null,number,string,boolean,symbol
 //  2. Reference datatypes:Arrays and Objects
 var arr = [1, 2, "Harry", 4, 5];
 //  console.log(arr[2]);

 //Operators in JavaScript
 //Arithmetic Operators

 var a = 100;
 var b = 10;
 //  console.log("The value of a+b is", a + b);
 //  console.log("The value of a-b is", a - b);
 //  console.log("The value of a*b is", a * b);
 //  console.log("The value of a/b is", a / b);
 //Assignment Operators
 var c = b;
 //  c += 2;
 //  c -= 2;
 //  c *= 2;
 //  c /= 2;
 //  console.log(c);

 //comparison operators
 var x = 34;
 var y = 56;
 //  console.log(x == y);
 //  console.log(x <= y);
 //  console.log(x >= y);
 //  console.log(x < y);
 //  console.log(x > y);

 //logical operators
 //logical And

 //console.log(true && true);
 //console.log(true && false);
 //console.log(false && true);
 //console.log(false && false);

 //logical OR
 //  console.log(true || true);
 //  console.log(true || false);
 //  console.log(false || true);
 //  console.log(false || false);

 //logical Not
 //  console.log(!true);
 //  console.log(!false);

 //function

 function avg(a, b) {
     c = (a + b) / 2;
     return c;
 }

 c1 = avg(4, 6);
 c2 = avg(14, 16);
 //  console.log(c1, c2);
 //Conditionals in JavaScript
 //single if statement
 //  var age = 44;
 //  if (age > 8) {
 //      console.log("You are not a kid");
 //  }

 //if else statement
 //  var age = 4;
 //  if (age > 8) {
 //      console.log("You are not a kid");
 //  } else {
 //      console.log("You are a kid");
 //  }


 //if-else ladder 
 //  var age = 44;
 //  age = 31;
 //  if (age > 32) {
 //      console.log("You are not a kid");
 //  } else if (age > 26) {
 //      console.log("Baccha nehi rahe");
 //  } else if (age > 22) {
 //      console.log(" yes Baccha nehi rahe");
 //  } else if (age > 18) {
 //      console.log("18 Baccha nehi rahe");
 //  } else {
 //      console.log("Baccha rahe");
 //  }

 //array iteration
 var arr = [1, 2, 3, 4, 5, 6, 7];
 //  console.log(arr);
 //for loop
 //  for (var i = 0; i < arr.length; i++) {
 //      console.log(arr[i]);
 //  }
 //for each loop
 //  arr.forEach(function(element) {
 //      console.log(element);

 //  });

 //const can not be changed
 //  const ac = 0;
 //  ac++;
 var arr1 = [1, 2, 3, 4, 5, 6, 7];
 let j = 0;
 //while loop
 //  while (j < arr1.length) {
 //      console.log(arr1[j]);
 //      j++;
 //  }
 //do while loop
 //  do {
 //      console.log(arr1[j]);
 //      j++;
 //  }
 //  while (j < arr1.length);

 //  for (var i = 0; i < arr.length; i++) {
 //      if (i == 2) {
 //          //  break;
 //          continue;
 //      }
 //      console.log(arr[i]);
 //  }

 let myArr = ["Fan", "Camera", 34, null, true];
 //  console.log(myArr.length);
 //  console.log(myArr);
 //  myArr.pop();
 //  console.log(myArr);
 //  myArr.push("Harry");
 //  console.log(myArr);
 //  myArr.shift();
 //  console.log(myArr);
 //  myArr.unshift("imran");
 //  const newlength = myArr.unshift("ziaul");
 //  console.log(myArr);
 //  console.log(myArr.length);
 //  console.log(newlength);
 //  const st = myArr.sort();
 //  console.log(st);

 //string methods in javascript
 let myLovelyString = "Harry is a good good boy";
 //  console.log(myLovelyString.length);
 //  console.log(myLovelyString.indexOf("good"));
 //  console.log(myLovelyString.lastIndexOf("good"));
 //  console.log(myLovelyString.slice(2, 5));
 let d = myLovelyString.replace("Harry", "Rohan");
 //  console.log(d);
 //  console.log(myLovelyString);
 //  console.log(d);
 //  d = myLovelyString.replace("good", "bad");
 //  console.log(d);
 let myDate = new Date();
 //  console.log(myDate);
 //  console.log(myDate.getTime());
 //  console.log(myDate.getFullYear());
 //  console.log(myDate.getDay());
 //  console.log(myDate.getMinutes());
 //  console.log(myDate.getHours());

 //DOM Manipulation
 let elem = document.getElementById("click");
 //  console.log(elem);
 let elemClass = document.getElementsByClassName("container");
 //  console.log(elemClass);
 //  elemClass[0].style.background = "yellow";
 //  elemClass[1].style.background = "green";
 elemClass[0].classList.add("bg-primary");
 elemClass[0].classList.add("text-success");
 //  console.log(elem.innerHTML);
 //  console.log(elem.innerText);
 //  console.log(elemClass[0].innerHTML);
 //  console.log(elemClass[0].innerText); 
 let tn = document.getElementsByTagName("button");
 //  console.log(tn);
 let dv = document.getElementsByTagName("div");
 //  console.log(dv);
 let createdElement = document.createElement("p");
 createdElement.innerText = "This  is a created paragraph";
 dv[0].appendChild(createdElement);
 let createdElement2 = document.createElement("b");
 createdElement2.innerText = "This  is a created bold";
 dv[0].appendChild(createdElement2);
 dv[0].replaceChild(createdElement2, createdElement);
 //removeChild(element); ---> removes an element

 //selecting using querySelector
 let sel = document.querySelector(".container");
 //  console.log(sel);
 let sel2 = document.querySelectorAll(".container");
 //  console.log(sel2);

 //Events in JavaScript
 //  function clicked() {
 //      console.log('The button was clicked');
 //  }


 //  window.onload = function() {
 //      console.log('The document was loaded harry');
 //  }

 //  firstContainer.addEventListener('click', function() {
 //      console.log('clicked on container');
 //  });

 //  firstContainer.addEventListener('mouseover', function() {
 //      console.log('Mouse on container');
 //  });
 //  firstContainer.addEventListener('mouseout', function() {
 //      console.log('Mouse Out on container');
 //  });
 //  firstContainer.addEventListener('mouseup', function() {
 //      console.log('Mouse up when clicked on Container');
 //  });
 //  firstContainer.addEventListener('mousedown', function() {
 //      console.log('Mouse down when clicked on Container');
 //  });

 //  firstContainer.addEventListener('click', function() {
 //      document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
 //      console.log('clicked on container');
 //  });
 //  let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
 //  firstContainer.addEventListener('mouseup', function() {
 //      document.querySelectorAll(".container")[1].innerHTML = prevHTML;
 //      console.log('Mouse up when clicked on Container');
 //  });
 //  firstContainer.addEventListener('mousedown', function() {
 //      document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
 //      console.log('Mouse down when clicked on Container');
 //  });

 //Arrow Functions

 //  function summ(a, b) {
 //      return a + b;
 //  }

 summ = (a, b) => {
     return a + b;
 }


 //SetTimeout and setInterval 
 //  logkaro = () => {
 //          document.querySelectorAll(".container")[1].innerHTML = "<b> Set time out After 3 seconds it will show</b>"
 //          console.log('I am Your log');
 //      }
 //  setTimeout(logkaro, 3000);
 //in the console you can write  clearTimeout(clr);



 //Set Interval, 3 second interval kore kore show korbe.
 //setInterval(logkaro, 3000);
 //  let clr = setInterval(logkaro, 3000);
 //now if i write  clearInterval(clr); to the console then interval will be stop

 //localStorage

 //in the console write localStorage.setItem('name',"harry")
 // then
 // localStorage
 //then
 // localStorage.getItem('name')
 //"harry"?
 //if you want to clear/delete the  localStorage.clear()

 //Now Here i Will Discuss JSON=JavaScript Object Notation
 //  let obj = { name: "harry", length: 1, a: { this: "that" } }
 //  console.log(obj);
 //  let jso = JSON.stringify(obj);
 //  console.log(jso);
 //  console.log(typeof obj);
 //  console.log(typeof jso);
 //writein the console  
 //typeof jso
 // you will get "string"
 //typeof obj
 //you will get "object" 

 //parse and stringify
 //from string to object
 //  let parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
 //  console.log(parsed);

 //from object to stringify
 //  let strfy = JSON.stringify(parsed);
 //  console.log(strfy);

 //Template literals
 //  a = 34;
 //  console.log(`this is my ${a}`);