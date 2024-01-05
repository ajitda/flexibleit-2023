import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '../components/ImageGallery';
import ImageScraperApis from '../apis/ImageScraperApis';


function ImageScraper() {

    const [text, setText] = useState();
    const [result, setResult] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await ImageScraperApis.extractImage({ search: text })
        if (res.success) {

            setResult(res.data);
        }
    }


    return (<>
        <h2 class="text-center pt-10 font-weight-bold">Image Scraper</h2>
        <p class="text-center mb-7">Srap Images from any url</p>
        <div className="">
            <div className="row justify-content-center ">
                <div className="col-lg-6 col-md-6 col-sm-10">
                    <div className="card">
                        {/* <div className="card-header">Add your text</div> */}
                        <div className="card-body p-0 ">
                            {/* <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" value={text} className="form-control" onChange={(e) => setText(e.target.value)} required />
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                            </form> */}

                            <form onSubmit={handleSubmit}>

                                <div class="input-group mb-5 pb-5">
                                    <input type="text" value={text} className="form-control" placeholder="Enter your text" onChange={(e) => setText(e.target.value)} required />
                                    <div class="input-group-append">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

            {/* {result && <div className="row">
                {result.map((image) => (<div className="col-md-3">
                    <img src={image} alt="" className="img-fluid mt-3 p-3" />
                </div>))}
                
            </div>} */}
            {result?.length > 0 && <div className="mb-5"><ImageGallery images={result} /></div>}
        </div >
    </>);
}

export default ImageScraper;

