# Undergraduation Admin Dashboard

A lightweight internal CRM dashboard for managing student interactions on undergraduation.com. This dashboard helps the internal team track student engagement, monitor application progress, log communication history, and take actions.

## Features

### 1. Simple Student Directory View
- Table view of all students with filters and search functionality
- Key columns: Name, Email, Country, App Status, GPA, SAT Score, Last Active
- Click to open individual student profiles with option for AI rundown
- Quick filters for common scenarios

### 2. Student Individual Profile View
- **Basic Info**: Name, email, phone, grade, country, desired major, tuition funds
- **Academic Profile**: GPA, SAT score, desired state, application status
- **Interaction Timeline**: Login activity, summary of AI chats, documents submitted
- **Communication Log**: Emails, SMS, with ability to add new communications
- **Internal Notes**:  Can add/edit/delete notes for the team
- **Progress Bar**: Visual representation of application stage completion (can set percantage stages by how much the student got done)
- **AI Summary**: informed summary of student profile and recommendations, can be easily done at a cheap cost with GPT-5 nano and a simple prompt as input alongside basic user details (I've implemented this kind of thing for a summer project that analyzes user's resume)

### 3. Communication Tools
- Log communications manually
- Trigger follow-up emails (not actually implemented)
- Schedule reminders and tasks for the team
- Track communication history

### 4. Insights & Filters
- Quick filters: "Students not contacted in x days", "High intent", "Needs essay help"
- Summary statistics: Total students, applications submitted, in progress, high intent
- Status-based filtering (Exploring, Shortlisting, Applying, Submitted)
- Country-based filtering

### 5. Bonus Features
- **AI Summary**: Intelligent analysis of each student's profile with recommendations
- **Modern UI**: Clean usere interface that falls in line with existing undergraduation.com UI

## Data Points Tracked

Based on undergraduation.com platform data collection:
- **Academic**: GPA, SAT Score
- **Preferences**: Desired State, Desired Major, Tuition Funds
- **Engagement**: Last Active, Interaction History, Communication Log
- **Progress**: Application Status, Completion Percentage
- **Intent**: High Intent Flag, Essay Help Needed

## Setup Instructions


### Installation
1. Clone or download this repository
2. Navigate to the project folder
3. Choose one of the running methods below

## Running the Dashboard

### Method 1: Direct File Opening (Easiest)
1. **Navigate to your project folder** in Windows Explorer:
2. **Double-click on `index.html`** - it will open in your default web browser

### Method 2: Using a Local Web Server (Recommended)
1. **Open Command Prompt or PowerShell** in the project folder
2. **Run the Python HTTP server**:
   ```bash
   python -m http.server 8000
   ```
3. **Open your browser** and go to: `http://localhost:8000`

### File Structure
```
admin-dashboard/
├── index.html          # Main HTML file
├── script.js           # JavaScript application logic
├── README.md           # This file
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Styling with Tailwind CSS framework
- **JavaScript**: Vanilla JS 
- **Font Awesome**: Icons
- **Alpine.js**: Lightweight reactive framework


## Notes from Pranav

This is a frontend-only implementation designed to demonstrate the full functionality of the admin dashboard. For actual production, this would be connected to:

1. **Backend API**: For data persistence and real-time updates
2. **Authentication System**: For secure access to those with clearance  
3. **Email Service**: For the communication functionality 
4. **Database**: For storing student data and analytics

The application includes realistic mock data representing typical students on the undergraduation.com platform, 5 students and their profile can be seen in script.js

Certain frontend elements and implementation was done with the help and guidance of Cursor IDE



**Note**: This dashboard is designed for internal use by the undergraduation.com team to manage student relationships and track application progress effectively, done for a internship coding task
