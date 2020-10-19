pipeline {
    agent any
      

    stages {
        stage('Git checkout') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/betawins/Trading-UI.git'
                   }

            }
        stage('install npm and noejs'){
            steps{
            sh 'cd'
            sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash'
                sh '. ~/.nvm/nvm.sh'
                
                sh 'nvm install node'
            }
        }
        stage('Node and npm version') {
            steps{
            sh 'npm --version && node --version'
            }
        }
        }
}
