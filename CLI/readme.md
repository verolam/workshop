# COMMAND LINE INTERFACE  

### Thanks To Sorin Paun  :) :)

Must known bash commands
Note: "bash" is an acronym for "Bourne Again Shell" named after Stephen Bourne, the creator of the Unix shell.




#### USEFUL/MOST USED BASH COMMANDS
pwd : Print Working Directory

$ pwd
/PowerCoders/GitHub/support/CLI

ls : List (files and folders of the current working directory)

$ ls
dir1/  dir2/  README.md

add option -a to display also hidden files and folders

$ ls -a
./  ../  .bob/  dir1/  dir2/  README.md

cd : Change directory

$ cd /path/to/your/folder
Tip: if the path is too long, you can type cd and drag the folder into the bash window

cd .. - :  go to parent dir (one step above)

$ cd ..
or, go two or more steps above

$ cd ../..
$ cd ../../..
etc.

touch : Create a file

$ touch index.html
creates a file named "index.html" into the current dir

$ touch dir1/index.html
creates a file named "index.html" into "dir1" (if dir exists)


mkdir : Make Directory

$ mkdir dir3
creates a folder named "dir3" into the current dir


rm : Remove file/directory

$ rm index.html
removes the file "index.html" (if exists)

$ rm dir3
removes the folder "dir3" (if exists and not empty!)

$ rm dir3 -r
removes the folder "dir3" even if not empty. -r stands for recursive

mv : Move file/directory

$ mv style.css dir1

or

$ mv style.css ./dir1
moves "style.css" from current directory to dir1

$ mv dir1/style.css .

or

$ mv dir1/style.css ./
moves "style.css" from "dir1" to current directory


cp : Copy file/directory

$ cp style.css dir1
to copy the file "style.css" to "dir1"

$ cp -r dir1 dir2
to copy "dir1" into "dir2" (-r option is for recursive)


clear : Clear bash window

$ clear 

### OTHER USEFUL COMMANDS
nano : 
Edit a file

$ nano file.txt
will open "file.txt" inside bash editor

Then, inside nano editor
CTRL + X - to quit the editor (will be asked to save the file)

Y/N - to save or not the content

ENTER - to validate


cat : See (the content of a) a (text) file

$ cat file.txt
if you want to see also the line numbers, add the option -n

$ cat file.txt -n


BASH ALIAS
Create aliases (or shortcuts) to boost your productivity with bash

Locate a file named ".bash_profile" or ".bashrc" inside the user folder ~/
If the file doesn't exists, create it!

Open the file with a text editor (like VS Code ;-)) and write your first aliases :

# Note: only one space is permitted, after alias keyword
# A shortcut to the user folder
alias me='cd ~/'

# A shortcut to Poco folder
alias poco= 'cd ~/POWERCODERS'

# A shortcut to workshop folder
alias work= 'cd ~/POWERCODERS/workshop'
Save the file and restart your bash app (if opened).
Try the aliases you just created!



USEFUL KEYBOARD SHORTCUTS
Up / Down arrows ↑ ↓ - Navigate in bash history
Copy (a selection in bash) → CTRL + Insert
Paste (a selected text) → SHIFT + Insert
Exit text mode (when you're stuck with >) → CTRL + C

