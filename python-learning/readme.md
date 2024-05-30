## Python 🐍
##### Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.

### Readme Contents
- [Python Introduction](#python-introduction)
- [Python Inner Working](#python-inner-working)
- [Python Installation](#python-installation)
- [Python in Shell](#python-in-shell)
- [Python in File](#python-in-file)
- [Python Comments](#python-comments)
- [Python Variables](#python-variables)
- [Python Data Types](#python-data-types)
- [Python Operators](#python-operators)
- [Python Strings](#python-strings)
- [Python Lists](#python-lists)
- [Python Tuples](#python-tuples)
- [Python Dictionaries](#python-dictionaries)
- [Python Sets](#python-sets)
- [Python Booleans](#python-booleans)
- [Python Indentation](#python-indentation)
- [Python If...Else](#python-ifelse)
- [Python Elif](#python-elif)
- [Python Loops](#python-loops)
- [Python Functions](#python-functions)


### Python Inner Working
- Python is an interpreted language, meaning it runs line by line.
- Python is an object-oriented language, meaning it treats everything as an object.
- Python is a dynamically typed language, meaning you don't have to declare the type of variable.

#### Byte Code
- Python code is first compiled into byte code.
- Byte code is a low-level platform-independent representation of your source code.
- Byte code is stored in `.pyc` files.
- Byte code is executed by the Python Virtual Machine (PVM).

#### Python Virtual Machine (PVM)
- PVM is an interpreter that reads and executes Python byte code.
- PVM is a stack-based machine, meaning it uses a stack to store data.
- PVM is written in C.
- Different Python interpreters use different PVMs.

#### Python Interpreter
- Python interpreter is a program that reads and executes Python code.
- Python interpreter is written in C.
- Python interpreter is a command-line program.
- Different Python interpreters are available, such as CPython, Jython, IronPython, PyPy, etc.


### Python Installation
- Download Python from [Python.org](https://www.python.org/downloads/)
- Install Python
- Set Environment Variables
- Open Command Prompt and type `python` or `py`  to check if Python is installed.

### Python in Shell
- Open Command Prompt
- Type `python` or `py` to open Python Shell in windows.
- Type `print('Hello World!')` to print Hello World in Python Shell.
- Type `exit()` to exit Python Shell.
- Type `python -c "print('Hello World!')"` to run Python code in command prompt. `-c` flag is used to run Python code in command prompt.

### Python in File
- Open Notepad or any text editor.
- Write Python code.
- Save file with `.py` extension.
- Open Command Prompt.
- Type `python filename.py` to run Python code in file.

### Python Comments
- Single Line Comment: `# This is a single line comment`
- Multi Line Comment: `''' This is a multi line comment '''`

### Python Variables
- Variables are used to store data.
- example: `x = 5`
- Variables are case-sensitive.
- Variables can start with a letter or underscore.
- Object is a block of memory that contains data and information on how to process that data. it is an instance of a class. it can be a number, string, list, etc.
- Variables store the memory location of an object are called references. and the object is stored in memory.


### Python Data Types
- Python has several data types, such as int, float, complex, str, list, tuple, dict, set, bool, etc.
- Use `type()` function to get the data type of a variable.
- example: `x = 5`, `print(type(x))` will output `<class 'int'>`

#### Table of Data Types
| Data Type | Description | Example |
| --- | --- | --- |
| int | Integer | x = 5 |
| float | Floating Point Number | x = 5.5 |
| complex | Complex Number | x = 5 + 5j |
| str | String | x = 'Hello' |
| list | List | x = [1, 2, 3] |
| tuple | Tuple | x = (1, 2, 3) |
| dict | Dictionary | x = {'name': 'John', 'age': 25} |
| set | Set | x = {1, 2, 3} |
| bool | Boolean | x = True |

#### Mutable vs Immutable Data Types
- Mutable in Python means that the object can be changed after it is created. Example: list, dict, set.
- Immutable in Python means that the object cannot be changed after it is created. In other words, if you change the value of an object, then the variable will point to a new memory location and the old memory location will be deleted by the garbage collector. example: int, float, complex, str, tuple, bool.

#### Example How Mutable and Immutable Data Types Work
```python
x = 5
print(id(x)) # 140732674000192
x = 6
print(id(x)) # 140732674000224
```
- In the above example, the memory location of x changes when the value of x changes. This is because int is an immutable data type.

```python
x = [1, 2, 3]
print(id(x)) # 140732674000192
x.append(4)
print(id(x)) # 140732674000192
```
- In the above example, the memory location of x does not change when the value of x changes. This is because list is a mutable data type.

#### Example How memory location works in Python
```python
x = 5
y = x
print(id(x)) # 140732674000192
print(id(y)) # 140732674000192
x = 6
print(id(x)) # 140732674000224
print(id(y)) # 140732674000192
```
- In the above example, the memory location of x and y are the same when x is assigned to y. But when the value of x changes, the memory location of x changes but the memory location of y remains the same.

### Python Operators
- Operators are used to perform operations on variables and values.
- Python has several operators, such as Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise, etc.

#### Arithmetic Operators
- Arithmetic operators are used to perform mathematical operations.
- example: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- Table of Arithmetic Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| + | Addition | 5 + 5 | 10 |
| - | Subtraction | 5 - 5 | 0 |
| * | Multiplication | 5 * 5 | 25 |
| / | Division | 5 / 5 | 1.0 |
| // | Floor Division | 5 // 5 | 1 |
| % | Modulus | 5 % 5 | 0 |
| ** | Exponentiation | 5 ** 5 | 3125 |

#### Assignment Operators
- Assignment operators are used to assign values to variables.
- example: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
- Table of Assignment Operators with examples and description with output.

| Operator | Description | Example | expanded form |
| --- | --- | --- | --- |
| = | Assign | x = 5 | x = 5 |
| += | Add and Assign | x += 5 | x = x + 5 |
| -= | Subtract and Assign | x -= 5 | x = x - 5 |
| *= | Multiply and Assign | x *= 5 | x = x * 5 |
| /= | Divide and Assign | x /= 5 | x = x / 5 |
| //= | Floor Divide and Assign | x //= 5 | x = x // 5 |
| %= | Modulus and Assign | x %= 5 | x = x % 5 |
| **= | Exponentiation and Assign | x **= 5 | x = x ** 5 |

#### Comparison Operators
- Comparison operators are used to compare two values.
- example: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Table of Comparison Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| == | Equal | 5 == 5 | True |
| != | Not Equal | 5 != 5 | False |
| > | Greater Than | 5 > 5 | False |
| < | Less Than | 5 < 5 | False |
| >= | Greater Than or Equal | 5 >= 5 | True |
| <= | Less Than or Equal | 5 <= 5 | True |

#### Logical Operators

- Logical operators are used to combine conditional statements.
- example: `and`, `or`, `not`
- Table of Logical Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| and | Returns True if both statements are true | 5 > 3 and 5 < 10 | True |
| or | Returns True if one of the statements is true | 5 > 3 or 5 < 3 | True |
| not | Reverse the result, returns False if the result is true | not(5 > 3) | False |

#### Identity Operators
- Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location.
- example: `is`, `is not`
- Table of Identity Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| is | Returns True if both variables are the same object | x = 5, y = 5, x is y | True |
| is not | Returns True if both variables are not the same object | x = 5, y = 6, x is not y | True |

#### Membership Operators
- Membership operators are used to test if a sequence is presented in an object.
- example: `in`, `not in`
- Table of Membership Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| in | Returns True if a sequence with the specified value is present in the object | x = [1, 2, 3], 2 in x | True |
| not in | Returns True if a sequence with the specified value is not present in the object | x = [1, 2, 3], 4 not in x | True |

#### Bitwise Operators
- Bitwise operators are used to compare (binary) numbers.
- example: `&`, `|`, `^`, `~`, `<<`, `>>`
- Table of Bitwise Operators with examples and description with output.

| Operator | Description | Example | Output |
| --- | --- | --- | --- |
| & | AND | 5 & 5 | 5 |
| \| | OR | 5 \| 5 | 5 |
| ^ | XOR | 5 ^ 5 | 0 |
| ~ | NOT | ~5 | -6 |
| << | Zero fill left shift | 5 << 1 | 10 |
| >> | Signed right shift | 5 >> 1 | 2 |

### Python Strings
- Strings are used to store text data.
- Strings are immutable data types.
- Strings are enclosed in single quotes or double quotes.
- example: `x = 'Hello'`, `y = "World"`
- Use `+` operator to concatenate strings. eg. `x = 'Hello', y = 'World', x + y` will output `HelloWorld`
- Use `*` operator to repeat strings. eg. `x = 'Hello', x * 2` will output `HelloHello`
- Use `[]` to access characters in a string. eg. `x = 'Hello', x[1]` will output `e`
- Use `[:]` to access a range of characters in a string. eg. `x = 'Hello', x[1:4]` will output `ell`
- Use `len()` function to get the length of a string. eg. `x = 'Hello', len(x)` will output `5`
- Use `strip()` function to remove whitespace from the beginning or end of a string. eg. `x = ' Hello ', x.strip()` will output `Hello`
- Use `lower()` function to convert a string to lowercase. eg. `x = 'Hello', x.lower()` will output `hello`
- Use `upper()` function to convert a string to uppercase. eg. `x = 'Hello', x.upper()` will output `HELLO`
- Use `replace()` function to replace a string with another string. eg. `x = 'Hello', x.replace('H', 'J')` will output `Jello`
- Use `split()` function to split a string into a list. eg. `x = 'Hello World', x.split()` will output `['Hello', 'World']`

### Python Lists
- Lists are used to store multiple items in a single variable.
- Lists are mutable data types.
- Lists are enclosed in square brackets.
- example: `x = [1, 2, 3]`
- Lists can store different data types.
- example: `x = [1, 'Hello', 3.5]`
- List in a list is called a nested list.
- example: `x = [1, [2, 3], 4]`
- Use `+` operator to concatenate lists. eg. `x = [1, 2, 3], y = [4, 5, 6], x + y` will output `[1, 2, 3, 4, 5, 6]`
- Use `*` operator to repeat lists. eg. `x = [1, 2, 3], x * 2` will output `[1, 2, 3, 1, 2, 3]`
- Use `[]` to access items in a list. eg. `x = [1, 2, 3], x[1]` will output `2`
- Use `[:]` to access a range of items in a list. eg. `x = [1, 2, 3], x[1:3]` will output `[2, 3]`
- Use `len()` function to get the length of a list. eg. `x = [1, 2, 3], len(x)` will output `3`
- Use `append()` function to add an item to the end of a list. eg. `x = [1, 2, 3], x.append(4)` will output `[1, 2, 3, 4]`
- Use `insert()` function to add an item at a specified index in a list. eg. `x = [1, 2, 3], x.insert(1, 4)` will output `[1, 4, 2, 3]`
- Use `remove()` function to remove an item from a list. eg. `x = [1, 2, 3], x.remove(2)` will output `[1, 3]`
- Use `pop()` function to remove an item at a specified index in a list. eg. `x = [1, 2, 3], x.pop(1)` will output `[1, 3]`
- Use `clear()` function to remove all items from a list. eg. `x = [1, 2, 3], x.clear()` will output `[]`
- Use `copy()` function to copy a list. eg. `x = [1, 2, 3], y = x.copy()` will copy x to y.
- Use `count()` function to count the number of times an item appears in a list. eg. `x = [1, 2, 3, 1], x.count(1)` will output `2`
- Use `index()` function to get the index of an item in a list. eg. `x = [1, 2, 3], x.index(2)` will output `1`
- Use `sort()` function to sort a list. eg. `x = [3, 1, 2], x.sort()` will output `[1, 2, 3]`
- Use `reverse()` function to reverse a list. eg. `x = [1, 2, 3], x.reverse()` will output `[3, 2, 1]`

### Python Tuples
- Tuples are used to store multiple items in a single variable.
- Tuples are immutable data types.
- Tuples are enclosed in parentheses.
- example: `x = (1, 2, 3)`
- Use `+` operator to concatenate tuples. eg. `x = (1, 2, 3), y = (4, 5, 6), x + y` will output `(1, 2, 3, 4, 5, 6)`
- Use `*` operator to repeat tuples. eg. `x = (1, 2, 3), x * 2` will output `(1, 2, 3, 1, 2, 3)`
- Use `[]` to access items in a tuple. eg. `x = (1, 2, 3), x[1]` will output `2`
- Use `[:]` to access a range of items in a tuple. eg. `x = (1, 2, 3), x[1:3]` will output `(2, 3)`
- Use `len()` function to get the length of a tuple. eg. `x = (1, 2, 3), len(x)` will output `3`
- Use `count()` function to count the number of times an item appears in a tuple. eg. `x = (1, 2, 3, 1), x.count(1)` will output `2`
- Use `index()` function to get the index of an item in a tuple. eg. `x = (1, 2, 3), x.index(2)` will output `1`

### Python Dictionaries
- Dictionaries are used to store data in key-value pairs.
- Dictionaries are mutable data types.
- Dictionaries are enclosed in curly brackets.
- example: `x = {'name': 'John', 'age': 25}`
- Use `[]` to access the value of a key in a dictionary. eg. `x = {'name': 'John', 'age': 25}, x['name']` will output `John`
- Use `len()` function to get the number of key-value pairs in a dictionary. eg. `x = {'name': 'John', 'age': 25}, len(x)` will output `2`
- Use `get()` function to get the value of a key in a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.get('name')` will output `John` 
- Use `keys()` function to get the keys of a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.keys()` will output `dict_keys(['name', 'age'])`
- Use `values()` function to get the values of a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.values()` will output `dict_values(['John', 25])`
- Use `items()` function to get the key-value pairs of a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.items()` will output `dict_items([('name', 'John'), ('age', 25)])`
- Use `update()` function to update a dictionary with another dictionary. eg. `x = {'name': 'John', 'age': 25}, y = {'city': 'New York'}, x.update(y)` will update x with y.
- Use `pop()` function to remove a key-value pair from a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.pop('name')` will output `{'age': 25}`
- Use `popitem()` function to remove the last key-value pair from a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.popitem()` will output `{'name': 'John'}`
- Use `clear()` function to remove all key-value pairs from a dictionary. eg. `x = {'name': 'John', 'age': 25}, x.clear()` will output `{}`
- Use `copy()` function to copy a dictionary. eg. `x = {'name': 'John', 'age': 25}, y = x.copy()` will copy x to y.

### Python Sets
- Sets are used to store multiple items in a single variable.
- Sets are mutable data types.
- Sets are enclosed in curly brackets.
- example: `x = {1, 2, 3}`
- Use `add()` function to add an item to a set. eg. `x = {1, 2, 3}, x.add(4)` will output `{1, 2, 3, 4}`
- Use `update()` function to add multiple items to a set. eg. `x = {1, 2, 3}, x.update([4, 5, 6])` will output `{1, 2, 3, 4, 5, 6}`
- Use `remove()` function to remove an item from a set. eg. `x = {1, 2, 3}, x.remove(2)` will output `{1, 3}`
- Use `discard()` function to remove an item from a set. eg. `x = {1, 2, 3}, x.discard(2)` will output `{1, 3}`
- Use `pop()` function to remove an item from a set. eg. `x = {1, 2, 3}, x.pop()` will output `{2, 3}`
- Use `clear()` function to remove all items from a set. eg. `x = {1, 2, 3}, x.clear()` will output `set()`
- Use `copy()` function to copy a set. eg. `x = {1, 2, 3}, y = x.copy()` will copy x to y.
- Use `union()` function to return a set containing the union of two sets. eg. `x = {1, 2, 3}, y = {4, 5, 6}, x.union(y)` will output `{1, 2, 3, 4, 5, 6}`
- Use `intersection()` function to return a set containing the intersection of two sets. eg. `x = {1, 2, 3}, y = {2, 3, 4}, x.intersection(y)` will output `{2, 3}`
- Use `difference()` function to return a set containing the difference between two sets. eg. `x = {1, 2, 3}, y = {2, 3, 4}, x.difference(y)` will output `{1}`
- Use `symmetric_difference()` function to return a set containing the symmetric difference between two sets. eg. `x = {1, 2, 3}, y = {2, 3, 4}, x.symmetric_difference(y)` will output `{1, 4}`
- Use `issubset()` function to return True if all items in a set are present in another set. eg. `x = {1, 2, 3}, y = {1, 2}, x.issubset(y)` will output `False`
- Use `issuperset()` function to return True if all items in another set are present in a set. eg. `x = {1, 2, 3}, y = {1, 2}, x.issuperset(y)` will output `True`

### Python Booleans
- Booleans are used to represent the truth values False and True.
- Booleans are immutable data types.
- Booleans are used in conditional statements.
- example: `x = True`, `y = False`
- Use `and` operator to return True if both statements are true. eg. `5 > 3 and 5 < 10` will output `True`
- Use `or` operator to return True if one of the statements is true. eg. `5 > 3 or 5 < 3` will output `True`
- Use `not` operator to reverse the result. eg. `not(5 > 3)` will output `False`

### Python Indentation
- Indentation is used to define a block of code.
- Indentation is used in loops, functions, classes, etc.
- Indentation is used to make the code more readable.
- Most programming languages use curly braces `{}` to define a block of code, but Python uses indentation.
- If not properly indented, Python will raise an `IndentationError`.
- example:
```python
if 5 > 3:
print('5 is greater than 3') # IndentationError
```
```python
if 5 > 3:
    print('5 is greater than 3') # No Error
```



### Python If...Else
- If...Else statements are used to make decisions in Python.
- If...Else statements are used in conditional statements.
- example:
```python
x = 5
if x > 3:
    print('x is greater than 3')
else:
    print('x is less than or equal to 3')
```

### Python Elif
- Elif is short for Else If.
- Elif statements are used to make multiple decisions in Python.
- Elif statements are used in conditional statements.
- example:
```python
x = 5
if x > 3:
    print('x is greater than 3')
elif x < 3:
    print('x is less than 3')
else:
    print('x is equal to 3')
```

### Python Loops
- Loops are used to iterate over a sequence or a block of code multiple times.
- Python has two types of loops, such as `for` loop and `while` loop.

#### Python For Loop
- For loop is used to iterate over a sequence or a block of code multiple times.
- For loop is used in conditional statements.
- example:
```python
for x in range(5): # range(5) will generate numbers from 0 to 4
    print(x)
```
more examples:
```python
for x in range(1, 5): # range(1, 5) will generate numbers from 1 to 4
    print(x)
```
```python
for x in range(1, 10, 2): # range(1, 10, 2) will generate numbers from 1 to 9 with a step of 2
    print(x)
```
```python
for x in 'Hello': # iterate over a string
    print(x) # H e l l o line by line
```
```python
for x in ['apple', 'banana', 'cherry']: # iterate over a list
    print(x) # apple banana cherry line by line
```
```python
for x in ('apple', 'banana', 'cherry'): # iterate over a tuple
    print(x) # apple banana cherry line by line
```
```python
for x in {'name': 'John', 'age': 25}: # iterate over a dictionary
    print(x) # name age line by line
```

#### Python While Loop
- While loop is used to iterate over a sequence or a block of code multiple times.
- While loop is used in conditional statements.
- example:
```python
x = 0
while x < 5:
    print(x)
    x += 1
```
more examples:
- Use `break` statement to stop the loop before it has looped through all the items.
```python
x = 0
while x < 5:
    print(x)
    if x == 3:
        break # break the loop if x is equal to 3
    x += 1
```
- Use `continue` statement to skip the current iteration and continue with the next iteration.
```python
x = 0
while x < 5:
    x += 1
    if x == 3:
        continue # skip the iteration if x is equal to 3
    print(x)
```

### Python Functions
- Functions are used to perform a specific task.
- Functions are used to avoid code repetition.
- Functions are used to make the code more readable.
- Functions are used to make the code more organized.
- example:
```python
def my_function():
    print('Hello World!')
my_function() # Hello World!
```
more examples:
```python
def my_function(name):
    print('Hello ' + name)
my_function('John') # Hello John
```
```python
def my_function(name = 'John'):
    print('Hello ' + name)
my_function() # Hello John
```
```python
def my_function(*kids): # *args is used to pass a variable number of arguments to a function
    print('The youngest child is ' + kids[2]) # kids is a tuple
my_function('John', 'Jane', 'Jake') # The youngest child is Jake
```
```python
def my_function(**kid): # **kwargs is used to pass a keyworded, variable-length argument list to a function
    print('His last name is ' + kid['lname']) # kid is a dictionary
my_function(fname = 'John', lname = 'Doe') # His last name is Doe
```










