# 04_07 Java Beans

## POJO

A POJO is a "Plain Old Java Object."  It is usually based on a class that represents an entity.

In CSC 254 you learn to create POJOs.

There are style guidelines for POJOs, but not many requirements beyond syntax and logic considerations

## Java Beans

Java Beans are POJOs.  But not all POJOs are Java Beans.

* All data fields must be private.
* Data fields must have getters and setters that follow the standard pattern.
  * Boolean values must have a getter is "is" format instead of "get" format.
* There must be a default (no-arg) constructor.
* Must implement the Serializable interface.

### History and Current Relevance

Java Beans were a concept developed with Java Server Pages (jsp).  They were intended to make it easy for
web developers to use Beans without needing to know Java.

Beans have proven useful in Frameworks like Spring.  They are part of the "Dependency Injection" and
"Inversion of Control." These are sometimes called "Enterprise Java Beans" or EJB.  These tend to involve
encapsulating business logic in the EJB.  This contrasts with a lot of early descriptions of original Java Beans that specifically said to exclude business logic.

EJBs often include use of Java interfaces.  The interface may be implemented, but it is often injected rather than implemented.

## Serializable interface

The Serializable interface orginally had specific methods that needed to be implemented.  However, those have been removed in later versions of Java.  Now the Serializable interface is really just a marker.

### What is "serialize?"

Serialize basically means converting an object to a stream of characters.  So in practice something that implements the serializable interface should be able to "serialize" itself and also "deserialize" itself from a stream into an object.

The toString() method sort of works as a serializer.  However, toString() output is generally meant for humans to read.  The spirit of the serializable interface involves passing objects between software systems and across networks.  It is human readable, but structured more for ease of data processing.

Gson.toJson() and Gson.fromJson() work very nicely as a serializer and deserializer.

### Version Number

Under the old standard of the java.io.Serializable interface, each class should have a version number that would indicate the version number of that file format.  It must be a long integer.  The following format would typically be used for version 1 of the format.  The trailing zeros could be used for sub-version numbers.

```java
private static final long serialVersionUID = 1000L;
111

Many serializable objects still report a serialVersionUID, but it is not required.

## A Java Bean

### Name.java

```java
package com.noynaert.csc346.csv;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.Expose;

public class Name implements java.io.Serializable {
    private String first;
    private String last;
    @Expose (serialize = false, deserialize = false)
    private transient boolean validName;
    private static final long serialVersionUID = 1000L;
    
    public Name() {
        first = null;
        last = null;
        isValidName();
    }

    public Name(String first, String last) {
        setFirst(first);
        setLast(last);
    }
    
    public String getFirst() {
		return first;
	}
	public void setFirst(String first) {
        this.first = fixProperName(first);
        isValidName();
	}
	public String getLast() {
        return last;
	}

    public void setLast(String last) {
        this.last = fixProperName(last);
        isValidName();
    }

    private static String fixProperName(String name) {
        String result = name.toLowerCase();
        result = result.substring(0, 1).toUpperCase() + result.substring(1);
        return result;
    }

	@Override
	public String toString() {
        return String.format("%s, %s", last, first);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((first == null) ? 0 : first.hashCode());
		result = prime * result + ((last == null) ? 0 : last.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Name other = (Name) obj;
		if (first == null) {
			if (other.first != null)
				return false;
		} else if (!first.equals(other.first))
			return false;
		if (last == null) {
			if (other.last != null)
				return false;
		} else if (!last.equals(other.last))
			return false;
		return true;
	}

	public boolean isValidName() {
		return first!=null && last!=null;
	}

    public void setValidName(boolean dummy) {
        //The parameter is meaningless
        this.validName = isValidName();
    }
    
    public String toJson() {
        String json = "";
        Gson gson = new GsonBuilder().serializeNulls().create();
        json = gson.toJson(this);
        return json;
    }

    public static Name fromJson(String json){
        Name result = null;
        Gson gson = new GsonBuilder().serializeNulls().create();
        result = gson.fromJson(json, Name.class);
        result.isValidName();
        return result;
    }
}
```

### App.java
```java
package com.noynaert.csc346.csv;
//Reads csv file to a bean.

public class App 
{
    public static void main( String[] args )
    {
        System.out.println("\nStarting\n");
        Name name = new Name("JOHN", "doe");
        System.out.println(name);
        System.out.println(name.toJson());
        System.out.println(new Name().toJson());
        
        name = new Name();
        name.setFirst("Mary");
        System.out.println(name.toJson());

        Name person = name.fromJson("{\"first\":\"April\",\"last\":\"Dawn\"}");

        System.out.println(person);
        System.out.println( "\nDone!" );
    }
}
```
