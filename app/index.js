const Generator = require('yeoman-generator');

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
      name: 'gitPath',
      message: 'What is the name of your library (e.g. yourusername/yourrepo?',
      default: this.gitPath
    });

    return this.prompt(prompts)
      .then((answers) => {
        this.libName = answers.libName;
        this.gitPath = answers.gitPath;
      });
  }

  writing() {
    //this.fs.copyTpl(
    //  this.templatePath('index.html'),
    //  this.destinationPath('public/index.html'),
    //  { title: 'Templating with Yeoman' }
    //);

    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath()
    );
  }

  install() {
    this.installDepdencies();
  }
};