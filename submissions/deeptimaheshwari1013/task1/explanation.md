mkdir cyber_lab --> this is used to create a directory

cd cyber_lab --> this is used to change the directory

touch visible.txt --> used to create a file inside the directory

touch .secret.txt --> a file is hidden if the name begin with a "." naming convention, not a security feature. to create a hidden file just add a dot before the filename. 

chmod a=r visible.txt --> to change permissions of a file in linux, we use the chmod command! so we can either use numeric(octal) mode or symbolic mode

ls -a --> lists all files, including  current directory and parent directory 

ls -la > output.txt --> ">" re-direction operator, if file doesnt exist this command shall create it! 
