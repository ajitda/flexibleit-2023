const ImageScraperApis = {};

ImageScraperApis.extractImage = async (data) => {
    const urlSave = "/api/tools/image-scrapper";
    const res = await axios.post(urlSave, data)
        .then(response => {
            // console.log(response);
            return response.data;
        })
        .catch(error => {
            return [];
        });
    return res;
}



export default ImageScraperApis;