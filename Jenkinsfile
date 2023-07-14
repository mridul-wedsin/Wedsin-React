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
        sh 'JENKINS_NODE_COOKIE=dontKillMe PORT=3001 npm start &'
        sh 'JENKINS_NODE_COOKIE=dontKillMe PORT=3002 npm start &'
        sh 'JENKINS_NODE_COOKIE=dontKillMe PORT=3003 npm start &'
      }
    }
  }
}