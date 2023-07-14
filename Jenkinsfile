pipeline {
  agent any
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
            

    stage('Deploy') {
      steps {
        sh 'PORT=3001 npm start &'
        sh 'PORT=3002 npm start &'
        sh 'PORT=3003 npm start &'
      }
    }
  }
}