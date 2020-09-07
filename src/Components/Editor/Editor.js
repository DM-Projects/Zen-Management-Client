import React, {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html'
import { stateToHTML } from "draft-js-export-html";
import { EditorState, convertFromRaw, convertFromHTML} from 'draft-js';


/**
 * @abstract Import custom components
 */
import {convertToHtml} from '../../Util/helpers'
import {Text} from "../Typography/TitleText";
import CustomButton from  '../Button/Button';
import { CustomContainer } from '../HOC/Container/Container';

/**
 * @TODO Clean the code up.
 *       Refactor as possible using hooks and more efficient routines
 */
let editorState = EditorState.createEmpty();

export const CustomEditor = (props) => {

  let [content, setContent] = useState(undefined);
  let [textContent, setTextContent] = useState(undefined);
  let [html, setHtml] = useState(undefined);

  const onContentStateChange = (contentState)=>{
    //   return setContent(contentState)
    setHtml(convertToHtml(contentState));

  };

  const getHtml = () => html;
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
          {/* <button onClick={handleClick}>Convert from raw</button> */}
          <Text type={'subtitle'}>Text To HTML</Text>
          {html && (
              <p dangerouslySetInnerHTML={{
                  __html: getHtml(),
              }}/>
          )}
      </CustomContainer>
  )
}

export default CustomEditor;