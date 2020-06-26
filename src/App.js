import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Text} from "./Components/Typography/TitleText";
import CustomButton from  './Components/Button/Button';
import Landing from './Routes/Landing';
import CustomContainer from './Components/HOC/Container/index'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html'
import { EditorState, convertFromRaw, convertFromHTML} from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

// initializing the contentState
let editorState = EditorState.createEmpty();

export const CustomEditor = () => {

    let [content, setContent] = useState(undefined);
    let [textContent, setTextContent] = useState(undefined);
    let [html, setHtml] = useState(undefined);

    const onEditorStateChange = (editorState)=>{
        console.log(editorState);
    }

    const onContentStateChange = (contentState)=>{
        return setContent(contentState)
    };

    const convertToHtml = () => {

        let html = draftToHtml(content);

        return setHtml(html);
    }

    const getHtml = () => {
        return html;
    }

    return (
        <CustomContainer>
            <CustomButton value={"Click me"} color={"primary"}/>
            <Text type={"title"} padding={1}>
                Hello
                Hey
                How
                Are
                You
                ?
            </Text>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onContentStateChange={onContentStateChange}
            />
            <button onClick={convertToHtml}>Convert from raw</button>
            {html && (
                <p dangerouslySetInnerHTML={{
                    __html: getHtml(),
                }}/>
            )}
        </CustomContainer>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Landing />
            </div>
        </BrowserRouter>
  );
}

export default App;
