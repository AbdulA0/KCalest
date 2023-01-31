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
        post {
         success {
            
            sh 'curl \
            -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer $GITHUB_KCALEST_TOKEN"\
            -H "X-GitHub-Api-Version: 2022-11-28" \
            https://api.github.com/repos/AbdulA0/KCalest/statuses/$GIT_COMMIT \
            -d "{\\"state\\":\\"success\\",\\"target_url\\":\\"$BUILD_URL\\",\\"description\\":\\"Unit tests passed on kcalest\\",\\"context\\":\\"continuous-integration/jenkins\\"}"'
        }
         failure {
            
            sh 'curl \
            -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer $GITHUB_KCALEST_TOKEN"\
            -H "X-GitHub-Api-Version: 2022-11-28" \
            https://api.github.com/repos/AbdulA0/KCalest/statuses/$GIT_COMMIT \
            -d "{\\"state\\":\\"failure\\",\\"target_url\\":\\"$BUILD_URL\\",\\"description\\":\\"Unit tests failed on kcalest\\",\\"context\\":\\"continuous-integration/jenkins\\"}"'
        }
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
