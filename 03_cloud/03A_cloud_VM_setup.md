# 03A Google Cloud Server Setup

In this exercise we will set up a full virtual machine (vm) on Google Cloud.

* If you are a Windows user, install Putty.
* Before you begin, generate an SSH key pair. [Here is one site that will walk you through the process.](https://help.skysilk.com/support/solutions/articles/9000108363-how-to-generate-ssh-keys-on-windows-linux-and-mac-os-x)
* Install git.  Not that you need it for this exercise, but do it anyway.


## Get your account set up

There is a link in the Cloud unit in Canvas.  Visit that link and go through the process of setting up your account.

## Visit the Google Cloud portal

[https://console.cloud.google.com/](https://console.cloud.google.com/)

Go to the console.cloud website and log in.  I am not sure exactly what you will face at this point.  I kept getting prompted to set up a billing account until I set up a project and linked it to my grant.

Set up a project for CSC 346.  I suggest you use csc346 plus your name when setting up the project.

The server we create in this demo as well as any other services we set up should be in this account.

### Create your virtual server

* On the left side of the page, go to "Compute Engine."
* On the left side of the page go to VM instances.
* Click "Create"
* In the create menu do the following
    * Give it a meaningful name.
    * Confirm your region.  You generally want whatever is closest to you.  I picked us-central1 (Iowa) for both the region and the zone.
    * Pick the machine type. For this class the micro instance is fine.  And cheap!
    * Pick the size boot image and disk size.  I recommend 18.04LTS until 20.04LTS comes out.  ~~10GB of hard disk is probably adequate for this first server, but it would not take too much to blow by that~~ Make the server 20 GB.
* At the Firewall be sure to Allow HTTP traffic.
    * You may also allow HTTPS traffic, but don't do this unless you really intend to go through the process of setting up a named server and using a letsencropy certificate.  In fact, I suggest not allowing HTTPS traffic through until you have that set up.  You can always open the firewall later.
* Check your options, then click "Create"

### Connect to your server

After your server is created you should be able to see it under a list of VM Instances.

There is an internal and an external IP address.  You will probably want the external IP address.  Copy it to the clipboard, and probably write it down if you don't immediately put it in your hosts file.

In the list of VM instances, connect to the server with the "SSH/Open in Browser" option.

## Poking around and setting up

1. Do ```htop`` and confirm the amount of memory.
2. Set up swap space
   * sudo fallocate -l 1G /swapfile
   * sudo dd if=/dev/zero of=/swapfile bs=1024 count=1048576
        * this will take a while!
   * sudo chmod 600 /swapfile
   * sudo swapon
   * Use nano or vi to add the following line to /etc/fstab

   ```text
         /swapfile    swap    swap    defaults    0 0
   ```
    * confirm the syntax by tying ```sudo mount -a```

3. Update and upgrade your system if needed
4. install software
   * sudo apt install git
   * sudo apt install nodejs
   * sudo apt install npm
5. git clone your server, or create a new server for testing.  Make sure your app is running on port 80.
6. Run the server with the command ```sudo node express.js```  Note that you have to run this as sudo.

## Running the server as a service

So far we have only started the server at the command line.  We need the server to run continuously when you are not logged on.  On modern linux systems, this usually means running it as a service under systemd.

Reference: [https://hostpresto.com/community/tutorials/how-to-install-and-use-pm2-for-express-application/](https://hostpresto.com/community/tutorials/how-to-install-and-use-pm2-for-express-application/)

It isn't really hard to create a service.  However, this node.js so of course there is an npm package that makes it even easier.  And it does better as well.  It provides some nice features like automatically restarting the server if it crashes.

1. Make sure your server is stopped.  Use Ctrl-C at the command line if necessary.
2. Install the pm2 package globally.

```bash
sudo npm install pm2 -g
```
3. Make sure you are in the server directory and start your server with the following command

```bash
sudo pm2 start ./index.js
```
4. Use your browser to make sure the server is running. Also check it by typing at the command line ```sudo pm2 show index```
5. Create a daemon to start your server at reboot

```bash
sudo pm2 startup systemd
# you will get a command to copy/paste to the command line
sudo pm2 save  #not really sure this is necessary.
```

6. Try rebooting!

## Log in from your OS and VS Code

* Copy your public key to the metadata on console.cloud.google.com.
* Try ssh and sftp from the command line.
* In VS Code set up a local folder.  Put the following line in your sftp.json file: ```"privateKeyPath": "???/.ssh/id_ecdsa",```  Replace the ??? with the directory location.  On a linux system it is probably ~
* VS Code also has remote editing.  That would probably be better than VS Code.
* Optionally, put the IP address of your server in your hosts file.  Note that this will change if you stop the server between work sessions.  You can lock in a static IP address, but I think it costs more (Roughly $3 per month, from what I see. Prices went up a lot in 2020.  IPv6 should be cheaper, but so far Google's support of IPv6 appears spotty.
