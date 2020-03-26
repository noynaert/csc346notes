# Maven in JS Code

## Video Link

* [Running Maven](https://mwsu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c48ba49b-9a48-4e0f-8e23-ab89010f919a)

## What is Maven?

### Build engine

* Replaces the old "make" system
* xml based configuration
* pom.xml file defines the project

### Gradle is an alternative to Maven

* Also replaces the old "make" system
* Used in mobile app development
* Json based configuration

## Starting a project

### archetype

A Maven *archetype* is a pattern describing how a project should be laid out.  It controls things like how folders are organized.  It also includes a basic set of dependencies that are used in the project.

### Group ID and Package

The Group ID and the package system address the "namespace" problem.

Group ID and package name should be unique

Generally, start with the company's domain name backwards.  Then add company-standard specifiers

The Group ID and Package serve different purpose.  But we won't really need to distinguish between them for now.

### artifact

This is the name of your project.