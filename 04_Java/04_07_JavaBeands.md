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

