
pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     environment {
        CI = 'true'
        HOME = '.'

    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh('cd front-end && npm install')
                sh('cd back-end && npm install')
            }
        }

        
         stage('Build') { 
            steps {
                sh 'cd front-end && npm run build' 
            }
        }       
        
            
        
       
    }
}