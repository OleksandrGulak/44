## 🌐 React Context Demo App
📌 Project Overview
This project demonstrates how to use React Context to share global data across multiple levels of components without prop drilling. It includes a simple user list and profile viewer, showing how deeply nested components can access shared state using useContext.

## 🛠 Technologies Used
- React
- Vite
- React Context API

## 📁 Project Structure
'''
my-context-app/
├── src/
│   ├── context/
│   │   └── AppContext.jsx
│   ├── components/
│   │   ├── UserList.jsx
│   │   └── UserProfile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── README.md
└── ...
'''


## 🚀 Getting Started
1. Clone the repository
git clone https://github.com/OleksandrGulak/44.git
cd my-context-app


2. Install dependencies
npm install


3. Run the development server
npm run dev


Open your browser at http://localhost:5173

## 🧩 Features
- ✅ Global state management using React Context
- ✅ No prop drilling — data accessed directly via useContext
- ✅ Clean component structure with 2–3 levels of nesting
- ✅ Styled layout with centered content and shadow box
- ✅ Easy to extend with additional context values
