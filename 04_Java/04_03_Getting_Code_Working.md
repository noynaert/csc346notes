# 04_3
 Getting Code working with Java

## Confirm that Java is installed and set up.

```bash
java --version
echo $JAVA_HOME
```

See the previous videos if you don't have Java or JAVA_HOME is not set.

## Install Maven

```bash
sudo apt install maven
```

Verify your installation of maven with the following

```bash
mvn --version
```

## Set up VS code

First, visit [https://code.visualstudio.com/docs/languages/java](https://code.visualstudio.com/docs/languages/java)

If you are running Windows 10 you can simply install the Java Extension Pack provided by Microsoft.  If you are a Mac or Linux user you will need to install the packages individually.

Install the following in order

*    Language Support for Java(TM) by Red Hat
*    Debugger for Java
*    Java Test Runner
*    Maven for Java
*    Java Dependency Viewer
*    Visual Studio IntelliCode

Actually, I searched for "Java Extension Pack" in the VS code Extension fly-out.  All of the above were installed at once.

## Create a simple Maven project and run it.

## Run Maven from the command line.