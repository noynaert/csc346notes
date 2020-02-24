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
