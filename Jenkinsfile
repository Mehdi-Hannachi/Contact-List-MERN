
pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
         stage('test') {
             environment {
        scannerHome = tool 'SonarQubeScanner'
    }
                           steps {
            sh "${scannerHome}/bin/sonar-scanner"                           }
                           }        
        
       
    }
}