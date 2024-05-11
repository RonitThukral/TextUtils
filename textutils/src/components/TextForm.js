
import React, { useState } from 'react'



export default function TextForm(props) {

  const handleLoCase = () => {

    let newText = Text.toLowerCase();
    setText(newText)
    let textArea = document.getElementById("myBox")
    if (textArea.value.length === 0) {
      props.showAlert("Kindly type something to Convert to lower case", "danger")
    } else {
      props.showAlert("Converted to lower case", "success")
    }
  }

  const handleUpCase = () => {

    let newText = Text.toUpperCase();
    setText(newText)

    let textArea = document.getElementById("myBox")
    if (textArea.value.length === 0) {
      props.showAlert("Kindly type something to Convert to upper case", "danger")
    } else {
      props.showAlert("Converted to upper case", "success")
    }
  }
  const onCopy = () => {
    navigator.clipboard.writeText(Text)

    let textArea = document.getElementById("myBox")
    if (textArea.value.length === 0) {
      props.showAlert("Kindly type something to copy", "danger")
    } else {
      props.showAlert("Text Copied to Clipboard", "success")
    }
  }

  const onClear = () => {
    let clearText = ''
    setText(clearText)

    let textArea = document.getElementById("myBox")
    if (textArea.value.length === 0) {
      props.showAlert("Kindly type something to clear", "danger")
    } else {
      props.showAlert("Text Cleared", "success")
    }
  }

  const removeExtraSpaces = () => {

    let newText = Text.split(/[ ]+/)
    setText(newText.join(" "))

    let textArea = document.getElementById("myBox")
    if (textArea.value.length === 0) {
      props.showAlert("Kindly type something to Remove Extra Spaces", "danger")
    } else {
      props.showAlert("Extra spaces removed", "success")
    }
  }



  const handleOnChange = (event) => {
    setText(event.target.value)

  }

  const [Text, setText] = useState("")
  let readingTime = (0.4 / 125) * Text.split(" ").filter((element) => { return element.length !== 0 }).length
  let totalWords = Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length
  return (

    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={Text} style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-secondary mx-3 mb-4" onClick={handleUpCase}>Convert to UpperCase</button>
        <button className="btn btn-secondary mx-3 mb-4" onClick={handleLoCase}>Convert to LowerCase</button>
        <button className="btn btn-secondary mx-3 mb-4" onClick={onCopy}>Copy to clipboard</button>
        <button className="btn btn-secondary mx-3 mb-4" onClick={onClear}>Clear Text</button>
        <button className="btn btn-secondary mx-3 mb-4" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{totalWords} words and {Text.length} characters</p>
        <p>Average Time To Read {readingTime} minutes</p>
      </div>
    </>
  )
}

