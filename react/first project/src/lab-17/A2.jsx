// Display Faculties stored in array using ReactJS.
import React from 'react'

function A2() {
    const faculties = [
    {
        id: 1,
        name: "Dr. Rajesh Patel",
        subject: "Computer Science",
        experience: "12 Years",
        qualification: "Ph.D. in Computer Science"
    },
    {
        id: 2,
        name: "Prof. Priya Shah",
        subject: "Information Technology",
        experience: "8 Years",
        qualification: "M.Tech in IT"
    },
    {
        id: 3,
        name: "Dr. Amit Mehta",
        subject: "Data Science",
        experience: "10 Years",
        qualification: "Ph.D. in Data Science"
    },
    {
        id: 4,
        name: "Prof. Neha Joshi",
        subject: "Web Development",
        experience: "7 Years",
        qualification: "MCA"
    },
    {
        id: 5,
        name: "Dr. Kiran Desai",
        subject: "Database Management",
        experience: "11 Years",
        qualification: "Ph.D. in Computer Applications"
    },
    {
        id: 6,
        name: "Prof. Riya Mehta",
        subject: "Artificial Intelligence",
        experience: "6 Years",
        qualification: "M.Tech in AI"
    },
    {
        id: 7,
        name: "Dr. Sanjay Shah",
        subject: "Machine Learning",
        experience: "9 Years",
        qualification: "Ph.D. in Machine Learning"
    },
    {
        id: 8,
        name: "Prof. Hetal Patel",
        subject: "Software Engineering",
        experience: "8 Years",
        qualification: "M.Tech in Software Engineering"
    },
    {
        id: 9,
        name: "Dr. Bhavesh Trivedi",
        subject: "Cyber Security",
        experience: "13 Years",
        qualification: "Ph.D. in Cyber Security"
    },
    {
        id: 10,
        name: "Prof. Anjali Shah",
        subject: "Computer Networks",
        experience: "7 Years",
        qualification: "M.E. in Computer Engineering"
    }
];
  return (
     <>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>subject</th>
                    <th>experience</th>
                    <th>qualification</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    faculties.length>0 ? (
                        faculties.map((f)=>(
                            <tr>
                                <td>{f.id}</td>
                                <td>{f.name}</td>
                                <td>{f.subject}</td>
                                <td>{f.experience}</td>
                                <td>{f.qualification}</td>
                            </tr>
                        ))
                        
                    ): (
                        <h1>No data found...</h1>
                    )
                }
            </tbody>
            
        </table>
    </>
  )
}

export default A2