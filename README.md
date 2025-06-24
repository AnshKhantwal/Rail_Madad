*RailMadad Greivance Redressal System*

Enhanced the existing Rail Madad platform by integrating an AI-driven complaint management system. Contributed to both frontend andbackend development. Designed a user-friendly UI and implemented backend logic 
using Node.js to support smart complaint categorization, and real-time issue tracking. The system aimed to improve complaint resolution efficiency through intelligent automation and better user experience.

Steps for running backend and admin portal
-for backend
1. move to the preferred directory(eg cd railmadad-backend)
2. on terminal write "node server.js"
   After this line the backend would be running with mysql connected

-for frontend admin-portal
1. move to the preferred directory(eg cd railmadad-frontend and cd admin-portal)
2. on terminal write :live server admin.html"

-for database
1. create a database named as railmadad
2. create a table named as comlplaints and feedback(all the names are case-sensitive)
3. use this statement for complaints in command line of mysql for creating a table
   "CREATE TABLE complaints (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mobile_number VARCHAR(15),
    otp VARCHAR(10),
    pnr_number VARCHAR(20),
    recent_station VARCHAR(100),
    incident_date DATETIME,
    file_path VARCHAR(255),  -- stores uploaded file name
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"
4. use this statement for feedback in command line of mysql for creating a table
   "CREATE TABLE feedback (
id INT AUTO_INCREMENT PRIMARY KEY,
mobile_number VARCHAR(15),
otp VARCHAR(10),
pnr_number VARCHAR(20),
rating INT,
message TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"


