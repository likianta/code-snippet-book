# Which Platform

```py
import sys
print(sys.platform)
# -> darwin / linux / win32
```

使用 `sys.platform` 的好处:

1. 只有三个值, 简单纯粹
2. 小写, 不用顾虑大小写转换
3. poetry 可识别: `pywebview = { version = "*", platform = "win32" }`
