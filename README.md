# Currently Viewing App

Shows a list of IP addresses viewing the page

## Installation

Checkout the code inside a folder, then open 2 terminals.

### Client

1. go to the client folder
2. ```npm install```
3. open ```client/src/containers/home/index.js```, in line 18, replace 127.0.0.1 by your local IP address. (This is necessary if you want to use the app from another computer.)
4. ```npm start```

### Server

1. go to the server folder
2. create a virtualenv with python3, activate it
3. ```pip install -r requirements.txt```
4. open ```server/app.py```, in line 45, replace 127.0.0.1 by your local IP address (this should help speed up the connections)
4. ```python app.py```

## Running the application

From any computer, connect to ```<your-ip-address>:3000```.

For example, if your computer IP is 192.168.0.123, connect to http://192.168.0.123:3000

## Please note!

This application is using the development web servers on both the client and the server. These are not optimized for network operations and depending on the network that you use and the speed of your computer, it will take a while to accept the connections. 

On my network over wifi, when making a connection from a second computer, sometimes the server would pause for a minute before resuming operations. Be patient!
