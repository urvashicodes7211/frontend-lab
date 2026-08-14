// Display Students stored in array using ReactJS
import React from 'react'

function A3() {
    const students = [
    {
        rollNo: 101,
        name: "Aarav Patel",
        course: "B.Tech CSE",
        year: "1st Year",
        email: "aarav.patel@student.edu",
        phone: "9876543210"
    },
    {
        rollNo: 102,
        name: "Diya Shah",
        course: "B.Tech IT",
        year: "2nd Year",
        email: "diya.shah@student.edu",
        phone: "9876543211"
    },
    {
        rollNo: 103,
        name: "Vivaan Mehta",
        course: "BCA",
        year: "3rd Year",
        email: "vivaan.mehta@student.edu",
        phone: "9876543212"
    },
    {
        rollNo: 104,
        name: "Ananya Desai",
        course: "B.Sc CS",
        year: "1st Year",
        email: "ananya.desai@student.edu",
        phone: "9876543213"
    },
    {
        rollNo: 105,
        name: "Krish Patel",
        course: "B.Tech AI",
        year: "2nd Year",
        email: "krish.patel@student.edu",
        phone: "9876543214"
    },
    {
        rollNo: 106,
        name: "Riya Joshi",
        course: "BCA",
        year: "3rd Year",
        email: "riya.joshi@student.edu",
        phone: "9876543215"
    },
    {
        rollNo: 107,
        name: "Yash Modi",
        course: "B.Tech CE",
        year: "4th Year",
        email: "yash.modi@student.edu",
        phone: "9876543216"
    },
    {
        rollNo: 108,
        name: "Nidhi Trivedi",
        course: "B.Sc IT",
        year: "2nd Year",
        email: "nidhi.trivedi@student.edu",
        phone: "9876543217"
    },
    {
        rollNo: 109,
        name: "Harsh Pandya",
        course: "B.Tech ME",
        year: "3rd Year",
        email: "harsh.pandya@student.edu",
        phone: "9876543218"
    },
    {
        rollNo: 110,
        name: "Sneha Bhatt",
        course: "B.Tech EC",
        year: "1st Year",
        email: "sneha.bhatt@student.edu",
        phone: "9876543219"
    }
];

  return (
    <>
        <table border={1}>
            <thead>
                <tr>
                    <th>rollNo</th>
                    <th>name</th>
                    <th>course</th>
                    <th>year</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    students.length>0 ? (
                        students.map((s)=>(
                            <tr>
                                <td>{s.rollNo}</td>
                                <td>{s.name}</td>
                                <td>{s.course}</td>
                                <td>{s.year}</td>
                                <td>{s.email}</td>
                                <td>{s.phone}</td>
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

export default A3