import draftToHtml from 'draftjs-to-html'
import { stateToHTML } from "draft-js-export-html";

export const convertToHtml = (content) => {

  let html = draftToHtml(content);

  return html;
}
