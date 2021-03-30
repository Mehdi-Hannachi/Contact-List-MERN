
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
          try{
          sh './node_modules/.bin/nightwatch -e chrome,edge tests'
          }
          catch (err){
          echo err
          }  
   }
   stage('end') {  
     echo "Success" 
     }
       
    }
}