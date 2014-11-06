'use strict';

var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  askFor: function() {
    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      // this.log(require('yosay')());
      this.log(
        chalk.green('I will setup your new ', chalk.white.underline.bgGreen('jQuery plugin') + ' and Jasmine test!')
      );
    }

    var prompts = [{
      type: 'string',
      name: 'projectName',
      message: 'What\'s your jquery plugin\'s name?' + chalk.red(' (Required)'),
      validate: function (input) {
        if (input === '') {
          return 'Please enter your jquery plugin\'s name';
        }
        else {
          return true;
        }
      }
    }];

    this.prompt(prompts, function(props) {
      this.projectName = props.projectName;

      done();
    }.bind(this));
  },
  jqueryTemplate: function() {
    this.template('jquery.template.js', 'jquery.' + this.projectName + '.js');
  },
  jasmineTemplate: function() {
    this.template('jasmine.spec.template.js', 'tests/jquery.' + this.projectName + '.spec.js');
  }
});