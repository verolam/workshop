# MODULES
#-------------------------
# its an object 

#IMPORT : Getting a module

# import math

# Create a module alias
import math as m

# See all the methods inside math module
print( dir(m) )
mf = m.floor(5.45)
print(mf)

mc = m.ceil(5.45)
print(mc)

# You can import ONLY the methods you need
from math import ceil, floor

mf = floor(5.45)
print(mf)

mc = ceil(5.45)
print(mc)

#import custom MODS and METHODS
from mod import printus

printus(3*3)

# TIME MODULES
#---------------------
import time

# print ( dir(time) )

local = time.localtime()
print(local)

#tm_year=2020, tm_mon=5, tm_mday=20, tm_hour=13, tm_min=40, tm_sec=56, tm_wday=2, tm_yday=141, tm_isdst=1)

print(type(local.tm_year))

def calc_age():
    
    user_val = input("Your birth year please:")

    if not user_val.isnumeric():
          return "We need an integer dude!"
    return local.tm_year - int(user_val)

    # if (isinstance(birth_year, int)):
    #     return local.tm_year- birth_year
    # else:
    #     return "We need an integer dude!"


# put 5 secondes before asking question
#time.sleep(5)

print ( calc_age())


