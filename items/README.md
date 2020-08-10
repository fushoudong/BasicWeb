# 面试题目

## 1. 原型链、变量提升

1. 题目

   ```js
   // part1
   function Foo() {
       getName = function () {
           console.log(1);
       };
       return this;
   }
   // part2
   Foo.getName = function () {
       console.log(2);
   };
   // part3
   Foo.prototype.getName = function () {
       console.log(3);
   };
   // part4
   var getName = function () {
       console.log(4);
   };
   // part5
   function getName() {
       console.log(5);
   }
   Foo.getName();
   getName(); 
   Foo().getName();
   getName();
   new Foo.getName(); 
   new Foo().getName();
   new new Foo().getName(); 
   ```

   **题目解析：**

   1. `Foo.getName()`——`2`

      对于这个问题，可以直接将`Foo.getName`看做一个整体，实质上就是直接调用这个方法，输出2

   2. `getName()`—— `4`

      由于函数的声明提前，`part5`处的代码会提前到`part4`执行，因此此处调用的实际上是`part4`，输出`4`

   3. `Foo().getName()`——`1`

      在`Foo()`中声明的`getName()`没有修饰符修饰，会直接被提升到全局作用域，也就是成为了`window`的对象，`Foo()`执行返回的this指向就是`window（直接被window调用）`，因此这里的执行可以看成先执行`Foo()`，将`getName()`上升到全局作用域，再执行`window.getName()`，输出`1`

   4. `getName()`——`1`

      由于经历了3处的执行，这时`getName()`的输出结果变成了`3`

   5. `new Foo.getName()`——`2`

      此处相当于创建了`part2`的实例，输出为`2`

   6. `new Foo().getName()`——`3`

      存在着`new`的优先级，因此，这里的代码可以看成执行了`(new Foo()).getName()`，返回的`this`指向当前对象，根据原型链，实例的构造函数中如果不存在方法，就去原型中查找，因此执行结果是——`3`，也可以检验`new Foo().getName === Foo.prototype.getName`，输出结果为true

   7. `new new Foo().getName()`——`3`

      这里可以理解为5和6的集合体，即在此处创建了`Foo`原型对象的`getName()`的实例，因此输出为——`3` 