# A single countdown with time.sleep()
from time import sleep

# counter = 5
# end = 0

# while counter >= end:
   
#     print(counter, end="", flush=True)
#     print("\r", end="", flush=True)
    
#     counter -= 1
#     sleep(1)


counter = 0
end = 10

while counter <= end:
    print(counter, "\r", end="", flush=True)
    counter += 1
    sleep(1)


# STRFTIME

