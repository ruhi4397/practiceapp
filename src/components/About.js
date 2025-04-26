import React  from 'react'
//import React, {  useState } from 'react'
export default function About(props) {
  // const [myStyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // we need this function when we use button on about section
  // //const [btntext, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   } else {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // };

  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    
  }
  return (
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743',}}>
      <h1 className="my -3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it work count,character count 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body " style={myStyle}>
              TextUtils is a free character counter tool that provides instant charcter count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Rhis word counter software works in any web browser such as Chrome, Firefox, Internet Explorer , Safari , Opera. It suitd to count Characters in facebook, blog,excel documents, pdf document,essays etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
       {/*this is need when we have button on about section and we need to use on dark mode
       <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext} 
        </button>*/}
      </div>
    </div>
  );
}

