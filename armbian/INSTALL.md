### Initial login
ssh root@$IP  
passwd>1234  
(put in current password)  
(change root password)  
(create user, skip values)  
exit  
ssh $IP  
```
sudo apt-get -y install curl && bash -c "$(curl -fsSL https://raw.githubusercontent.com/voltamage/notes/master/armbian/oh-my-zsh_install)"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
bash -c "$(curl -fsSL https://raw.githubusercontent.com/voltamage/notes/master/armbian/oh-my-zsh_configure)"
```
Powerlevel10k | Input
--------------|------
does this look like a diamond|y
does this look like a lock|y
does this look like a debian logo|y
do all these icons fit|y
character set (unicode)|1
show current time (24hr)|2
prompt height (one line)|1
promt spacing (compact)|1
icons (many)|2
prompt flow (concise)|1
enable transient prompt (yes)|y
instant prompt mode (verbose)|3
apply changes to .zshrc|y
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/voltamage/notes/master/armbian/system_install)"
sudo armbian-config
```
personal>hostname>$NEWHOSTNAME  
network>IP>static>$NEWIP  
(may have to relogin ssh connection)  
```
sudo armbian-config
```  
system>DTB>hc1>reboot  
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/voltamage/notes/master/armbian/system_configure)"
```
