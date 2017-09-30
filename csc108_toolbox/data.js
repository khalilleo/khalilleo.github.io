const data = [{
        "name": "input(prompt)",
        "des": "打印出prompt，并请求用户输入一段string，按回车结束，返回string",
        "example": ">>> a = input('please give me a number: ')<br>please give me a number: 123(按下回车)<br>'123'"
    },
    {
        "name": "abs(x)",
        "des": "计算x的绝对值, 返回number",
        "example": ">>> abs(-4)<br>4"
    },
    {
        "name": "chr(i)",
        "des": "返回在计算机字典里i位置对应的字符，返回string",
        "example": ">>> chr(97)<br>'a'"
    },
    {
        "name": "ord(s)",
        "des": "返回字符s在计算机字典里对应的位置，返回number",
        "example": ">>> ord('a')<br>97"
    },
    {
        "name": "range(start, stop, step)",
        "des": "返回一个list of int, 从start开始，到stop结束，但不包括stop，每次+step；start和step可省略",
        "example": ">>> range(5)<br>[0, 1, 2, 3, 4]<br>>>> range(1, 5, 2)<br>[1, 3]"
    },
    {
        "name": "del d[k]",
        "des": "删除d中的key k和他对应的value",
        "example": ">>> d = {1: 'a', 2: 'b'}<br>>>> del d[1] <br>>>> print(d)<br>{2: 'b'}"
    },
    {
        "name": "d.get(k)",
        "des": "返回d中key k对应的value，返回None如果没有key k",
        "example": ">>> d = {1: 'a', 2: 'b'}<br>>>> d.get(1)<br>'a'"
    },
    {
        "name": "d.keys()",
        "des": "返回d中所有的key，以类似list的形式",
        "example": ">>> d = {1: 'a', 2: 'b'}<br>>>> d.keys()<br>[1, 2]"
    },
    {
        "name": "d.values()",
        "des": "返回d中所有的value，以类似list的形式",
        "example": ">>> d = {1: 'a', 2: 'b'}<br>>>> d.values()<br>['a', 'b']"
    },
    {
        "name": "d.items()",
        "des": "返回d中所有的key和value的pair，以list of tuple的形式",
        "example": ">>> d = {1: 'a', 2: 'b'}<br>>>> d.items()<br>[(1, 'a'), (2, 'b')]"
    },
    {
        "name": "f.close()",
        "des": "关闭文件, 返回None",
        "example": "暂无例子"
    },
    {
        "name": "f.read()",
        "des": "读取整个文件，返回string",
        "example": "暂无例子"
    },
    {
        "name": "f.readline()",
        "des": "读取下一行的文字，返回string，直到文件底部",
        "example": "暂无例子"
    },
    {
        "name": "f.readlines()",
        "des": "读取整个文件，返回list of string，每一行是一个string",
        "example": "暂无例子"
    },
    {
        "name": "f.write(s)",
        "des": "把string s写入文件, 返回None",
        "example": "暂无例子"
    },
    {
        "name": "f.close()",
        "des": "关闭文件, 返回None",
        "example": "暂无例子"
    },
    {
        "name": "L.append(x)",
        "des": "把x加到list L的最后, 返回None",
        "example": ">>> L = [1, 2]<br>>>> L.append(3) <br>>>> print(L)<br>[1, 2, 3]"
    },
    {
        "name": "L.extend(L2)",
        "des": "把L2拼到list L的最后, 返回None",
        "example": ">>> L = [1, 2]<br>>>> L.extend([3, 4]]) <br>>>> print(L)<br>[1, 2, 3, 4]"
    },
    {
        "name": "L.index(value)",
        "des": "返回value在L中出现的第一次的index",
        "example": ">>> L = [1, 2]<br>>>> L.index(2) <br>1"
    },
    {
        "name": "L.insert(index, x)",
        "des": "把x插入L的index对应的位置, 返回None",
        "example": ">>> L = [1, 2]<br>>>> L.insert(1, 3) <br>>>> print(L)<br>[1, 3, 2]"
    },
    {
        "name": "L.pop(index)",
        "des": "把L中index对应的item删除, 并返回出来；如果index不写，则删除最后一个item，并返回出来",
        "example": ">>> L = [1, 2]<br>>>> L.pop() <br>>>> 2"
    },
    {
        "name": "L.remove(value)",
        "des": "把L中第一次出现的value删除, 返回None",
        "example": ">>> L = [1, 2]<br>>>> L.remove(1) <br>>>> print(L)<br>[2]"
    },
    {
        "name": "L.sort()",
        "des": "把L中的item从小到大排列，返回None",
        "example": ">>> L = [3, 4, 1, 5]<br>>>> L.sort() <br>>>> print(L)<br>[1, 3, 4, 5]"
    },
    {
        "name": "L.reverse()",
        "des": "把L中的item反过来排列，返回None",
        "example": ">>> L = [3, 4, 1, 5]<br>>>> L.reverse() <br>>>> print(L)<br>[5, 1, 4, 3]"
    },
    {
        "name": "s.count(x)",
        "des": "返回x在s中出现了多少次，返回int",
        "example": ">>> '1122aba'.count('a')<br>2"
    },
    {
        "name": "s.endswith(x)",
        "des": "返回s是否是以x结束, 返回bool",
        "example": ">>> '1122aba'.endswith('a')<br>True"
    },
    {
        "name": "s.find(x)",
        "des": "返回x在s中出现的第一次的index，返回int",
        "example": ">>> '1122aba'.find('2')<br>2"
    },
    {
        "name": "s.isalpha()",
        "des": "返回s是否全部都是英文字母，返回bool",
        "example": ">>> '1122aba'.isalpha()<br>False"
    },
    {
        "name": "s.isdigit()",
        "des": "返回s是否全部都是数字，返回bool",
        "example": ">>> '1122aba'.isdigit('a')<br>False"
    },
    {
        "name": "s.islower()",
        "des": "返回s是否全部都是小写，返回bool",
        "example": ">>> 'abB'.islower()<br>False"
    },
    {
        "name": "s.isupper()",
        "des": "返回s是否全部都是大写，返回bool",
        "example": ">>> 'BB'.isupper()<br>True"
    },
    {
        "name": "s.lower()",
        "des": "返回s的小写形式",
        "example": ">>> 'abB'.lower()<br>'abb'"
    },
    {
        "name": "s.upper()",
        "des": "返回s的大写形式",
        "example": ">>> 'abB'.upper()<br>'ABB'"
    },
    {
        "name": "s.lstrip(char)",
        "des": "返回一个新的s，把原来s左边所有的char都去掉；如果char不写，那么把左边所有的空格都去掉",
        "example": ">>> '   abB'.lstrip()<br>'abB'"
    },
    {
        "name": "s.replace(old, new)",
        "des": "返回一个新的s，把原来s中所有的old替换成new",
        "example": ">>> 'abB'.replace('a', 'b')<br>'bbB'"
    },
    {
        "name": "s.rstrip(char)",
        "des": "返回一个新的s，把原来s右边所有的char都去掉；如果char不写，那么把右边所有的空格都去掉",
        "example": ">>> 'abB   '.rstrip()<br>'abB'"
    },
    {
        "name": "s.split(separator)",
        "des": "返回一个list，把原来s根据separator进行分割",
        "example": ">>> s = 'haha,haha,123'<br>>>> s.split(',')<br>['haha', 'haha', '123']"
    },
    {
        "name": "s.startswith(x)",
        "des": "返回s是否是以x开始, 返回bool",
        "example": ">>> '1122aba'.startswith('1')<br>True"
    },
    {
        "name": "s.strip(char)",
        "des": "返回一个新的s，把原来s左右所有的char都去掉；如果char不写，那么把左右所有的空格和\n都去掉",
        "example": ">>> '   abB   '.lstrip()<br>'abB'"
    },
    {
        "name": "print(s)",
        "des": "把s打印出来，返回None",
        "example": ">>> print(123)<br>123"
    },
    {
        "name": "len(x)",
        "des": " 返回x的长度，可以任何container，比如string、list、dict，返回int",
        "example": ">>> len([1, 2, 3])<br>3"
    }
]
