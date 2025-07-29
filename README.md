# 📝 To-Do List Web App

A simple and interactive To-Do List built using **HTML**, **CSS**, and **JavaScript**, with **localStorage** integration for saving tasks across sessions. This project allows users to add, edit, and delete their daily tasks in a user-friendly interface.

---

## 🚀 Features

- ✅ Add new tasks  
- 🗑️ Delete tasks with a single click  
- ✏️ Edit existing tasks  
- 💾 Data persistence using `localStorage`  
- 🛡️ Right-click disabled with a custom message for fun  

---

🛠️ Technologies Used
HTML – Structure of the webpage

CSS – Styling and responsive layout

JavaScript – Functionality (Add, Edit, Delete, Save)

📂 File Structure
bash
Copy
Edit
todo-list/
│
├── index.html       # Main HTML file
├── style.css        # CSS for styling
├── script.js        # JavaScript functionality
└── README.md        # This file
📋 How to Use
Clone or download this repository

bash
Copy
Edit
git clone https://github.com/yourusername/todo-list.git
Open index.html in your browser.

💡 Functional Overview
addtask() – Adds a new task with "Edit" and "Delete" buttons.

editItem(button) – Edits the selected task.

removeItem(button) – Deletes the selected task.

savedata() – Saves the current list to localStorage.

showlist() – Loads the saved task list when the page loads.

display() – Prevents right-click and displays a cheeky message in the input placeholder.

📦 LocalStorage
All tasks are saved using localStorage, so you don't lose your tasks even if the browser is refreshed or closed.

✨ Customizations
Replace the images try1.jpg and try3.jpg for custom delete and edit icons in the .button2 and .button3 styles.

Modify the gradient or layout in style.css to personalize the design.

🔒 Fun Security
Right-click is disabled to prevent “code inspection”, with a playful placeholder message:

"Don't try to see my code 😏"

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Made with ❤️ by Samarth Joshi
