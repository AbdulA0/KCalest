pipeline {
    agent any
    tools  {
        nodejs 'nodejs16'
    }
    
    environment {
    SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {
        stage('dependencies install') {
            when {
                branch "PR-*"
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Testing') {
            when {
                branch "PR-*"
            }
            steps {
                sh 'cp -avpr /opt/firebase.ts src/'
                sh 'npm test'
            }
        }
        stage('Code Anylasis') {
            when {
                branch "PR-*"
            }
           steps {
              withSonarQubeEnv('SonarCloud') {
                sh '$SCANNER_HOME/bin/sonar-scanner'
              }
                }       
          }
        stage('Quality Gateway') {
            when {
                branch "PR-*"
            }
           steps {
                waitForQualityGate abortPipeline: true
                }       
          }
    }
}
