# Backend Node.js Application for Monday.com Integration

This Node.js application serves as a backend server for integrating with Monday.com using webhooks.

## Getting Started

These instructions will guide you through setting up the backend server and configuring Monday.com webhooks.

### Prerequisites

1. Node.js and npm installed on your machine.
2. ngrok installed to create a tunnel to expose your local server to the internet.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/backend-repo.git
    cd backend-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Setting Up ngrok

1. Install ngrok globally (if not already installed):
    ```bash
    npm install -g ngrok
    ```

2. Start ngrok to expose your local server:
    ```bash
    ngrok http running-port
    ```
   Replace `running-port` with the port number your Node.js server is running on (e.g., 3000).

   After running this command, ngrok will provide you with a public URL that forwards HTTP traffic to your local server.

### Configuring Monday.com Webhooks

1. Log in to your Monday.com account and navigate to the board you want to integrate with.

2. Go to the `Integrations` section and choose `Webhooks`.

3. Set up a webhook for item creation:
   - URL: `<ngrok-url>/webhook/create-board`
   - Method: POST

4. Set up a webhook for column value changes:
   - URL: `<ngrok-url>/webhook/update-board`
   - Method: POST

   Replace `<ngrok-url>` with the URL provided by ngrok (e.g., `http://abc123.ngrok.io`).

### Running the Application

1. Start the Node.js server:
    ```bash
    npm start
    ```

   Your server should now be running and accessible locally.

2. With ngrok running, your server is accessible over the internet via the ngrok-provided URL.

### Deployment

For production deployment, consider using a cloud platform like AWS, Heroku, or DigitalOcean. Update webhook URLs in Monday.com settings accordingly.

### Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-new-feature`.
5. Submit a pull request.

### Acknowledgments

- Thanks to Monday.com for their webhook integration and developer tools.