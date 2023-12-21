import React, { useState } from 'react'

export default function EmailExtractor() {

    const [text, setText] = useState();
    const [result, setResult] = useState();
    const [exclude, setExclude] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await EmailExtractApis.extractEmail({ input_text: text, exclude: exclude })
        if (res.success) {
            const resultStr = res.data.map(email => email);
            console.log(resultStr);
            setResult(resultStr);
        }
    }

  return (
    <div className="container">
        <div class="">
            <h1 class="text-center pt-10 font-bold">Email Extractor</h1>
                <div class="row justify-content-center">
                    <div class="col-6 col-6 col-10">
                    <p>Extract email from any strings/text online. Its free forever. Flexible It Email extractor helps you to extract email from any string/text. So the process are 
                    </p>
                    <ul class="md:ml-5 md:pl-5">
                        <li>copy your string with emails</li>
                        <li>paste the string in the textarea input and click submit</li>
                        <li>exclude emails that you don't want (optional)</li>
                        <li>it results another textarea with emails only</li>
                    </ul>
                </div>
                </div>
        </div>
        <div className="row justify-content-center min-h-fit">
            <div className="col-lg-6 col-md-6 col-sm-10">
                <div className="card mb-5">
                    <div className="card-header">Add your text</div>
                    <div className="card-body p-0 ">
                        <form onSubmit={handleSubmit}>
                            
                            <div className="form-group">
                                <textarea name="text" value={text} className="form-control" onChange={(e) => setText(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <input name="exclude" value={exclude} className="form-control" onChange={(e)=>setExclude(e.target.value)} />
                                <p>exclude emails, write with separated comma</p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <div className="card mt-5">
                        </div>
                    </div>
                </div>
                
            </div>
            {result &&
                <div className="col-lg-6 col-md-6 col-sm-10">
                    <div className="card mb-5">
                        <div className="card-header ">Extracted Email</div>
                        <div className="card-body border">
                            {result.map(email => <div>{email}</div>)}
                        </div>
                    </div>
                </div>
            }

        </div>
    </div>
  )
}
