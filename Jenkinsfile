pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-portfolio:latest'  // Local tag for the Docker image
    }

    stages {
        stage('Pull Latest Code') {
            steps {
                git branch: 'main', url: 'git@github.com:copeelite/fanghao-personal-portfolio.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Dockerize') {
            steps {
                script {
                    // Build a new Docker image with the local tag
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        stage('Clean Up Old Containers and Images') {
            steps {
                script {
                    // Stop and remove the old container
                    sh 'docker stop my-portfolio-container || true && docker rm my-portfolio-container || true'
                    // Remove the old Docker image
                    sh 'docker rmi -f my-portfolio:latest || true'
                }
            }
        }
        stage('Deploy New Container') {
            steps {
                script {
                    // Run the new Docker container with the latest image
                    sh 'docker run -d --name my-portfolio-container -p 3000:3000 $DOCKER_IMAGE'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
