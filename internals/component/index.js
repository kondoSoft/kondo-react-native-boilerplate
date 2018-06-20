module.exports = {
  description: 'this is the test',
  prompts: [{
    type: 'list', 
    name: 'type',
    message: 'Choose a type of component',
    default: 'Stateless component',
    choices: () => ['Stateless component', 'N/A Pure component', 'N/A Stateful component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What is the name?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }
      return 'The name is required';
    }
  }],
  actions: (data) => {
    let componentTemplate
    let styledComponentTemplate
    switch (data.type) {
      case 'Stateless component': {
        componentTemplate = './component/statelessComponent.js.hbs'
        break;
      }
      default: {
        componentTemplate = './component/statelessComponent.js.hbs'
      }
    }

    const actions = [{
      type: 'add',
      path: '../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    },{
      type: 'add',
      path: '../src/components/{{properCase name}}/styled.js',
      templateFile: './component/styledStatelessComponent.js.hbs',
      abortOnFail: true,
    }];

    return actions
  }
}
