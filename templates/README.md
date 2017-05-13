[![npm version](https://badge.fury.io/js/<%= dashedName %>.svg)](https://badge.fury.io/js/<%= dashedName %>)
[![Build Status](https://travis-ci.org/<%=githubUsername%>/<%= dashedName %>.svg)](https://travis-ci.org/<%=githubUsername%>/<%= dashedName %>?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/<%=githubUsername%>/<%= dashedName %>/badge.svg?branch=master)](https://coveralls.io/github/<%=githubUsername%>/<%= dashedName %>?branch=master)

<%= dashedName %>
===========

*<%= dashedName %>* is a simple module that...  

Check out the [demo](http://<%=githubUsername%>.github.io/<%= dashedName %>/#demo)!

[Bug-reports or feature request](https://github.com/<%=githubUsername%>/<%= dashedName %>/issues) are welcome!

## Getting started
Install it via npm:
```
npm install <%= dashedName %> -S
```

And add it as a dependency to your main module
```typescript
import {<%= ngModuleName %>} from '<%= dashedName %>/dist';

@NgModule({
  imports: [
    <%= ngModuleName %>.forRoot(),
  ],
})
export class MainAppModule {
}
```
Using the library is easy:
```html
<<%= dashedName %>></<%= dashedName %>>
```
```typescript
export class SomeComponent {
    someAction(){
    }
}

```

## Configuration
Configuration is done via the forRoot method of the promise button module:
```typescript
import {<%= ngModuleName %>} from '<%= dashedName %>';

@NgModule({
  imports: [
    <%= ngModuleName %>
      .forRoot({
        // your custom config goes here
      }),
  ],
})
export class MainAppModule {
}
```
