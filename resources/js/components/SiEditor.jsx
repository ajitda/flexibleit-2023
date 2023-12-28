import React, { useEffect, useState } from "react";


const SiEditor = ({ editorState = "", editorChange, placeholder='' }) => {
  const [reactQuill, setReactQuill] = useState();
  let quillObj;

  const imageHandler = async () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      var file = input.files[0];
      // console.log(file);
      var formData = new FormData();

      formData.append('image', file);

      var fileName = file.name;

    };
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-quill").then((mod) => {
        setReactQuill(mod);
      });
    }
  }, []);


  if (reactQuill) {
    return <reactQuill.default
      ref={(el) => {
        quillObj = el;
      }}
      theme={'snow'}
      placeholder={placeholder ?  placeholder : 'Write something...'}
      modules={{
      
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            // ['image', 'code-block']
          ],
          // handlers: {
          //   image: imageHandler
          // }
        }
      }}
      // modules={{
      //   toolbar: false
      //   {
      //     container: [
      //       [{ header: [1, 2, 3, 4, false] }],
      //       ['bold', 'italic', 'underline', 'strike'],
      //       ['image', 'code-block']
      //     ],
      //     handlers: {
      //       image: imageHandler
      //     }
      //   }
      // }}
      value={editorState}
      onChange={editorChange}
    />;
  }
  return <div></div>;

}

export default SiEditor;