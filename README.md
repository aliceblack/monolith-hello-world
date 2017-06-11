# monolith-hello-world

This repo shows how to build a simple bubble with monolith-frontend and monolith-backend.

## Installation

1. Clone this repository: `git clone <url>`
2. Enter in it: `cd monolith-hello-world`
3. Install dependencies: `npm i`
4. Running example: `npm start`
Browse `http://localhost:5000` to see the result.

## Structure

### Backend = monolith-hello-world package

Backend just consists of only a simple `index.js` script.

In this script, we required `monolith-backend` module and stored it in the object `backend`.

Next we took the `Server` property and invoked the `create` function in order to initialize the Server object. This object takes care of:
1. node http server
2. express framework
3. socket-io framework

In order to actually start the server, we invoked the `open` method on the `server` object, passing in a port (5000).

Last but not least, we told the `server` object to serve the static bundle containing our app's frontend.

### Frontend = monolith-hello-world/frontend package

Frontend is a package created with `create-react-app`.

Details here: https://github.com/facebookincubator/create-react-app


#### Frontend dev process

After writing our simple backend, we ran these commands:

1. Install `create-react-app` globally: `npm i -g create-react-app`
2. Run `create-react-app`:
`create-react-app frontend`

We then installed our `monolith-frontend` package:
`npm i -S monolith-frontend`.

In `src/` we created a `HelloWorldBubble.js` file: this file describes the frontend of our bubble.

For more info, check the file out.

In `src/App.js`:
1. Imported our newly created `HelloWorldBubble.js`
2. Imported the optional default css the framework comes with
3. Inside the `render` method of the `App` class we replaced the inner `div` content with an instance of `HelloWorldBubble`.
In this instance we specified 2 parameters:
  - `time` (0) is the time in seconds our bubble is in its *alive* state. Zero means its state is always alive.
  - `url` (`http://localhost:5000`) specifies where the bubble should look for its backend behaviour.
