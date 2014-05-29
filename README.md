# grunt-console-log-test

Grunt plugin for preventing you from accidentally comitting a console.log statement into your project.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-console-log-test --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-console-log-test');
```

## merge-conflict task
_Run this task with the `grunt consoleLogTest` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Example

```js
'consoleLogTest': {
  files: [
    '**/*'
  ]
}
```

## Running the Tests
Run `grunt test`.

## Licenses
Original Sofware License: BSD
Grunt console.log Test License: Creative-Commons Share-Alike Attribution License

