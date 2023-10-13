import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../App.css';

const  toolbarOptions  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3] }],
        ["bold", "italic", "underline","strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

function Editorquill({handlechange,text}){
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
                
            }
            }
              modules={toolbarOptions}/>
            </>
        );      
}

export default Editorquill