var shell = require('shelljs')

const setupNativeFiles = () => {
	console.log('Setting up native files')
	shell.exec('react-native-git-upgrade')
}

const installDependencies = () => {
	console.log('installing all dependencies')
}

setupNativeFiles()