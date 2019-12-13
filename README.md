# cypressBase
Element identification for modern javascript web controls.
Developers find the existing automation framework is not that developer friendly to contribute in adding automation tests.
Most important is FLAKY tests.
 Majority of cypress users are front-end developers building web applications using modern JavaScript frameworks.

With cypress, no Flaky tests:-

Cypress knows and understands everything that happens in your application synchronously. Cypress executes the vast majority of its commands inside the browser, so there is no network lag.

https://docs.cypress.io/guides/overview/key-differences.html#Flake-resistant

Intelligent debugging:-

There are hundreds of custom error messages describing the exact reason Cypress failed your test.

There is a rich UI which visually shows you the command execution, assertions, network requests, spies, stubs, page loads, or URL changes.

Real cool is - Cypress takes snapshots of your application and enables you to time travel back to the state it was in when commands ran.

https://docs.cypress.io/guides/guides/debugging.html#Using-debugger

 

How Cypress Works ?

Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.

Behind Cypress is a Node server process. Cypress and the Node process constantly communicate, synchronize, and perform tasks on behalf of each other. Having access to both parts (front and back) gives us the ability to respond to your application’s events in real time, while at the same time work outside of the browser for tasks that require a higher privilege.

Cypress also operates at the network layer by reading and altering web traffic on the fly. This enables Cypress to not only modify everything coming in and out of the browser, but also to change code that may interfere with its ability to automate the browser.

Cypress ultimately controls the entire automation process from top to bottom, which puts it in the unique position of being able to understand everything happening in and outside of the browser. This means Cypress is capable of delivering more consistent results than any other testing tool.

Because Cypress is installed locally on your machine, it can additionally tap into the operating system for automation tasks. This makes performing tasks such as taking screenshots, recording videos, general file system operations and network operations possible.



Setting up Cypress
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

macOS 10.9 and above (64-bit only)
Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
Windows 7 and above


Install Cypress via npm:

cd /your/project/path
npm install cypress --save-dev
For windows users

npm init
it will add "package.json" file to your project.

add below command in "package.json"  under "scripts"

"cy:open": "cypress open"



to launch cypress:-

project directory> npm run cy:open
 

Installing Cypress via yarn:

cd /your/project/path
yarn add cypress --dev
