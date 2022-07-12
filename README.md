# QA_Shopify
Testing various shopify websites to analyze their DOM and their checkout flow. Using Cypress and Javascipt and using DOM elements of different shopify websites currently up and running to Automate testing the Checkout flow.


# Technology Stacks
* Javascript
* Cypress

# Prerequisities
* Visual Code - IDE
* Cypress 10.3.0 - Testing Framework

Cypress 10 or newer version needed to run cy.js files within the Browser

# Setup
> Install Visual Code as it will be used as IDE for the Implementation https://code.visualstudio.com/

Create a folder within your directory where we want all the files. Folder can be made either by mkdir [foldername] in the Command Prompt or by creating it in the File Explorer.
Use following command to change directory.
 
``` $ cd [foldername] ```

Following command used to start Visual Code IDE.

``` $ code . ```

In Visual Code, enter following shortcut key to open terminal.

``` Ctrl + ` ```

Now for Node Package Manager(NPM)

``` npm init -v ```

``` npm install cypress --save-dev ```

# Executing Tests
* Run following command.

```  npm cypress open ```


* Open e2e testing window and select desired Browser to test the checkout flow

* Select soyoung_CheckOutFlow.cy.js file to run checkout flow of soyoung website.


