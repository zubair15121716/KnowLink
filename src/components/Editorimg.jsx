import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../App.css';

const  toolbarOptions  = {
    toolbar: [
        ["image"],
        ["clean"],
    ],
};

function Editorimg({handlechange ,text}){
    const [editorval, setEDval] = useState('');
    
        return (
            <>
            <h1>{text}</h1>
            <ReactQuill theme="snow" 
              className='edit'
              value={editorval}
              onChange={(e)=>{
                setEDval(e);
                handlechange(e);
                console.log(e);
            }
            }
              modules={toolbarOptions}/>
            </>
        );      
}

export default Editorimg