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
      }
    }
  }
}