import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarSubject from '../components/NavbarSubject'
const SubjectScreen = () => {
    const { id } = useParams();
    console.log(id)
    useEffect(()=>{
  
    })
    return (
        <div>
            <NavbarSubject></NavbarSubject>
            <div className='main-box-subject'>
                <h1>Subject</h1>
                <h3>TeacherName</h3>
                <h5>Section 1</h5>
            </div>
        </div>
    )
}

export default SubjectScreen