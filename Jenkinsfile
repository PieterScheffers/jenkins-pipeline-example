node {
    stage "Prepare environment"
        checkout scm
        def environment  = docker.build 'jenkins-pipeline-example'

        environment.inside {
            stage "Checkout and build deps"
                sh "npm install"

            stage "Test and validate"
                sh "npm test"
        }

    stage "Cleanup"
        deleteDir()
}
