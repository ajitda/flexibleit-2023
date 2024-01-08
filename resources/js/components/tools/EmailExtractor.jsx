import React, { useState } from 'react'
import styles from '../../style';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import EmailExtractApis from '../../Apis/EmailExtractApis';

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

  return (<>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
    </div>
    <div className="">
        <h1 className={`${styles.heading2} text-center`}>Email Extractor</h1>
        <div className="flex justify-center">
            <div className={`${styles.paragraph} md:w-1/2 w-96 pl-5`}>
                <p>Extract email from any strings/text online. It's free forever. Flexible Email extractor helps you to extract email from any string/text. The process are:</p>
                <ul className="list-disc md:ml-5 pl-5 pt-5">
                    <li>Copy your string with emails</li>
                    <li>Paste the string in the textarea input and click submit</li>
                    <li>Exclude emails that you don't want (optional)</li>
                    <li>It results in another textarea with emails only</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="flex justify-center mt-2">
        <div className=" md:w-1/2 w-10/12">
            <div className="card mb-5">
                <div className={`${styles.paragraph} card-header bg-slate-100 p-2 pl-7`}>Add your text</div>
                <div className="card-body p-0">
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <textarea
                                name="text"
                                value={text}
                                className="form-control w-full h-20 p-2 border rounded"
                                onChange={(e) => setText(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                name="exclude"
                                value={exclude}
                                className="form-control w-full p-2 border rounded"
                                onChange={(e) => setExclude(e.target.value)}
                            />
                            <p className="mt-2">Exclude emails, write with separated comma</p>
                        </div>
                        <div className='py-5'>
                            <button type="submit" className="btn btn-primary mt-2 px-5 py-4 bg-blue-500 text-white">Submit</button>
                        </div>
                    </form>
                    <div className="card mt-5">
                    </div>
                </div>
            </div>

        </div>
        {result &&
            <div className="w-1/3 pl-5">
                <div className="card mb-5">
                    <div className="card-header bg-slate-100 p-2 pl-7">Extracted Email</div>
                    <div className="card-body border-2 h-14 pl-7">
                        {result.map(email => <div key={email}>{email}</div>)}
                    </div>
                </div>
            </div>
        }
    </div>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
    </div>

    </>)
}
