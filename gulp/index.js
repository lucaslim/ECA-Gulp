'use strict';

var fs = require('fs');
var scripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks').filter(scripts);

//Loads all task that is placed in the tasks folder
tasks.forEach(function(task) {
  require('./tasks/' + task);
});