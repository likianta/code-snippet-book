# Get Python Version Info By Script

```py
import sys

print(sys.version_info)  # this is a named-tuple
# -> sys.version_info(major=3, minor=11, micro=3, releaselevel='final', serial=0)

print(sys.version_info[:2])  # -> (3, 11)
print('.'.join(map(str, sys.version_info[:2])))  # -> '3.11'

# you can easily compare it with a target version
print(sys.version_info >= (3, 11))  # -> True

print(sys.version)
# -> '3.11.3 (main, May  7 2023, 18:40:36) [MSC v.1929 64 bit (AMD64)]'
```
