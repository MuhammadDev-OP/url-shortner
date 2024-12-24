# URL Shortener Service Assignment

## 📋 Description

The URL Shortener service is a Node.js-based web application that allows users to shorten long URLs into compact, shareable links. The service supports redirection from the short URL to the original URL. The system leverages Redis for caching to ensure optimized response times, high performance, and scalability.

## 🚀 Getting Started

### Clone the Repository

To get started with the project, first clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

### Environment Setup

Create a `.env` (All credentials are given in the Documentation pdf) file in the root directory with the following configurations:

```env
BASE_URL=http://localhost:8080
MONGO_URI=your_mongo_database_uri
REDIS_URI=your_redis_instance_uri
```

### Run the Application

Start the development server:

```bash
npm run dev
```

## 📐 Project Structure

The application uses the MVC (Model-View-Controller) design pattern:

1. Model: Schema for storing URLs
2. Controller: Handles core logic and validation
3. View: Not applicable (REST API)
4. Utilities: Error handling and Redis integration

## 🔧 API Endpoints

### 1. Compress URL

**POST /api/urls/compressUrl**

Request body:
```json
{
    "originalUrl": "https://codinito.com"
}
```

Success Response (200):
```json
{
    "statusCode": 200,
    "data": "Existing URL fetched",
    "message": {
        "_id": "676a265b8ec83090b66adbbe",
        "shortId": "_gzlmvdij",
        "shortUrl": "http://localhost:8080/api/urls/_gzlmvdij",
        "originalUrl": "https://codinito.com",
        "createdAt": "2024-12-24T03:11:23.847Z",
        "updatedAt": "2024-12-24T03:11:23.847Z"
    },
    "success": true
}
```

### 2. Redirect URL

**GET /api/urls/:shortId**


Response: Redirects to original URL (Status 302)

## 🛠️ Tech Stack

- Node.js and Express.js
- Redis for caching
- MongoDB for storage
- MVC architecture

## 💡 Future Enhancements

- Cloud deployment
- Authentication system
- Rate limiting
- Usage analytics
