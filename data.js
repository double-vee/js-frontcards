const data = [
  {
    category: 'JavaScript',
    front: 'expression vs statement',
    back: [
      '<span class="term">expression</span> resolves to a value, e.g. <code>x + 1</code>',
      '<span class="term">statement</span> performs an action, e.g. <code>let x = 0;</code>',
    ],
  },
  {
    category: 'JavaScript',
    front: 'function declaration vs function expression',
    back: [
      `<span class="term">function declaration</span>: the function can be called before the actual declaration:`,
      `<div class='card__note__block'>
        <code>sayHi(); <span class="comment">//"Hi!"</span></code>
        <code>function sayHi() {alert("Hi!");}</code>
        </div>`,
      `<span class="term">function expression</span>: the function is created when the execution flow reaches it so it cannot be called earlier:`,
      `<div class='card__note__block'>
        <code>let sayHi = function() {alert("Hi!");};</code>
        <code>sayHi(); <span class="comment">//"Hi!"</span></code>
        </div>`,
      `in <span class="term">strict mode</span>, a <span class="term">function declaration</span> is scoped to the block in which it was declared so the function cannot be called outside of it`,
    ],
  },
  {
    category: 'JavaScript',
    front: 'sets vs maps',
    back: [
      '<span class="term">sets</span> are lists with unique values of any type (reference or primitive)',
      '<span class="term">maps</span> are objects that hold key-value pairs',
    ],
  },
  {
    category: 'JavaScript',
    front: 'DOM',
    back: [
      'short for Document Object Model',
      'represents an HTML document',
      'a tree of nodes created by the browser when HTML loads inside it',
      'each element is an object that can be accessed using JavaScript',
    ],
  },
  {
    category: 'JavaScript',
    front: 'className vs classList',
    back: [
      `the property <code>className</code> returns the value of the element's <code>class</code> attribute (a <span class="term">string</span>)`,
      `<code>classList</code> returns a collection (DOMTokenList) of the element's classes`,
      `<code>classList</code> can be modified using the methods <code>add()</code>, <code>remove()</code>, <code>replace()</code>, <code>toggle()</code>`,
    ],
  },
  {
    category: 'JavaScript',
    front: `"use strict";`,
    back: [
      `a directive enabling <span class="term">strict mode</span>: new features and modifications added to JavaScript in 2009 with ECMAScript 5 (ES5); most such modifications are off by default to keep the old code working`,
      `<code>"use strict";</code> can be put at the top of a script or at the beginning of a function`,
      `<span class="term">classes</span> and <span class="term">modules</span> enable <code>"use strict"</code> automatically`,
      'in strict mode, we need to define a <span class="term">variable</span> before using it',
      'in strict mode, when a <span class="term">function declaration</span> is inside a code block, the function cannot be called outside of it',
      `in strict mode, if there's <code>this</code> inside a function, and the function is called without an object context, <code>this</code> is <code>undefined</code>:`,
      `<div class='card__note__block'>
            <code>function sayHi() {alert(this);}</code>
            <code>sayHi(); <span class="comment">//undefined</span></code>
          </div>`,
      `in non-strict mode, the value of <code>this</code> would be a <span class="term">global object</span>`,
    ],
  },
  {
    category: 'string methods',
    front: 'substring()',
    back: [
      `<code class="usage">
        substring(indexStart)<br>
        substring(indexStart, indexEnd)</code>`,
      `<div class='card__note__block'>
          <code>"Hello".<span class="term--code">substring</span>(1); <span class="comment">//'ello'</span></code>
          <code>"Hello".<span class="term--code">substring</span>(0, 2); <span class="comment">//'He'</span></code>
          <code>"Hello".<span class="term--code">substring</span>(2, 0); <span class="comment">//'He'</span></code>
          <code>"Hello".<span class="term--code">substring</span>(-10, 10); <span class="comment">//'Hello'</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'slice()',
    back: [
      `<code class="usage">
        slice(indexStart)<br>
        slice(indexStart, indexEnd)</code>`,
      `<div class='card__note__block'>
          <code>"Hello".<span class="term--code">slice</span>(-4); <span class="comment">//'ello'</span></code>
          <code>"Hello".<span class="term--code">slice</span>(0, 2); <span class="comment">//'He'</span></code>
          <code>"Hello".<span class="term--code">slice</span>(2, 0); <span class="comment">//''</span></code>
          <code>"Hello".<span class="term--code">slice</span>(-10, 10); <span class="comment">//'Hello'</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'split()',
    back: [
      `<code class="usage">
        split(separator)<br>
        split(separator, limit)</code>`,
      `<div class='card__note__block'>
          <code>"Hello".<span class="term--code">split</span>(); <span class="comment">//['Hello']</span></code>
          <code>"Hello".<span class="term--code">split</span>("", 3); <span class="comment">//['H', 'e', 'l']</span></code>
          <code>"Hello, world".<span class="term--code">split</span>(", "); <span class="comment">//['Hello', 'world']</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'includes()',
    back: [
      `<code class="usage">
        includes(searchString)<br>
        includes(searchString, position)</code>`,
      `<div class='card__note__block'>
          <code>"Hello".<span class="term--code">includes</span>("H"); <span class="comment">//true</span></code>
          <code>"Hello".<span class="term--code">includes</span>("H", 2); <span class="comment">//false</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'repeat()',
    back: [
      `<code class="usage">repeat(count)</code>`,
      `<div class='card__note__block'>
          <code>"hi".<span class="term--code">repeat</span>(4) <span class="comment">//'hihihihi'</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'search()',
    back: [
      `<code class="usage">search(regexp)</code>`,
      `<div class='card__note__block'>
          <code>"hello world".<span class="term--code">search</span>(/[A-Z]/) <span class="comment">//-1</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'at()',
    back: [
      `<code class="usage">at(index)</code>`,
      `<div class='card__note__block'>
          <code>"Hello".<span class="term--code">at</span>(1); <span class="comment">//'e'</span></code>
          <code>"Hello".<span class="term--code">at</span>(-1); <span class="comment">//'o'</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'padStart(), padEnd()',
    back: [
      `<code class="usage">
        padStart(targetLength, padString)<br>
        padStart(targetLength)</code>`,
      `<div class='card__note__block'>
          <code>"666".<span class="term--code">padStart</span>(5, '*'); <span class="comment">//'**666'</span></code>
          <code>"666".<span class="term--code">padStart</span>(5); <span class="comment">//'  666'</span></code>
        </div>`,
      `<code class="usage">
        padEnd(targetLength, padString)<br>
        padEnd(targetLength)</code>`,
      `<div class='card__note__block'>
          <code>"666".<span class="term--code">padEnd</span>(5, '0'); <span class="comment">//'66600'</span></code>
        </div>`,
    ],
  },
  {
    category: 'string methods',
    front: 'startsWith(), endsWith()',
    back: [
      `<code class="usage">
        startsWith(searchString)<br>
        startsWith(searchString, position)</code>`,
      `<div class='card__note__block'>
          <code>"Hello world!".<span class="term--code">startsWith</span>("world"); <span class="comment">//false</span></code>
          <code>"Hello world!".<span class="term--code">startsWith</span>("world", 6); <span class="comment">//true</span></code>
        </div>`,
      `<code class="usage">
        endsWith(searchString)<br>
        endsWith(searchString, endPosition)</code>`,
      `<div class='card__note__block'>
          <code>"Hello world!".<span class="term--code">endsWith</span>("world"); <span class="comment">//false</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'concat()',
    back: [
      `<code class="usage">
        concat()<br>
        concat(value0, value1)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🐋", "🦕"];</code>
          <code>animals.<span class="term--code">concat</span>(); <span class="comment">//["🐋", "🦕"]</span></code>
          <code>animals.<span class="term--code">concat</span>(["🦑", "🦛"], true); <span class="comment">//["🐋", "🦕", "🦑", "🦛", true]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'slice()',
    back: [
      `<code class="usage">
        slice()<br>
        slice(start)<br>
        slice(start, end)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">slice</span>(); <span class="comment">//["🦑", "🦛", "🐋", "🦕"]</span></code>
          <code>animals.<span class="term--code">slice</span>(2); <span class="comment">//["🐋", "🦕"]</span></code>
          <code>animals.<span class="term--code">slice</span>(0, 2); <span class="comment">//["🦑", "🦛"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'includes()',
    back: [
      `<code class="usage">
        includes(searchElement)<br>
        includes(searchElement, fromIndex)</code>`,
      `<div class='card__note__block'>
          <code>["🐋", "🦕"].<span class="term--code">includes</span>("🦕", -1); <span class="comment">//true</span></code>
          <code>["🐋", , "🦕"].<span class="term--code">includes</span>(undefined); <span class="comment">//true</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'at()',
    back: [
      `<code class="usage">at(index)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">at</span>(-1); <span class="comment">//'🦕'</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'find()',
    back: [
      `<code class="usage">find((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = [12, "🦕", 10, "🦛"];</code>
        <code>array.<span class="term--code">find</span>((item) => item > 8); <span class="comment">//12</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'findLast()',
    back: [
      `<code class="usage">findLast((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = [12, "🦕", 10, "🦛"];</code>
        <code>array.<span class="term--code">findLast</span>((item) => item > 8); <span class="comment">//10</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'filter()',
    back: [
      `<code class="usage">filter((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = [12, "🦕", 10, "🦛"];</code>
        <code>array.<span class="term--code">filter</span>((item) => item > 8); <span class="comment">//[12, 10]</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'some()',
    back: [
      `<code class="usage">some((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = [12, 10, 8];</code>
        <code>array.<span class="term--code">some</span>((item) => item > 8); <span class="comment">//true</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'every()',
    back: [
      `<code class="usage">every((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = [12, 10, 8];</code>
        <code>array.<span class="term--code">every</span>((item) => item > 8); <span class="comment">//false</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'map()',
    back: [
      `<code class="usage">map((element, index, array) => { /* … */ })</code>`,
      `<div class='card__note__block'>
        <code>let array = ["🦛", "🐋", "🦕"];</code>
        <code>array.<span class="term--code">map</span>((item) => item + "🦑"); <span class="comment">//["🦛🦑", "🐋🦑", "🦕🦑"]</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'join()',
    back: [
      `<code class="usage">
        join()<br>
        join(separator)</code>`,
      `<div class='card__note__block'>
        <code>let array = ["🦛", "🐋", "🦕"];</code>
        <code>array.<span class="term--code">join</span>(); <span class="comment">//'🦛,🐋,🦕'</span></code>
        <code>array.<span class="term--code">join</span>(""); <span class="comment">//'🦛🐋🦕'</span></code>
        <code>array.<span class="term--code">join</span>("🦑"); <span class="comment">//'🦛🦑🐋🦑🦕'</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'reduce()',
    back: [
      `<code class="usage">
        reduce((accumulator, currentValue) => {<br>
        &nbsp;&nbsp;return /* … */;<br>
        }, initialValue)</code>`,
      `<div class='card__note__block'>
        <code>let array = [1, 2, 3];</code>
        <code>array.<span class="term--code">reduce</span>((acc, el) => acc + el, 0); <span class="comment">//6</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'sort()',
    back: [
      `<code class="usage">
        sort()<br>
        sort((a, b) => { /* … */ } )</code>`,
      `<div class='card__note__block'>
        <code>let array = [6, 12, 4];</code>
        <code>array.<span class="term--code">sort</span>((a, b) => a - b); <span class="comment">//[4, 6, 12]</span></code>
        <code>array.<span class="term--code">sort</span>(); <span class="comment">//[12, 4, 6]</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'reverse()',
    back: [
      `<code class="usage">reverse()</code>`,
      `<div class='card__note__block'>
        <code>let array = ["🦛", "🐋", "🦕"];</code>
        <code>array.<span class="term--code">reverse</span>(); <span class="comment">//["🦕", "🐋", "🦛"]</span></code>
      </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'splice()',
    back: [
      `<code class="usage">
        splice(start)<br>
        splice(start, deleteCount)<br>
        splice(start, deleteCount, item1, itemN)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">splice</span>(2); <span class="comment">//["🐋", "🦕"]</span></code>
          <code>console.log(animals); <span class="comment">//["🦑", "🦛"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">splice</span>(2, 1); <span class="comment">//["🐋"]</span></code>
          <code>console.log(animals); <span class="comment">//["🦑", "🦛", "🦕"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">splice</span>(-3, Infinity, "🐢"); <span class="comment">//["🦛", "🐋", "🦕"]</span></code>
          <code>console.log(animals); <span class="comment">//["🦑", "🐢"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'copyWithin()',
    back: [
      `<code class="usage">
        copyWithin(target)<br>
        copyWithin(target, start)<br>
        copyWithin(target, start, end)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">copyWithin</span>(2); <span class="comment">//["🦑", "🦛", "🦑", "🦛"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">copyWithin</span>(0, 2); <span class="comment">//["🐋", "🦕", "🐋", "🦕"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">copyWithin</span>(0, 2, 3); <span class="comment">//["🐋", "🦛", "🐋", "🦕"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'fill()',
    back: [
      `<code class="usage">
        fill(value)<br>
        fill(value, start)<br>
        fill(value, start, end)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">fill</span>("🐢"); <span class="comment">//["🐢", "🐢", "🐢", "🐢"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">fill</span>("🐢", 2); <span class="comment">//["🦑", "🦛", "🐢", "🐢"]</span></code>
        </div>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦑", "🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">fill</span>("🐢", 2, 3); <span class="comment">//["🦑", "🦛", "🐢", "🦕"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'pop()',
    back: [
      `<code class="usage">pop()</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">pop</span>(); <span class="comment">//'🦕'</span></code>
          <code>console.log(animals); <span class="comment">//["🦛", "🐋"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'push()',
    back: [
      `<code class="usage">
        push(element0)<br>
        push(element0, element1)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">push</span>("🦑"); <span class="comment">//4</span></code>
          <code>console.log(animals); <span class="comment">//["🦛", "🐋", "🦕", "🦑"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'shift()',
    back: [
      `<code class="usage">shift()</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">shift</span>(); <span class="comment">//'🦛'</span></code>
          <code>console.log(animals); <span class="comment">//["🐋", "🦕"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'array methods',
    front: 'unshift()',
    back: [
      `<code class="usage">
        unshift(element0)<br>
        unshift(element0, element1)</code>`,
      `<div class='card__note__block'>
          <code>let animals = ["🦛", "🐋", "🦕"];</code>
          <code>animals.<span class="term--code">unshift</span>("🦑"); <span class="comment">//4</span></code>
          <code>console.log(animals); <span class="comment">//["🦑", "🦛", "🐋", "🦕"]</span></code>
        </div>`,
    ],
  },
  {
    category: 'React',
    front: 'JSX',
    back: [
      'short for JavaScript XML',
      'a syntax extension to JS',
      'returns elements that represent JS objects',
      'syntactic sugar for <code>React.createElement()</code>',
      'compiled to JS with Babel',
    ],
  },
  {
    category: 'React',
    front: 'React component vs element',
    back: [
      'component: a function that returns an element',
      'element: a plain JS object',
    ],
  },
  {
    category: 'React',
    front: 'Virtual DOM',
    back: [
      'a blueprint of the DOM',
      'compares one state and the next state in the DOM and updates only the part that changed (diffing/reconciliation)',
    ],
  },
  {
    category: 'React',
    front: 'render() method',
    back: [
      'renders JSX elements to the DOM:',
      `<div class='card__note__block'>
        <code>const root = ReactDOM.createRoot(<wbr>document.<wbr>getElementById('root')<wbr>);</code>
        <code>root.<span class="term--code">render(</span>&lt;h1&gt;Hello world&lt;/h1&gt;<span class="term--code">)</span>;</code>
      </div>`,
    ],
  },
  {
    category: 'React',
    front: 'props',
    back: [
      'short for properties',
      'used to pass values from parent components down to children',
      'to pass a value up to a parent, you first pass a function prop down to the child, and then call the function inside the child component',
      'read-only',
    ],
  },
  {
    category: 'React',
    front: 'state',
    back: [
      'managed within a component, cannot be accessed outside the component unless passed with props',
      'mutable',
    ],
  },
  {
    category: 'React',
    front: 'node_modules/',
    back: [
      'all installed packages',
      '<code>npm install</code> uses dependencies from <span class="term">package.json</span> to install packages in <span class="term">node_modules</span>',
    ],
  },
  {
    category: 'React',
    front: 'package.json, package.lock.json',
    back: [
      '<span class="term">package.json</span>: information on installed packages',
      '<span class="term">package.lock.json</span>: generated with <code>npm i</code>, locks the current versions used in the project so that in the future the same versions can be downloaded',
    ],
  },
];
