import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../css/createblog.css';
import Select from 'react-select';
import { Button, TextField } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter'

export default function Createblog() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [category, setCategory] = useState('');

    const formdata = {
        title: title,
        content: content,
        tag: tag,
        category: category
    };



    const options = [
        { value: 'Technology', label: 'Technology' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Science', label: 'Science' },
        { value: 'Politics', label: 'Politics' }
    ];

    const handleChange = (value) => {
        setContent(value);
    };

    const handleCategoryChange = (selectedOption) => {
        setCategory(selectedOption?.value || '');
        console.log(`Option selected:`, category);
    };

    const placeholder = `Write something amazing...`;

    return (
        <div className='write-blog'>
            <div className="quote">  <Typewriter
            words={["Write about what makes you passionate - let your enthusiasm inspire others!"]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            // onLoopDone={handleDone}
            // onType={handleType}
          /></div>
            <div className="blogedit">
                <div className="blogtitle">
                    <TextField
                        id="title"
                        label="Title"
                        variant="standard"
                        InputLabelProps={{ style: { color: '#546e7a' } }}
                        name='title'
                        
                        className='blog-title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="blogbody">
                    <div className="blog_bd">
                        <ReactQuill
                            value={content}
                            onChange={handleChange}
                            placeholder={placeholder}
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image', 'video'],
                                    ['clean'],
                                ],
                            }}
                            formats={[
                                'header',
                                'bold', 'italic', 'underline', 'strike', 'blockquote',
                                'list', 'bullet',
                                'link', 'image', 'video',
                            ]}
                        />
                        <div className="categories">
                            <TextField
                                id="tags"
                                label="Add tag (#fashion #sports)"
                                variant="standard"
                                InputLabelProps={{ style: { color: '#546e7a' } }}
                                name='tags'
                                className='tags'
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <Select
                                options={options}
                                placeholder='categories'
                                className='select'
                                onChange={handleCategoryChange}
                            />
                        </div>
                    </div>
                    {/* <div className="blogauthor"> <p>By KL Rahul</p> </div> */}
                </div>

                {/* <div>
          <p>Content:</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>Title: {title} </p>
          <p>Category: {category}</p>
        </div> */}
                <div className="submit">
                    <Button
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#7856ff",
                            padding: "10px",
                            fontSize: "15px",
                            width: "300px",
                            textAlign: "center",
                            transition: 'box-shadow 0.3s', // Add transition for smooth effect
                            boxShadow: 'none', // Initial box shadow
                        }}
                        variant="contained"
                        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0px 0px 10px 0px rgba(120, 86, 255, 0.75)'}
                        onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                        onClick={() => {
                            console.log(formdata);
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
