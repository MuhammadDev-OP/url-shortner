# URL Shortener Service

The **URL Shortener** service is a Node.js-based web application that allows users to shorten long URLs into compact, shareable links. The service also supports redirection from the short URL to the original URL. The system leverages **Redis** for caching to ensure optimized response times, high performance, and scalability. Error handling and validation mechanisms are integrated to enhance reliability and robustness.

---

## 📋 Description

This project provides URL shortening functionality using:
- **Node.js** and **Express.js** for server-side logic.
- **Redis** for caching frequently accessed data.
- **MongoDB** for persistent data storage.

---

# URL Shortener Project

## 🚀 Getting Started

### Clone the Repository
To get started with the project, first clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
Install Dependencies
Install the necessary dependencies using npm:

bash
Copy code
npm install
Configure Environment
Create a .env file in the root directory of the project and add the following environment variables:

env
Copy code
BASE_URL=http://localhost:8080
MONGO_URI=your_mongo_database_uri
REDIS_URI=your_redis_instance_uri
Start the Server
Once your environment variables are configured, start the development server:

bash
Copy code
npm run dev
