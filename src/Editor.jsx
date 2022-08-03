import React, { Component } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Grid, Button } from "@mui/material";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      message: "Your Text Will Preview Here...",
      rawMessage: "",
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleEditorStateToMessage =
      this.handleEditorStateToMessage.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
      rawMessage: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  }

  handleEditorStateToMessage() {
    this.setState({
      message: this.state.rawMessage,
    });
    console.log(this.state.rawMessage);
  }
  saveToDB() {
    alert("saved...");
  }

  render() {
    const { editorState } = this.state;
    const wrapperStyle = {
      border: "1px solid #969696",
      // background: "green",
    };
    const editorStyle = {
      height: "auto",
      padding: "1rem",
    };
    const toolbarStyle = {};
    return (
      <React.Fragment>
        <div style={{ marginTop: "5%" }}>
          <Editor
            initialEditorState={editorState}
            wrapperClassName="wrapper-class"
            wrapperStyle={wrapperStyle}
            editorStyle={editorStyle}
            toolbarStyle={toolbarStyle}
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <div
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" onClick={this.handleEditorStateToMessage}>
            Preview
          </Button>
        </div>
        <Grid
          item
          xs={12}
          style={{
            border: "1px solid #969696",
            borderRadius: "3px",
            height: "auto",
            padding: "1rem",
            // background: "red",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: this.state.message }}></div>
        </Grid>
        <div
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" onClick={this.saveToDB}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
