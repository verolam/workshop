# LISTS
#-----------------------
arr = ["monkey","dog","snake","spider","zebra"]

# print(arr[1])
# arr[1] = "cat"
# print(arr)

# arr.append("horse")
# print(arr)

# arr.pop(2)  
# print(arr)

# # arr.pop(-2)  
# # print(arr)

# arr.remove("spider")
# print(arr)

# arr.insert(1,"leopard")
# print(arr)

# print(len(arr))


arr_num = [8, 95, 21, 1, 6]
# print( min(arr_num))
# print( max(arr_num))

print( min(arr))
print( max(arr))



# DICTIONARIES
#-----------------------
person = {
    "first_name": "John",
    "last_name": "Doe",
    "age" : 21 
}

#print(person["first_name"], person["last_name"])

person["last_name"] = "Wayne"
print(person)

person["job"] = "Web dev"
print(person)




# TUPLES
#-----------------------
# constant list

tup =("monkey","dog","zebra")
# print (tup[1])

tup = list(tup)
tup[1] = "cat"
tup = tuple(tup)
# print(tup)

# arr.sort()
# print(arr)

arr.sort(reverse=True)
# print(arr)
