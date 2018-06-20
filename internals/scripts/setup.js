var shell = require('shelljs')

const setupNativeFiles = () => {
	console.log('Setting up native files')
	shell.exec('mv .gitignore .gitignore.bk')
	shell.exec('react-native upgrade')
	shell.exec('rm .gitignore.bk')

}

const installDependencies = () => {
	console.log('installing all dependencies')
}

setupNativeFiles()