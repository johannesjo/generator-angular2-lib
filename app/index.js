const Generator = require('yeoman-generator');
const _s = require('underscore.string');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.libName = this.args[0];
  }

  prompting() {
    const prompts = [];
    if (!this.libName || this.libName.trim() === '') {
      prompts.push({
        type: 'input',
        name: 'libName',
        message: 'What is the name of your library?',
        default: this.libName
      });
    }

    prompts.push({
      type: 'input',
      name: 'githubUsername',
      message: 'What is your github username?',
      default: this.githubUsername
    });

    return this.prompt(prompts)
      .then((answers) => {
        if (answers.libName) {
          this.libName = answers.libName;
        }
        this.githubUsername = answers.githubUsername;
        // setup other vars
        this.targetPath = this.libName;
        this.dashedName = _s.dasherize(this.libName);
        this.classedName = _s.classify(this.libName);
        this.cameledName = _s.camelize(this.libName);
        this.ngModuleName = this.classedName + 'Module';
      });
  }

  writing() {
    this.targetPath = this.dashedName;
    const currentDir = process.cwd().split(path.sep).pop();
    this.isInDir = currentDir === this.dashedName;
    if (this.isInDir) {
      this.targetPath = '';
    }

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.targetPath),
      this
    );

  }

  install() {
    const base = this.destinationPath(this.targetPath + 'src/');
    this.fs.move(base + 'directive.ts', base + this.dashedName + '.directive.ts');
    this.fs.move(base + 'directive.spec.ts', base + this.dashedName + '.directive.spec.ts');
    this.fs.move(base + 'module.ts', base + this.dashedName + '.module.ts');
    if (!this.isInDir) {
      this.spawnCommand('cd', [this.dashedName]);
    }
    this.spawnCommand('npm', ['install']);
    this.spawnCommand('npm', ['run', 'link-mod']);
    //this.spawnCommand('npm', ['run', 'dev']);
  }
};
