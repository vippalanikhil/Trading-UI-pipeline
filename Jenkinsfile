pipeline {
    agent any
      

    stages {
        stage('Git checkout') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/betawins/Trading-UI.git'
                   }
}
        stage('Install npm prerequisites'){
            steps{
                sh'sudo su'
                sh'cd /var/lib/jenkins/workspace/nodejs-project'
                sh'npm install'
                sh'npm audit fix'
                sh'npm install'
                sh'npm run build'
            }
        }
    }
}
