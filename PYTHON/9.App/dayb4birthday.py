# IMPORTS
#------------------------------

import tkinter
import time
from datetime import datetime





#  WINDOW
#-------------------------------
# Create the window
win = tkinter.Tk()

win.title("Time left before my next birthday with Python Tkinter")

# Screen width and height
screen_width = win.winfo_screenwidth()
screen_height = win.winfo_screenheight()

# Window width and height
win_width = 550
win_height = 260
win_title_height = 55

# Center the window on screen
win_pos_x = int( (screen_width / 2) - (win_width / 2) )
win_pos_y = int( (screen_height / 2) - (win_height / 2) - win_title_height)


# WINDOW AND ROW/COLUMN CONFIG
# ------------------------------------------
# region
# Windows size and position as a string. Exemple: "500x200+positionX+positionY"

win.geometry(f"{win_width}x{win_height}+{win_pos_x}+{win_pos_y}")


# Rows/Columns behavior
# Window content → center the content; 
# the "weight" arg permit the row/column to grow if there is space around

win.rowconfigure(0, weight = 0)
# win.rowconfigure(1, weight = 1)
win.columnconfigure(0, weight = 1)


# CREATE AND CONFIG CONTENT
# Create 2 widgets "Label" 
# to hold the title and the clock string
# ------------------------------------------
# region

title = tkinter.Label()
clock = tkinter.Label()

# Title config
title["text"]   = "My birthday will be in :"
title["font"]   = ("Open Sans", 14)
title["bg"]     = "#f5f5f5"

# Label config
clock["text"]   = "ERROR"
clock["font"]   = ("Open Sans", 32)
clock["bg"]     = "#81DAF5"


#PUT THE LABELS ON THE GRID

win.rowconfigure(0, weight = 0)
win.rowconfigure(1, weight = 1)
win.columnconfigure(0, weight = 1)

title.grid(row = 0 , column=0, pady=20, ipady=5)
clock.grid(row = 1 , column=0, pady=0, ipadx=10, ipady=5)


# CLOCK LOGIC FUNCTION
#----------------------------------

birthday = datetime(2020, 7, 30, 14, 50, 0)

def timeleft():
    clock["text"] = birthday -datetime.now() 
    win.after( 1000,timeleft )

timeleft()


# This will LOOP EVERYTHING INSIDE THE WINDOW
win.mainloop()
