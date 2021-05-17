import React,{useState,useEffect} from "react";
import "./App.css";
import {Link} from "react-router-dom";




function Section(props){
    const [show,setShow] = useState('none');
    const [show1,setShow1] = useState('block');
    const [show2,setShow2] = useState('none');
    const [show3,setShow3] = useState('none');
    const [disable,setDisable] = useState(false);
    const [title,setTitle] = useState("");
    const [location,setLocation] = useState("");
    const [skill,setSkill] = useState("");
    const [mode,setMode] = useState("");
    const [stipend,setStipend] = useState("");
    const [date,setDate] = useState("");
    const [duration,setDuration] = useState("");
    const [description,setDescription] = useState("");
    const [title1,setTitle1] = useState("");
    const [location1,setLocation1] = useState("");
    const [skill1,setSkill1] = useState("");
    const [mode1,setMode1] = useState("");
    const [stipend1,setStipend1] = useState("");
    const [date1,setDate1] = useState("");
    const [duration1,setDuration1] = useState("");
    const [description1,setDescription1] = useState("");

    const [list,setList] = useState([]);
    
    
    useEffect(() =>{
        return fetch("https://cuvettebackend.herokuapp.com/getJob", {credentials:"include"})
        .then((r)=>r.json())
        .then((arr)=>{
            
            setList(arr.JobDetail);
            
        }
        )
    },[list]); 
    
    return (
        <>
            {/* Form 1 Code Start From Here */}
            <div className="section1" style={{display:show2}}>
                <div className="container con" >
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-4">
                            <label className="form-label">Job Title</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" style={{border:"none",borderBottom:"1px solid whitesmoke"}} value={title} onChange={(e)=>setTitle(e.target.value)} />
                        </div>

                        
                    </div>
                    
                    <div className="row" style={{margin:"20px",marginTop:"50px"}}>
                        <div className="col-md-4">
                            <label className="form-label">Job Location</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control"  value={location} placeholder="Enter the location" disabled={disable} style={{textAlign:"center",border:"1px solid whitesmoke"}} onChange={(e)=>{return (e.target.disabled?null:setLocation(e.target.value))}}/>
                        </div>

                        
                    </div>
                    <div className="row row1" >
                        <div className="col-md-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={location} onChange={(e)=>{return (e.target.checked?[setLocation("This Job is remote"),setDisable(true)]:[setLocation(""),setDisable(false)])}}  />
                            <label className="form-check-label">
                                This Job is remote
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="row" style={{margin:"20px"}}>
                            <div className="col-md-12">
                            <button className="btn " style={{backgroundColor:"#4BABE1",color:"white",float:"right",width:"120px"}} onClick={()=>{setShow2("none"); setShow1("none");setShow("block")} }>Next</button>
                            </div>
                        </div>
                </div>
            </div>

            {/* Form 1 Code End Here */}

            {/* Form 2 Code Start from Here */}
             <div className="table table-wrapper-scroll-y my-custom-scrollbar1" style={{display:show}}>
            <div className="section2" >
                <div className="container">
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-1">
                        <i className="fa fa-arrow-left arrow"  onClick={()=> {setShow('none');setShow1('none');setShow2("block")}}></i>
                        </div>
                        <div className="col-md-10" style={{textAlign:"center"}}>
                            <label className="form-label" > <b>Intern Details</b></label>
                        </div>
                    </div>
                    <div className="row" style={{margin:"40px"}}>
                        <div className="col-md-4">
                        <label className="form-label" >Skill</label>
                        </div>
                        <div className="col-md-8" >
                        <input type="text" list="skills"  className="form-control" value={skill} placeholder="Start typing and select the tab" style={{textAlign:"center",border:"1px solid whitesmoke"}} onChange={(e)=>setSkill(e.target.value)}/>
                        <datalist id="skills">
                            <option value="React Js"/>
                            <option value="Node JS"/>
                            <option value="Angular JS"/>
                            <option value="Express JS"/>
                            <option value="Vue JS"/>
                            <option value="PHP"/>
                            <option value="Web GL"/>
                            <option value="Next JS"/>
                            <option value="Mongo DB"/>
                            <option value="Python"/>
                            <option value="Data Science"/>
                            <option value="Machine Learning"/>
                            <option value="Django"/>
                            <option value="Flask"/>
                            
                        </datalist>
                            
                        </div>
                    </div>
                    <div className="row" style={{margin:"40px"}}>
                        <div className="col-md-3">
                        <label className="form-label" >Mode</label>
                        </div>
                        <div className="col-md-3" >
                          <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={mode} onChange={()=>setMode("Part-time 20hrs/week")} id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Part-time 20hrs/week
                                </label>
                        </div>
                        </div>
                        <div className="col-md-3" >
                          <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={mode} onChange={()=>setMode("Semi Full-time 30hrs/week")} id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Semi Full-time 30hrs/week
                                </label>
                        </div>
                        </div>
                        <div className="col-md-3" >
                          <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={mode} onChange={()=>setMode("Full-time 40hrs/week")} id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Full-time 40hrs/week
                                </label>
                        </div>
                        </div>
                    </div>
                    <div className="row" style={{margin:"40px"}}>
                        <div className="col-md-4">
                        <label className="form-label" >Stipend Range</label>
                        </div>
                        <div className="col-md-8" >
                        
                    
                            <input type="range"  class="range"  min="5000" max="20000" value={stipend} onChange={(e)=>setStipend(e.target.value)} />     
                        </div>
                        
                    </div>
                    <div className="row" style={{margin:"40px"}}>
                        <div className="col-md-3">
                        <label className="form-label" >Start Date</label>
                        </div>
                        <div className="col-md-4" >
                            <input type="date" className="form-control" placeholder="dd/mm/yyyy" value={date} onChange={(e)=>setDate(e.target.value)}/>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Duration</label>
                        </div>                
                        <div className="col-md-2">
                            <input className="form-control" type="text"  style={{marginLeft:"10px",textAlign:"center"}} value={duration} onChange={(e)=>setDuration(e.target.value)} />
                        </div>
                        <div className="col-md-1">   
                            <label className="form-check-label" >
                                Months
                            </label>
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"40px"}}>
                        
                        <label className="form-label" >Job Description</label>
                        
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        
                        <textarea className="form-control" placeholder="
                        Enter the job descriptions

                        Try to be precise as possible (250-300 words)


                        1.
                        
                        2.
                        
                        3."  style={{height:"250px",border:"1px solid whitesmoke"}} value={description} onChange={(e)=>setDescription(e.target.value)}>
                                
                        </textarea>
                        
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"40px",textAlign:"center"}}>
                        <div className="col-md-12">
                            <button className="btn " style={{backgroundColor:"#4BABE1",color:"white",width:"220px"}} onClick={()=>{props.addJoining(title,location,skill,mode,stipend,date,duration,description);setSkill("");setMode("");setStipend("");setDate("");setDuration("");setDescription("");setTitle("");setLocation("");setShow1("block");setShow2("none");setShow("none")}}>Post </button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>
            {/* Form2 Code End Here */}


            {/* My Listing Code Start From Here  */}

            <div className="section" style={{display:show1}} >
                <h5 style={{float:"right"}}>
                    <p className="job" onClick={()=> {setShow('none');setShow1('none');setShow2('block')}}>+ Add Another Job</p>
                </h5>
                <br/>
                <br/>
                <div className="table table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table   ">
    
                        <tbody>
                        {list.length>0 && list.map((val,i)=>(
                            
                        <tr key ={val._id} style={{paddingBottom:"-50px"}}> 
                            <th scope="row">{i+1}</th>
                            <td>{val.title}</td>
                            <td>{val.date}</td>
                            <td><p to="#" className="job" onClick={()=>{setTitle1(val.title);setLocation1(val.location);setSkill1(val.skill);setMode1(val.mode);setStipend1(val.stipend);setDate1(val.date);setDuration1(val.duration);setDescription1(val.description);setShow3("block");setShow1("none")}}>View Details</p></td>
                            </tr>
                        ))}
                        
                        
                        </tbody>
                    </table>

                </div>
            </div>
            {/*  My Listing Code End Here */}

             {/* Job Detail Code  Start from Here */}
             <div className="table table-wrapper-scroll-y my-custom-scrollbar1"  style={{display:show3}}>
            <div className="section3" >
                <div className="container">
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12" style={{textAlign:"center"}}>
                                <label className="form-label" style={{color:"skyblue",fontSize:"30px"}}> <b>Job Detail</b></label>
                            </div>
                        <div className="col-md-12" >
                            <h2 style={{float:"left",color:"skyblue",fontSize:"40px"}}>{title1}</h2>
                       
                        </div>

                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Location</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {location1}</h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Skills</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>  {skill1} </h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Job Type</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {mode1} </h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Salary</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {stipend1}</h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Joining Date</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {date1} </h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>No Of Month</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {duration1} </h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <label className="form-label" style={{color:"skyblue",fontSize:"30px",float:"left"}}>Roles & Responsiblity</label>
                        </div>
                        
                    
                        
                    </div>
                    <div className="row" style={{margin:"50px",marginTop:"-25px"}}>
                        <div className="col-md-12">
                        <h3 style={{float:"left",color:"lightgray"}}>   {description1} </h3>     
                        </div>
                    
                        
                    </div>
                    <div className="row" style={{margin:"40px",textAlign:"center"}}>
                        <div className="col-md-12">
                            <Link to="/" className="btn " style={{backgroundColor:"#4BABE1",color:"white",width:"220px"}} onClick={()=>{setTitle1("");setLocation1("");setSkill1("");setMode1("");setStipend1("");setDate1("");setDuration1("");setDescription1("");setShow3("none");setShow1("block")}}><i className="fa fa-arrow-left arrow"></i> </Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>
            {/* Job Details End Here */}

        </>
    );
}
export default Section;