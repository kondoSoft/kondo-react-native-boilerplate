module.exports = {
  description: 'this is the test',
  prompts: [{
    type: 'list', 
    name: 'type',
    message: 'Do you want a container',
    default: 'Stateful component',
    choices: () => ['Stateful component', 'Stateless component', 'Pure component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What is the name?',
    default: 'Home',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }
      return 'The name is required';
    }
  }],
  actions: (data) => {
    let containerTamplate
    switch (data.type) {
      case 'Stateful component': {
        containerTamplate = './container/stateFulContainer.js.hbs'
        break;
      }
      default: {
        containerTamplate = './container/stateFulContainer.js.hbs'
      }
    }

    const actions = [{
      type: 'add',
      path: '../src/containers/{{properCase name}}/index.js',
      templateFile: containerTamplate,
      abortOnFail: true,
    }];

    return actions
  }
}

