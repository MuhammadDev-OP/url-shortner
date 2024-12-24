📝 Setup and Installation
Follow these steps to set up the project:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add:

env
Copy code
BASE_URL=http://localhost:8080
MONGO_URI=your_mongo_database_uri
REDIS_URI=your_redis_instance_uri
Run the application:

bash
Copy code
npm run dev
Test the endpoints: Use Postman or cURL to interact with the API.
