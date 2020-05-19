# Challenge
#=====================================
# Calculate a surface
#-------------------------------
       
def calc_surface(dim1, dim2 ):
    surface = dim1 * dim2
    return surface
print( calc_surface(12, 14) )


#-------------------------------
# use *args to show we pass several args 

def calc_age_variant(*args):
  return max(args) - min(args)

print(calc_age_variant(1966, 2020))
 


# Function calculate profit
#---------------------------------*/
# The argument (arg)  is an object !!!!

def profit(cost_price,inventory,sell_price):
    result = 0
    result =  ( sell_price * inventory) - (cost_price * inventory) 
    result = round(result)
    print(result)
    return result


profit(cost_price = 32.67, sell_price = 45.00, inventory = 1200) 
profit(cost_price = 225.89, sell_price =  550.00, inventory = 100) 



# Function Remainder
#--------------------------------
def remainder(num1, num2):

    modulo = num1 % num2
    print("The remainder between " + str(num1) + " and " + str(num2) + " is " + str(modulo) )
    return modulo 
    
   
remainder(2560,3) #remainder =1
remainder(2550,5) #remainder = 0
  


# Function testing if an integer is divisible by 5 
#--------------------------------------------------
# A number is divisible by 5 if remainder = 0 or 5

def divisibleByFive(int):
    modulo2 = 0
    output = ""

    modulo2 = (int % 5)
 
    if (modulo2 == 0) or (modulo2 == 5) or (modulo2 == -5):
        output = "true"
    else: output = "false"
   
    print("divisibleByFive", output) 
    return output  
  

divisibleByFive(5) 
divisibleByFive(-55)
divisibleByFive(37)

