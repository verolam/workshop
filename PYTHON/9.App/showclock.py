# IMPORTS
#------------------------------

import tkinter 
import time

#print ( dir(time) )


#  WINDOW
#-------------------------------
# Create the window
win = tkinter.Tk()

win.title("A simple clock with Python Tkinter")

# Screen width and height
screen_width = win.winfo_screenwidth()
screen_height = win.winfo_screenheight()

# Center the window on screen
win_pos_x = int( (screen_width / 2) - 250 ) 
win_pos_y = int( (screen_height / 2) - 150 )

# Windows size and position as a string. Exemple: "500x300+positionX+positionY"
win.geometry(f"500x300+{win_pos_x}+{win_pos_y}")


#CREATE AND CONFIG THE CONTENT
#----------------------------------

title = tkinter.Label()
clock = tkinter.Label()

title["text"] = "Your time is currently :" 
title["font"] = ("Open Sans", 14)

clock["text"] = "ERROR :" 
clock["font"] = ("Open Sans", 32)
clock["bg"] = "#fff" 


#PUT THE LABELS ON THE GRID

win.rowconfigure(0, weight = 0)
win.rowconfigure(1, weight = 1)
win.columnconfigure(0, weight = 1)

title.grid(row = 0 , column=0, pady=20, ipady=5)
clock.grid(row = 1 , column=0, pady=0, ipadx=10, ipady=5)


# clock.pack()
# title.pack()


# CLOCK LOGIC FUNCTION
#----------------------------------
def update_time():
    clock["text"] = time.strftime("%H:%M:%S")
    win.after( 1000,update_time )

update_time()



# This will LOOP EVERYTHING INSIDE THE WINDOW
win.mainloop()

