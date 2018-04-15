-----------------------------------
# INSTALL:

```
cd project_path
npm i --save
```

-----------------------------------
# RUN:

```
cd project_path
npm start
```

-----------------------------------
# FLOW
https://flow.org/en/docs/react/
https://flow.org/en/docs/types/

## The first time, run:

```
npm run flow init
```

## Check for flow errors, run:

```
npm run flow
```

## Error: Required module not found, run

### Install flow-typed

```
npm install -g flow-typed
```

### Add flow-typed for module

```
flow-typed install [module_name]@[module_version]
```

-----------------------------------
# SASS

## Install, run:

```
npm install node-sass-chokidar --save-dev
npm install npm-run-all --save-dev
```

## Edit package.json:

```
-    "start": "react-scripts start",
-    "build": "react-scripts build", // default
-    "build": "babel src/ -d lib/",  // or flow
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "build-js": "react-scripts build", // default
+    "build-js": "babel src/ -d lib/", // or flow
+    "build": "npm run build-css && build-js",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
```

-----------------------------------
# TEST
https://facebook.github.io/jest/docs/en/tutorial-react.html
https://facebook.github.io/jest/docs/en/mock-functions.html
https://facebook.github.io/jest/docs/en/snapshot-testing.html
https://facebook.github.io/jest/docs/en/expect.html

## Install, run:

```
yarn add --dev react-test-renderer
```

## Test, run:

```
yarn test
```

## Update snapshot, run:

```
yarn test -u
```

-----------------------------------
# ESLINT
https://eslint.org/docs/user-guide/getting-started

## Install, run:

```
npm install eslint

// or globally
// npm install -g eslint
```

## The first time, run:

```
// Linux and Mac
./node_modules/.bin/eslint --init
// Windows
// .\node_modules\.bin\eslint --init

// or globally
// eslint --init
```

