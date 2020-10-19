pipeline {
    agent any
      

    stages {
        stage('Git checkout') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/betawins/Trading-UI.git'
                   }

            }
        stage('change to root directory'){
            steps{
            sh 'cd /'
            }
        }
        stage('install npm and noejs'){
            steps{
                sh 'rm -rf /var/lib/jenkins/.nvm'
            sh 'cd  '
            sh 'cd && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash'
                
                sh '. ~/.nvm/nvm.sh'
                sh 'source ~/.nvm/nvm.sh'
                
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
