import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarSubject from '../components/NavbarSubject'
import "../stylesheets/subject.css"
import axios from 'axios'
import LoadingScreen from "./LoadingScreen";
import Moment from 'moment';

const SubjectScreen = () => {
    const [isloading, setLoading] = useState(false)
    const { id } = useParams();
    const [data, setData] = useState([])
    console.log("TEST")
    useEffect(() => {
        axios.get(`http://localhost:3300/sa/getCourse/${id}`)
            .then((response) => {
                setData(response.data)
                setLoading(true)

            }).catch(e => alert(e))
    }, [])
    if (!isloading) {
        return <LoadingScreen />
    } else {
        return (
            <div>
                <NavbarSubject></NavbarSubject>
                <div className='main-box-subject'>
                    <div>
                        <h1>{id} {data[0].subj_name}</h1>
                        <h3>{data[0].fullname}</h3>
                        <h4>Section {data[0].section}</h4>
                        <div className='box'>

                            <i class="bi bi-folder"></i>
                        </div>
                    </div>
                    <div className='box-subject-two'>
                        <div>Stream</div>
                        <div>Classwork</div>
                        <div>People</div>
                        <img src='/images/proson-2.png'></img>
                    </div>

                </div>
                <div className='box-comment'>
                    <form className='form-comment'>
                        <div>
                            <img src='/images/man.png' className='user'></img>
                        </div>
                        <div className='input-comment'>
                            <input type="text" className='comment' placeholder='Announce something to your class...' />
                        </div>
                        <div className='box-icon'>
                            {/* <img src='/images/drive.png' className='drive'/> */}
                            <i class="bi bi-cloud-arrow-up-fill"></i>
                            <i class="bi bi-link"></i>
                        </div>
                        <div>
                            <button className='post'>POST</button>
                        </div>
                    </form>
                </div>
                {data.map((arr) => {
                      const formatDate = Moment(arr.due_date).format('DD-MM-YYYY hh:mm:ss')
                    return (
                    <div className='box-assign'>
                        <div>
                            <i class="bi bi-file-earmark"></i>
                        </div>

                        <div>
                            <h4>{arr.assign_name}  </h4>
                            <h5 style={{color:'red'}}>Assigned on {formatDate} </h5>
                        </div>
                    </div>
                    )
                })}

                <div className='box-assign'>
                    <div>
                        <i class="bi bi-file-earmark"></i>
                    </div>
                    <div>
                        <h4>New class work: ER-diagram design and Usecase design  </h4>
                        <h5>Assigned on September 21 </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubjectScreen