// console.log("hello from js");
/*
  Console Methods
  - log
  - error
  - table

  Web API بستخدمه عن طريق الجافا اسكريبت

  Styling Console
  - Directive %c
*/

// console.error("Error");
// console.table(["Osama", "Ahmed", "Sayed"]);

// console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

// ES6 => المعايير الخاصه بلغات البرمجه الاصدار السادس

console.log(
  "%celzero %cweb %cschool",
  "color:red; ",
  "color:blue;",
  "color:green; "
);

/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
  -undefined
*/

/*
  Variables Intro
  - Declare A Variable And Use الاعلان عن متغير
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id is Global Variable
  - Loosely Typed vs Strongly Typed
*/
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error) بتعرفني ان فيه مشكله
  - Variable Scope Drama ()[not Added To Window]
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  -  Variable Scope Drama ()[not Added To Window]
  - Block Or Scope Function
*/
// -------
/*
  \ Escape + Line Continue
  \n new line
*/

// -------
/*
  Concatenation
*/

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

document.write(a + " " + b);

console.log(a, b);

// Template Literals (Template Strings)

console.log(`${a} "" '' \\ ${b}
  ${c} ${d}`);

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

/*
  Arithmetic Operators
  console.log(10 - "Osama"); // NaN
  console.log(typeof NaN); // number
  ** Exponentiation (ES7) الاس
  % Modulus (Division Remainder) باقي القسمه
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]

  ------------
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]

--------------
    Type Coercion (Type Casting) عمليه تحويل البيانات من نوع لنوع اثناء تشغيل الكود
*/

// --------------------
/*
  ---number
console.log(1000000);
console.log(1_000_000);
console.log(1e6);

 --------- Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed() للتحكم في عدد الارقام العشريه
  - parseInt() بتطلعلي رقم من الاسترنج
      console.log(parseInt("100 Osama"));

  - parseFloat()
      console.log(parseFloat("100.500 Osama"));

  - isInteger() [ES6] هل دا رقم صحيح
  - isNaN() [ES6]

  ------------------  Math Object
  - round() بيقرب لاقرب عدد صحيح علي حسب قيمه الكسر
  - ceil()بيقرب لاعلي قيمه
  - floor() بيقرب لاقل قيمه
  - min() =>  console.log(Math.min(10, 20, 100, -100, 90));
  - max()
  - pow() بترفع الرقم لاس
  - random()
  - trunc() [Es6] بترجع الجزء بتاع العدد الصحيح
*/

// -----------------------------------------
/*
  String Methods
  - Access With Index => console.log(theName[1]);
  - Access With charAt()
  - length
  - trim() بتقص المسافات الي ف البدايه والنهايه
  - toUpperCase()
  - toLowerCase()
  - Chain Methods => console.log(theName.trim().charAt(2).toUpperCase());

  - indexOf(Value [Mand], Start [Opt] 0) بيدولا علي قيمه معينه جوه الاسترنج لو لاقاها بيرجع الاندكس لو ملقهاش بيرجع -1
  - lastIndexOf(Value [Mand], Start [Opt] Length) نفس الي فوق بس بيعد من الاخر
  - slice(Start [Mand], End [Opt] Not Include End) بتقطع جزء من الاسترنج
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])  (array) بتقص الاسترنج وبتحوله ل

  - substring(Start [Mand], End [Opt] Not Including End) like slice مع اختلاف بسيط ف المدخلات
  --- Start > index
  --- Start < -10 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], num of Characters To Extract) بتقطع جزء من الاسترنج برضوا
  --- Start >=  from index
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6] => true or false
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// ------------------------------------------------------

/*
  Logical Operators
  - ! Not => !10 == 0

    Control Flow => بنتحكم في المحتوي بناء علي الشرط

    Conditional (Ternary) Operator => المختصره if
    Condition ? If True : If False

    let theGender = "Female";
    let result = theGender === "Male" ? "Mr" : "Mrs";

    theAge < 20  // if
  ? console.log(20)
  : theAge > 20 && theAge < 60  // else if
  ? console.log("20 To 60")
  : theAge > 60  // else if
  ? console.log("Larger Than 60")
  : console.log("Unknown");  // else

    Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// --------------------------------------------------

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays =>  console.log(`${myFriends[3][1][2]}`);
  - Change Arrays Elements =>  myFriends[1] = "Gamal";
  - Check For Array =>  Array.isArray(arr);

  my.length = 4; عشان تحدد طول الاراي

  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array

    Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt]) return -1 if not found
  - lastIndexOf(Search Element, From Index [Opt]) return -1 if not found
  - includes(valueToFind, fromIndex [Opt]) [ES7] return true or false

    Arrays Methods [Sort]
  - sort(Function [Opt]) بتقوم بعمل ترتيب ابجدي
  - reverse

    Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt]) edite on orignal array
  --- If Negative => Start From The End

    Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
  - join(Separator) بتدمج عناصر المصفوفه مع بعض مفصول بينهم بفاصل انت بتحدده وتطلعلك منه استرنج

*/

// ------------------------------------------------------------

/*
  Loop Control
  - Break
  - Continue عدي علي الي بعده
  - Label بتقدر من خلاله تتحكم ف اي لوب

  do {
  console.log(i);
  i++;
} while (false);
*/

// ----------------------------------------------------------------------

/*
  Function
  - Return
  - Interrupting =>  عشان تعمل توقف للمهمه return بتستخدم

  function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
  }
  generate(10, 20);



    - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or] عشان تحط قيمه افتراضيه للمدخلات
    - ES6 Method

  function sayHello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
  }

  console.log(sayHello());


  ---rest parameters =>array of parameter بتسمح للفانكشن انها تستقبل اي عدد غير محدد من المعاملات
    =>   function sayHello(...username) {}
  -- only one allowed
  --must be last element


    - Anonymous Function
    let calculator = function (num1, num2) {
      return num1 + num2;
    };
    console.log(calculator(10, 20));

    document.getElementById("show").onclick = function () {
      console.log("Hello Osama");
    }


    - Arrow Function
    let print = (num1, num2) => {
      return num1 + num2;
    };
*/

// =================================

/*
  Scope
  - Block Scope [If, Switch, For] => مش هيعمل تعديل علي القيم الي قبل كده  let لو اشتغلت ب
  هيعدل علي القيم الي قبل كده var لو اشتغلت ب ال
  */

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map => function بتمسك كل عنصر ف المصوفه تطبق عليه
      وبترجع مصفوفه جديده

  - Filter بيقوم بعمل اختبارعلي كل عنصر من عناصر المصصوفه
  --- method creates a new array

    - Reduce => reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue);
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.
  - Accumulator => نتيجه العمليات السابقه

  - forEach
  --- method executes a provided function once for each array element.
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
  */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Object
- Dig Deeper
- Dot Notation vs Bracket Notation
- Dynamic Property Name

// let objectLength = Object.keys(myFavGames).length;
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);بجيب عنصر جواه عن طريق الاندكس

let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
  "the age": 24
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user[myVar]); // user.country
console.log(user["the age"]);


----- - Create With New Keyword new Object();

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

------- Create Object With Create Method
TAKE ANOTHER OBJECT AS A PROTOTYPE

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let copyObj = Object.create(user);

copyObj.age = 50;

--------------  - Create Object With Assign Method
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
*/

// ********************************************************************

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links

    DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  --input.dataset.points => get data attrebute value

    DOM [Check Attributes]
  - Element.attributes بيجيب جميع
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute

    DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild

    DOM [Deal With Childrens]
  - children بتجيب العناصر
  - childNodes بتجيب كله حتي الكومنت
  - firstChild بيجيب اول حاجه موجوده اي كان نوعها
  - lastChild
  - firstElementChild بيجيب اول عنصر
  - lastElementChild

    DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- oninput
  --- onsubmit

  document.links[0].onclick = function (event) {
  event.preventDefault(); همنع التصرف الافتراضي
};

  DOM [Events Simulation]
  - click
  - focus
  - blur
  window.onload = function () {
  two.focus();
};

  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggleلو الكلاس دا مش موجود بيضيفه ولو موجود بيحذفه

    DOM [CSS]
  - style  => element.style.color = "red";
  - cssText => element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";
  - removeProperty(propertyName) [Inline, Stylesheet] => document.styleSheets[0].rules[0].style.removeProperty("line-height");
  هنا بيعدل في ملف الاستايل الخارجي
  - setProperty(propertyName, value, priority) => element.style.setProperty("font-size", "40px", "important");
  inline style  هنا بيعدل في

    DOM [Deal With Elements]
  - before [Element || String] قبل
  - after [Element || String] بعد
  - append [Element || String] بتحط الحاجه جوه العنصر في الاخر
  - prepend [Element || String] بتحط جوه العنصر في الاول
  - remove

    DOM [Traversing] الانتقال ما بين العناصر
  - nextSibling الشقيق التالي
  - previousSibling
  - nextElementSibling العنصر الشقيق التالي
  - previousElementSibling
  - parentElement العنصر الاب =>   span.parentElement.remove();

    DOM [Cloning]
  - cloneNode(Deep) بتعمل نسخه من العنصروانت بقي بتحدد بالعناصر الي جواه او منغير

    DOM [Add Event Listener] بتقدر تحط اكتر من حدث علي العنصر الواحد
    هنضيف حدث علي عنصر لسه ما اتنشأش ف الصفحه
    document.addEventListener("click", function (e) {
    if (e.target.className === "clone") {//clone العنصر الي انا عملت عليه كليك هل ليه كلاس
      console.log("Iam Cloned");
    }
});
  */

// ##############################################################################################

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout (ms), Additional Params)  هتنادي علي مهمه بعد وقت معين
// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }
  - clearTimeout(Identifier) =======> settimeout بتوقف عمل
  let counter = setTimeout(sayMsg, 3000, "Osama", 38);
  btn.onclick = function () {
    clearTimeout(counter);
  };

  - setInterval(Function, Millseconds, Additional Params)===>settimeout بتكرر المهمه كل وقت معينوبتقبل نفس متغيرات
  - clearInterval(Identifier)

  - location Object(106)  url للتحكم في
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()

    BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options) بيتحرك لمكان
  // window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
  - scroll(x, y || Options) ==> options = "smooth"
  - scrollBy(x, y || Options) بيتحرك بمقدار

  - scrollX [Alias => PageXOffset] بتجيبلك معلومات عن قد ايه اتحرك في المحور الافقي
  - scrollY [Alias => PageYOffset]

    Local Storage
  - setItem
  - getItem
  - removeItem بتمسح قيمه
  - clear بتمسح كله
  - key بتجيب عنصر بالاندكس بتاعه

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

    Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key
*/

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array

  let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
[a = "A", b, , d, e = "Osama"] = myFriends;

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
let [, , , [a, , [, b]]] = myFriends;

//swap value
let book = "Video";
let video = "Book";
[book, video] = [video, book];

//for object
// ({ theName: n, theAge, theTitle, theCountry } = user); declare لو سبق واتعملهم

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge,
  theCountry,
  theColor: co = "Red", مديله قيمه افتراضيه
  skills: { html: h, css },
} = user;

  - Destructuring Function Parameters
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}
*/

// ----------------------------------------------------------------------------

/*
  - Set Data Type
  Syntax: new Set(Iterable) بتاخد العناصر المميزه بس
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has


    Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  weakset Usage: Store objects and removes them once they become inaccessible


  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys

  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol

      let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);
          --let myNewMap = new Map();
      myNewMap.set(10, "Number");
      myNewMap.set("10", "String");
      myNewMap.set(true, "Boolean");
      myNewMap.set({a: 1, b: 2}, "Object");
      myNewMap.set(function doSomething() {}, "Function");

      - Map Data Type
    Methods
    --- set
    --- get
    --- delete
    --- clear
    --- has

    Properties
    --- size

      - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)=> iterable بتطلعلي مصفوفه من
  console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);

  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array" مع المحافظه علي طول المصفوفه

    - Array.some(CallbackFunc(Element, Index, Array), This Argument)=> true لو عنصر واحد حقق الشرط هترجع
  --- This Argument => Value To Use As This When Executing CallbackFunc
    Using بترجع قيمه واحده
  - Check if Element Exists In Array
  - Check If Number In Range

    - Array.every(CallbackFunc(Element, Index, Array), This Argument)=> true لازم كل العناصر تحقق الشرط علشان ترجع


    Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags بتعدل طريقه البحث
  i => case-insensitive
  g => global بيبحث عن النتائج كلها مش بيكتفي بنتيجه واحده
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.

    Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

    Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.

    \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

    $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

  Test Method
  pattern.test(input) true or false بترجع

    Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one

  n{x}   => Number of بتحدد عدد
  n{x,y} => Range
  n{x,}  => At Least x

  - replace
  - replaceAll

  console.log(txt.replaceAll(/@/ig, "JavaScript"));


  let specials = /[^a-zA-Z0-9]/g;  special caracter جيبلي

  let mailsRe = /\w+@\w+.\w+/ig;

  let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;

console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

console.log(names.match(/\d\w{8}(?!Z)/ig));

*/

// ########################################################################

/*البناء
  Constructor Function => object من خلالها نقدر ان احنا ننشأ
  واقدر من خلالها اتجكم ف كل حاجه من مكان واحد
  واقدر استخدم جزءمنها في مكان تاني

  function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
  }

  let userOne = new User(100, "Elzero", 5000);user نموزج من
  let userTwo = new User(101, "Hassan", 6000);
  let userThree = new User(102, "Sayed", 7000);

  console.log(userOne instanceof User);
  console.log(userOne.constructor === User);


  class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName; =>this تعود علي الاوبجيكت الي هيتنشأ
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

  - Static Properties And Methods => ملهاش دعوه بالاوبجكت الي هيتنشأ class حاجات بتكون خاصه ب

  class User {
  // Static Property
  static count = 0;

    // Private Property
  #s;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    User.count++;
    this.#s = salary;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

========>>  - Inheritance

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}
*/

/*
  Prototype نموزج او مخطط
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.

  User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
  };
*/

/*
  Object Meta Data And Descriptor
  - writable قابله للتعديل
  - enumerable بأثتثنيها من اللوب
  - configurable [Cannot Delete Or Reconfigure]

  const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});

  => - Define Multiple Properties
  => - Check Descriptors

  Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));

*/

/*
  Date And Time
  - Date Constructor

  let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let date3 = new Date("10-25-1982");
let date4 = new Date("1982-10-25");
let date8 = new Date(1982, 9, 25);


  Static Methods
  - Date.now() millsec ==  getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()

  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable

  function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

  - Delegate Generator =>Generator Function تنوب عن
في استخلراخ البيانات

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}
  console.log(generator.return("Z")); => return عشان اوقف الانتاجيه


*/

// #############*************************#########################
/*
The JavaScript (for (let x of cars)) statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists

The JavaScript (for (let x in person)) statement loops through the properties of an Object:

 */
// #############*************************#########################

/*
json =>   - JavaScript Object Notation
{
  "string": "Elzero",
  "number": 100,
  "object": { "EG": "Giza", "KSA": "Riyadh" },
  "array": ["HTML", "CSS", "JS"],
  "boolean": true,
  "null": null
}
  const myJsonObjectToServer = JSON.stringify(myJsObject); //convert from object to string
const myJsObject = JSON.parse(myJsonObjectFromServer);// convert from string to object
*/

// ******************************************###############################

/*
  Callback Queue => like higher order function

  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It
  Web API
  -- Methods Available From The Environment => Browser
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule

  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls (lifo)

    AJAX
    بتشتغل بالتوازي
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
   *** Ajax ***
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    // console.log(Array.isArray(jsData));true
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
*/

// ###########################$$$$$$$$$$$$$$$$$$$$$$$$$$#######################

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Established"); كانك هنا بتنادي عليها
  } else {
    rejectFunction(Error("Connection Failed"));
  }
}).then(
  (resolveValue) => console.log(`Good ${resolveValue}`), وهنا بتنفزها
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);


  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something

    Promise
  - All لو كلهم نجحوا بيجيب الناتيج في مصفوفه غير كده بيرجع نتيجه واحده فيها رفض
  - All Settled بيرجع النتايج كلها في مصفوفه سواء رفض او قبول
  - Race بيرجع نتيجه اول واحد بيسبقسواء رفض او قبول

        Async
  - Async Before Function Mean This Function Return A Promise
        Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result

  async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}
console.log(getData());
getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);
#########
  Async & Await With Try, Catch, Finally
#########
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }
########


  const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise.then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  }).then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  }).then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  }).catch((rejectedReason) => console.log(rejectedReason)).finally(console.log("The Operation Is Done"));
*/

/*
  Promise And ajax

  const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));
*/
// #############@@@@@@@@@@@@@@@@@$$$$$$$$$$$$$$$$$$##################

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response

  fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

#####################
#############
#####
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

  async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
*/
