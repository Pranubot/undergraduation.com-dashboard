// Dashboard Application Logic
function dashboardApp() {
    return {
        // State
        students: [],
        filteredStudents: [],
        selectedStudent: null,
        searchQuery: '',
        statusFilter: '',
        countryFilter: '',
        showQuickFilters: false,
        newCommunication: '',
        newNote: '',

        // Initialize the application
        init() {
            this.loadMockData();
            this.filteredStudents = [...this.students];
        },

        // Load mock data based on undergraduation.com data points
        loadMockData() {
            this.students = [
                {
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@email.com",
                    phone: "+1-555-0123",
                    grade: "12th Grade",
                    country: "USA",
                    status: "Applying",
                    gpa: "3.8",
                    satScore: "1450",
                    desiredMajor: "Computer Science",
                    desiredState: "California",
                    tuitionFunds: "$50,000",
                    lastActive: "2 days ago",
                    highIntent: true,
                    lastContacted: "5 days ago",
                    needsEssayHelp: false,
                    interactions: [
                        { id: 1, action: "Logged into platform", timestamp: "2 days ago" },
                        { id: 2, action: "Asked AI about UC Berkeley requirements", timestamp: "3 days ago" },
                        { id: 3, action: "Uploaded transcript", timestamp: "1 week ago" }
                    ],
                    communications: [
                        { id: 1, message: "Welcome email sent", timestamp: "2 weeks ago" },
                        { id: 2, message: "Follow-up on essay questions", timestamp: "5 days ago" }
                    ],
                    notes: [
                        { id: 1, content: "Very engaged student, high potential for top universities", timestamp: "1 week ago" }
                    ]
                },
                {
                    id: 2,
                    name: "Pranav Yadav",
                    email: "pranavyadav@email.com",
                    phone: "+1-555-0124",
                    grade: "11th Grade",
                    country: "USA",
                    status: "Shortlisting",
                    gpa: "3.9",
                    satScore: "1520",
                    desiredMajor: "Engineering",
                    desiredState: "New York",
                    tuitionFunds: "$75,000",
                    lastActive: "1 day ago",
                    highIntent: true,
                    lastContacted: "2 days ago",
                    needsEssayHelp: true,
                    interactions: [
                        { id: 1, action: "Completed college matching quiz", timestamp: "1 day ago" },
                        { id: 2, action: "Viewed MIT requirements", timestamp: "2 days ago" }
                    ],
                    communications: [
                        { id: 1, message: "Initial consultation call", timestamp: "2 days ago" }
                    ],
                    notes: [
                        { id: 1, content: "Excellent academic profile, needs help with essay strategy", timestamp: "2 days ago" }
                    ]
                },
                {
                    id: 3,
                    name: "Priya Patel",
                    email: "priya.patel@email.com",
                    phone: "+1-555-0125",
                    grade: "12th Grade",
                    country: "India",
                    status: "Submitted",
                    gpa: "3.7",
                    satScore: "1380",
                    desiredMajor: "Business",
                    desiredState: "Texas",
                    tuitionFunds: "$40,000",
                    lastActive: "3 days ago",
                    highIntent: false,
                    lastContacted: "1 week ago",
                    needsEssayHelp: false,
                    interactions: [
                        { id: 1, action: "Submitted application to UT Austin", timestamp: "1 week ago" },
                        { id: 2, action: "Finalized essay", timestamp: "2 weeks ago" }
                    ],
                    communications: [
                        { id: 1, message: "Application submitted confirmation", timestamp: "1 week ago" }
                    ],
                    notes: [
                        { id: 1, content: "Application completed successfully", timestamp: "1 week ago" }
                    ]
                },
                {
                    id: 4,
                    name: "Jane Doe",
                    email: "janedoe@email.com",
                    phone: "+1-555-0126",
                    grade: "12th Grade",
                    country: "UK",
                    status: "Exploring",
                    gpa: "3.5",
                    satScore: "1300",
                    desiredMajor: "Liberal Arts",
                    desiredState: "Massachusetts",
                    tuitionFunds: "$30,000",
                    lastActive: "1 week ago",
                    highIntent: false,
                    lastContacted: "10 days ago",
                    needsEssayHelp: true,
                    interactions: [
                        { id: 1, action: "Browsed college options", timestamp: "1 week ago" }
                    ],
                    communications: [
                        { id: 1, message: "Initial welcome call", timestamp: "10 days ago" }
                    ],
                    notes: [
                        { id: 1, content: "Needs more guidance on college selection", timestamp: "10 days ago" }
                    ]
                },
                {
                    id: 5,
                    name: "Emily Chen",
                    email: "emily.chen@email.com",
                    phone: "+1-555-0127",
                    grade: "11th Grade",
                    country: "Canada",
                    status: "Applying",
                    gpa: "3.6",
                    satScore: "1420",
                    desiredMajor: "Medicine",
                    desiredState: "Florida",
                    tuitionFunds: "$60,000",
                    lastActive: "4 hours ago",
                    highIntent: true,
                    lastContacted: "1 day ago",
                    needsEssayHelp: false,
                    interactions: [
                        { id: 1, action: "Updated application status", timestamp: "4 hours ago" },
                        { id: 2, action: "Asked about pre-med requirements", timestamp: "1 day ago" }
                    ],
                    communications: [
                        { id: 1, message: "Pre-med guidance provided", timestamp: "1 day ago" }
                    ],
                    notes: [
                        { id: 1, content: "Strong candidate for pre-med programs", timestamp: "1 day ago" }
                    ]
                }
            ];
        },

        // Filter students based on search and filters
        filterStudents() {
            this.filteredStudents = this.students.filter(student => {
                const matchesSearch = student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                    student.email.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesStatus = !this.statusFilter || student.status === this.statusFilter;
                const matchesCountry = !this.countryFilter || student.country === this.countryFilter;
                
                return matchesSearch && matchesStatus && matchesCountry;
            });
        },

        // Quick filter functions
        filterByQuick(type) {
            switch(type) {
                case 'not_contacted':
                    this.filteredStudents = this.students.filter(student => 
                        student.lastContacted.includes('week') || student.lastContacted.includes('days ago') && parseInt(student.lastContacted) >= 7
                    );
                    break;
                case 'high_intent':
                    this.filteredStudents = this.students.filter(student => student.highIntent);
                    break;
                case 'essay_help':
                    this.filteredStudents = this.students.filter(student => student.needsEssayHelp);
                    break;
            }
        },

        // Get status count
        getStatusCount(status) {
            return this.students.filter(student => student.status === status).length;
        },

        // Get high intent count
        getHighIntentCount() {
            return this.students.filter(student => student.highIntent).length;
        },

        // Get status class for styling
        getStatusClass(status) {
            const classes = {
                'Exploring': 'bg-yellow-100 text-yellow-800',
                'Shortlisting': 'bg-blue-100 text-blue-800',
                'Applying': 'bg-orange-100 text-orange-800',
                'Submitted': 'bg-green-100 text-green-800'
            };
            return classes[status] || 'bg-gray-100 text-gray-800';
        },

        // Get progress percentage based on status
        getProgressPercentage(status) {
            const progress = {
                'Exploring': 25,
                'Shortlisting': 50,
                'Applying': 75,
                'Submitted': 100
            };
            return progress[status] || 0;
        },

        // Select a student for detailed view
        selectStudent(student) {
            this.selectedStudent = student;
            this.newCommunication = '';
            this.newNote = '';
        },

        // Edit student (placeholder)
        editStudent(student) {
            alert(`Edit functionality for ${student.name} would be implemented here`);
        },

        // Add communication
        addCommunication() {
            if (!this.newCommunication.trim()) return;
            
            const newComm = {
                id: Date.now(),
                message: this.newCommunication,
                timestamp: 'Just now'
            };
            
            this.selectedStudent.communications.unshift(newComm);
            this.newCommunication = '';
        },

        // Add note
        addNote() {
            if (!this.newNote.trim()) return;
            
            const newNote = {
                id: Date.now(),
                content: this.newNote,
                timestamp: 'Just now'
            };
            
            this.selectedStudent.notes.unshift(newNote);
            this.newNote = '';
        },

        // Delete note
        deleteNote(noteId) {
            this.selectedStudent.notes = this.selectedStudent.notes.filter(note => note.id !== noteId);
        },

        // Trigger follow-up (mock)
        triggerFollowUp() {
            alert('Follow-up email would be sent to ' + this.selectedStudent.email);
            this.addCommunication();
            this.newCommunication = 'Follow-up email sent';
        },

        // Schedule reminder (mock)
        scheduleReminder() {
            const reminder = prompt('Enter reminder details:');
            if (reminder) {
                this.addNote();
                this.newNote = `REMINDER: ${reminder}`;
            }
        },

        // Log interaction (mock)
        logInteraction() {
            const interaction = prompt('Enter interaction details:');
            if (interaction) {
                const newInteraction = {
                    id: Date.now(),
                    action: interaction,
                    timestamp: 'Just now'
                };
                this.selectedStudent.interactions.unshift(newInteraction);
            }
        },

        // Get AI Summary (bonus feature)
        getAISummary(student) {
            if (!student) return '';
            
            const strengths = [];
            const areas = [];
            
            if (parseFloat(student.gpa) >= 3.8) strengths.push('strong academic performance');
            if (parseInt(student.satScore) >= 1400) strengths.push('excellent test scores');
            if (student.highIntent) strengths.push('high engagement level');
            
            if (student.needsEssayHelp) areas.push('essay writing support');
            if (parseFloat(student.gpa) < 3.5) areas.push('academic improvement');
            if (!student.highIntent) areas.push('increased engagement');
            
            let summary = `Based on ${student.name}'s profile, they show ${strengths.join(', ')}. `;
            if (areas.length > 0) {
                summary += `Areas for focus include ${areas.join(', ')}. `;
            }
            summary += `Current application status: ${student.status}. `;
            summary += `Recommended next steps: ${this.getRecommendedActions(student)}.`;
            
            return summary;
        },

        // Get recommended actions based on student profile
        getRecommendedActions(student) {
            const actions = [];
            
            if (student.status === 'Exploring') {
                actions.push('provide college matching guidance');
            }
            if (student.status === 'Shortlisting') {
                actions.push('assist with application timeline');
            }
            if (student.status === 'Applying') {
                actions.push('review application materials');
            }
            if (student.needsEssayHelp) {
                actions.push('schedule essay writing session');
            }
            if (student.lastContacted.includes('week')) {
                actions.push('send follow-up communication');
            }
            
            return actions.length > 0 ? actions.join(', ') : 'continue regular check-ins';
        }
    }
}
