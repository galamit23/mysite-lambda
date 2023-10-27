# Continuous Integration and Deployment Workflow

The continuous integration and deployment workflow for this project is defined in `.github/workflows/main.yml`. It is triggered on every push to the `main` branch and performs the following steps:

1. **Set up Environment:** It sets up the environment with Node.js 18.

2. **Configure AWS Credentials:** The workflow configures AWS credentials using GitHub secrets, providing secure access to AWS services.

3. **Install Dependencies:** It installs project dependencies using npm.

4. **Zip Code:** The Lambda function code is zipped to create a deployment package.

5. **Deploy to Lambda:** Finally, the workflow deploys the updated code to the AWS Lambda function named "LambdaFunc."

This workflow automates the deployment process whenever changes are pushed to the repository's `main` branch.

For more specific details on how to set up and use this project, please refer to the documentation and comments within the code files.

## Questions or Collaboration

If you have questions or would like to collaborate, feel free to reach out:

- Email: gal0688@gmail.com
- LinkedIn: https://www.linkedin.com/in/gal-amit-6945a9257/
