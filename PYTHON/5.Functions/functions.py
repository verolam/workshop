# BUILD-IN FUNCTIONS
#=================================

# PRINT FUNCTION

# print("whatever")
# print("whatever","and","ever")

age = 12
# print("age is:", age )
# print("list\n", [1,2,3], sep=":")


# MAX, MIN, ROUND
# MAX & MIN
l= [3,6,27,78,12]
print( "max value is:",  max(l) )
print( "min value is:",  min(l) )

# ROUND
num = 3.255
# print ( "rounded number:", round(num, 2))


# INPUT
# input_val = input("Please enter your birth year:")
# calc_age = 2020 - int(input_val)
# print ("Your age is", calc_age)


#  CUSTOM FUNCTIONS
#=================================
def calc(x, y = 0):
    #pass # you cannot have an empty function so use pass to have a valid syntax
    return x + y

# print( calc(2, 8) )


#  Importing

import time 
# print( dir(time) )

local = time.localtime()
current_year = local.tm_year
print (local.tm_year)

#calculate age
def calc_age(birth_y):
    age = current_year - birth_y
    print("My age is :", age)
calc_age(1970)

#calculate age
def calc_age2():
    input_val = input("Birth year, please")
    return current_year - int(input_val)
   
print ( calc_age2() )




