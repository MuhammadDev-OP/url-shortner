# URL Shortener Service

The **URL Shortener** service is a Node.js-based web application that allows users to shorten long URLs into compact, shareable links. The service also supports redirection from the short URL to the original URL. The system leverages **Redis** for caching to ensure optimized response times, high performance, and scalability. Error handling and validation mechanisms are integrated to enhance reliability and robustness.

---

## 📋 Description

This project provides URL shortening functionality using:
- **Node.js** and **Express.js** for server-side logic.
- **Redis** for caching frequently accessed data.
- **MongoDB** for persistent data storage.

---

## 📐 Architecture Diagram

*(Insert or link the architecture diagram here.)*

---

## 📂 Design Structure

The application uses the **MVC (Model-View-Controller)** design pattern for modularity and scalability:

1. **Model**: 
   - Schema for storing URLs (`Urls` schema).
2. **Controller**: 
   - Handles core logic, request validation, and responses.
3. **View**: 
   - Not applicable (REST API).
4. **Utilities**:
   - Error handling (`ApiError` and `ApiResponse` utilities).
   - Redis integration for caching.

---

## 🚀 API Documentation

### 1. **POST**: Compress URL  
**Endpoint**: `/api/urls/compressUrl`  
**Description**: Shortens the original URL.

#### Request
**Headers**:  
- Content-Type: `application/json`

**Body**:  
```json
{
    "originalUrl": "https://openai.com"
}
