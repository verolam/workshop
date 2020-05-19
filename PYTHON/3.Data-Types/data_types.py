# NUMBERS
#===========================================

# Integers
num_int = 3
print( type(num_int) )

# Floats
num_float = 5.35


# Type conversion
str1 = "Marcel"
print(type(str))

str_int = int("5")
print( type(str_int) )

str_float = float("3.25")
print( type(str_float) )

str_float = float("3")

int_str = str(3)

print ( 3+ 6 + 10 -1)


# STRINGS
#===========================================
#One line string
str_one_line = "Marcel is the new kid in the town"

#Multi lines string
str_multi_lines = '''
dfd
dgfsd
fdg
'''
# print(str_multi_lines)



# STRINGS METHODS
#--------------------------------

s = "python"
st = "I have no cats YEAH!!"


# Length 
print( len(s) ) #print length of "python"

# print(s.capitalize() )
# print( s.upper() )
# print( st.lower() )
# print( st.title() )

# Replace parts of the string
print ( st.replace("cats","dogs") )

# Split a string
print( st.split() )
print ( st.split('a') ) 
print ( st.split('a',1) ) 


# CONCATENATION
#--------------------------------
# In python you can concatenate only strings
concat = str(3) + "3"
#print (concat) 

name = "Marcel"
age = 36

phrase = name + " is  " + str(age)  +  " years old" 

# The coolest way to concatenate
phrase = f"{name} is {age} years old"


print (phrase)



# BOOLEANS $ NULLS
#==========================

b_true = True
b_false = False
b_null = None



# COLLECTIONS (python arrays)
#===============================

#LISTS (mutable)
l = [1,2,3,4]

print( l[2] )


# DICTIONARY (mutable)
d = {
  "first_name": "Marcel",
  "last_name": "Duchamp",
  "age" : 27
}

d["first_name"] = 'Bob'
#print (d["first_name"])


# TUPLES (immutable)
t = ("January", "February", "March")
#print(t[1])


# SET
s1 = {"apple", "car", 56}
s2 =  {1, 8, 9, 2, 45, 0, 99, 1}

#print(s2)






