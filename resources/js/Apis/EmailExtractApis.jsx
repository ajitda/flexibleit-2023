const EmailExtractApis = {};

EmailExtractApis.extractEmail = async (data) => {
    const urlSave = "/api/tools/email-extractor";
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



export default EmailExtractApis;