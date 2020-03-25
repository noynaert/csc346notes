#04_05 Simple MySQL with Java

In Java, we connect to relational databases in a 2-step process.

* JDBC is a generic set of Java classes that apply to all (or at least most) relational databases.  All relational databases cover certain operations such as queries, updates, and creating tables.
* Connector is a specific set of classes that connect between the JDBC concepts and the specifics of a particular database.  The connector is often provided by the vendor of the database.

## MySQL and MariaDB

MySQL is not a true open source project.  It was owned by a company.  Because of a series of buy-outs Oracle almost by accident became the owner of MySQL.  This is a problem.

* Oracle was founded as a database company.  They had a history of trying to destroy MySQL.
* Oracle has a corporate history of exploiting its users. 

MariaDB was created as a true open-source version of MySQL.  Frankly, it isn't the best open source database. But it is good enough for my purposes.

## Getting the MYSQL connector

[Get the Connector](https://dev.mysql.com/downloads/connector/j/)

Get the "Platform Independent" version.  The OS-specific versions work, but you have to go looking for the .jar file we need.

### My method

* Download the Platform Independent version of the connector from Oracle.  You do not need to log in or sign up for an account.  Just click the "No thanks, just start my download" link.  Make sure you save it in a predictable place.  Download either the .
* Go to the folder that holds the downloaded file. Untar it.  [Obligatory XKCD cartoon](https://xkcd.com/1168/)

```bash
   tar -xzf mysql-connector-java-8.0.19.tar.gz
```

* Make a folder to contain your libraries.  I prefer to use ~/lib
* Move into the mysql folder that un-tarring created. 
* Copy the .jar file to your ~/lib file.

Make note of the version number.  We will need that later.

## Set the CLASSPATH environmental variable

I added the following statement to the end of my ~/.profile file.

```bash
   export CLASSPATH=$HOME/lib
```

The above should set the classpath the next time you log in.  To set it temporarily, execute the command at the command line, and then confirm it with ```echo $CLASSPATH```

There are other ways to set the classpath, and it is possible to set it on a per-program basis.  But I prefer to just use the same classpath across multiple programs.

## Create a new maven project in your IDE (VS Code, IntelliJ, or Eclipse)

In VS code close the current folder and open the project.  Make sure pom.xml is in the root.

At this point I like to do a quick compile and run, just to make sure everything is working.


## Add the Dependency

Our program will depend on the .jar file.  Therefore the jar file is a "Dependency."

We need to let Java know where to find the .jar file, and if there are multiple versions, which one should be used.

Do a search for ```mysql maven``` and look for the link to mvnrepository.com.  I found the link at [https://mvnrepository.com/artifact/mysql/mysql-connector-java](https://mvnrepository.com/artifact/mysql/mysql-connector-java).

I am using version 8.0.19, so I am going to click on that link.

copy and paste the generated code.

```xml
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.19</version>
</dependency>

```
Open the ```pom.xml``` file and locate the ```<dependencies>``` tag.  Note it is plural.

Paste the dependency from mvnrepository into the dependencies section of your pom.xml file.