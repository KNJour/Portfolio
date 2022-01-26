import React, { useState } from 'react';

const Form = props => {
const [myForm, setMyForm] = useState({
    Name: "",
    Email: "",
    Age: null

});

//Handler

changeHandler = e => {
    setMyForm({...myForm, [e.target.]})
}

}

export default Form;