import React, { useEffect, useState} from 'react';
import Contact from '../components/Contact';
const Test = props => {

    const [name, setName] = useState("John Doe");

    const changeHandler = e => {
        setName([e.target.value])
    }

    return(
        <div className="container-fluid">
            <img src={require('../img/keithjournell.png')} alt="test"/>
           <h1>Full Stack <span className="darkBlue">Software Developer</span></h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad quaerat dolorum mollitia iure! Laudantium sapiente consequatur officia labore deserunt nisi rerum inventore magnam dicta maxime. Eligendi numquam architecto quas?</p>

            <h4>the current name is {name}</h4>

               <label htmlFor="name">NAME: </label>
            <input type="text"  name="name" onChange={changeHandler}/>

         


        </div>

     
    )

}

export default Test;