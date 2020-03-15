# Installing Java on Linux

## Verify your version of Java

First do the command 

```bash
      java --version
``` 
### About the versions

* Java 11 is probably best, but anything 9 or later should work
* Openjdk vs Oraclejdk

## Your OS

### Linux
These notes are linux-centric.  I will leave you on your own if you are on Windows or Mac.  But you aren't really left alone because there are many web pages that tell you how to do this.

I am also using a distro that is downstream from Ubuntu.  Most things should work in other distros, but you will need to change "apt" to something like "dnf" or "yum" in other distributions.

### Windows and Mac

Make sure you have JAVA_HOME set as an environmental variable.

## Install Java using openJDK

```bash
    sudo apt update
    sudo apt install default-jdk
```

### Install Oracle Java

Oracle changed the licensing on their proprietary version of the Java JDK.  This has moved a lot of companies and universities to use of the openJDK version.  But if you want to run the Oracle version you may use the following if you are on Ubuntu 18.04 or later.  This part would be different for other distributions:

```bash
    sudo apt install software-properties-common
    sudo add-apt-repository ppa:linuxuprising/java
    sudo apt update
    sudo apt install oracle-java11-installer
```

## Checking Your System

If you installed a new version of Java use the command ```java --version``` to verify your version.

If you have multiple versions of java installed you may have conflicts.  Verify that you have the correct version as the default with the command ```which java```  If this shows the version you want, then you are good to go.  If it isn't we will fix it in the next step.


## Set JAVA_HOME

Type the following command.

```bash
      sudo update-alternatives --config java
```

If you only have the recently installed version you are good to move on.  If you have multiple versions installed you may need to follow the instructions so your system is using the correct version by default.

The update-alternatives command should show you the path you need to store in the JAVA_HOME environmental variable.  Copy it to the clipboard.

There are a lot of ways we could set the JAVA_HOME variable.  In this case you are running on a local machine, and anyone who logs in should be able to use the same JAVA_HOME.  Therefore it is reasonable to put the text in /etc/environment file.  You could use a command like the following:

```bash
      sudo nano /etc/environment
```

Add a line like the following to the end of the file (in this case I am assuming openjdk-11, but use the appropriate value on your system). *Do not put blank spaces around the = sign.*  

```bash
      JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
```
## reboot

The environment variable $JAVA_HOME is not yet set.  There are several ways to reset it manually, but the surest way is to reboot.  Log in again and type the following

```bash
      echo $JAVA_HOME
```
You should see the path to your java software.

## Test it out at the command line

It's a good idea to test your installation at the command line.

* Create a new directory with the ```mkdir``` and move into it with the ```cd``` command.
* use nano, vi, vim, or emacs to create a simple Java program.  
