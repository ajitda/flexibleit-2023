// import { Avatar, Button } from "antd";
// import { Link } from "react-router-dom";
// import { QR_TYPE } from "./constants";
import * as tus from "tus-js-client";
// import { message } from "antd";

export const uploadFiles = async (medias) => {
    //    const uploads = [];
    //    const uploadProgress = {};
    //    const loadKey = "updatable";
    const uploads = medias.map(file => new Promise((resolve,reject) => {
        // pass thru if it is not a file object
        if ( ! (file instanceof File) ) return resolve(file) ;
            // Create a new tus upload
            var upload = new tus.Upload(file, {
                endpoint: '/api/tus',
                retryDelays: [0, 3000, 5000, 10000, 20000],
            removeFingerprintOnSuccess: true,
                metadata: {
                    filename: file.name,
                    filetype: file.type,
                },
                onBeforeRequest: function (req) {
                    var xhr = req.getUnderlyingObject()
                    xhr.setRequestHeader('X-Forwarded-Proto', 'https');
                },
                onError: function (error) {
                    console.log("Failed because: " + error)
                    return reject(error);
                },
                onProgress: function (bytesUploaded, bytesTotal) {
                    var percentage = parseInt(bytesUploaded / bytesTotal * 100)
                    console.log(bytesUploaded, bytesTotal, percentage + "%")
                    const progressMsg = file.name + " upload in progress "+ percentage + "%";
    //                uploadProgress.show = message.loading({ content: progressMsg, key:file.name});
                    // message.loading({ content: progressMsg, key:file.name });
                },
                onSuccess: async function () {
                    console.log("Download %s from %s", upload.file.name, upload.url)
                    const res = await axios.get('/api/tus?upload_url=' + upload.url).then(response => {
                        return resolve(response.data.data);
                    }).catch(error => {
                        console.log(error);
                return reject(error);
                    })
                    // const nmedia = state.media;
                    // console.log('res.data', res.data);
                    // if (res.data) {
                    //    uploads.push(res.data);
                    //    console.log('res.data', res.data)
                        
                    //    if (uploads.length == medias.length) {
                    //        setUploadFinished(true)
                    //    }
                    // }
                }
            });
            // message.loading({ content: file.name + " upload in progress 0%", key:file.name });
            upload.start();
        }));
    
    return Promise.all(uploads).then(uploads => {
        return uploads;
    }).catch((error) => {
        // message.error('Upload error encountered. Please try again later.');
        console.log('Upload error encountered. Please try again later.')
        return false;
    });
}

// export const formatQrTableData = (qrs, showModal) => {
//     let allDatas = [];
//     const viewProfile = (uuid) => {
//       window.location.href = "/fq/"+uuid;
//     }

//     qrs?.map(qr=>{
//         const row = {
//             key: "1",
//             name: (
//               <div onClick={()=>showModal(qr.qr_image_url)}>
//                 <Avatar.Group>
//                   <Avatar
//                     className="shape-avatar"
//                     shape="square"
//                     size={40}
//                     src={qr.qr_image_url}
//                   ></Avatar>
//                   <div className="avatar-info">
//                     <p>{qr.type}</p>
//                     <h2>{qr.name}</h2>
//                     {qr.type === QR_TYPE.COMPANY_PROFILE ?  <span className="cursor-pointer hover:text-blue-300" onClick={()=>viewProfile(qr.uuid)}>View Profile</span>: <p>{qr.qr_info}</p>}
//                   </div>
//                 </Avatar.Group>{" "}
//               </div>
//             ),
//             status: (
//               <>
//                 0 Scan
//               </>
//             ),
//             employed: (
//               <>
//                 <div className="ant-employed">
//                   <span>created at {formatDate(qr.created_at)}</span>
//                   <a className="mx-6" onClick={()=>showModal(qr.qr_image_url)}>View</a>
//                   <a download href={qr.qr_image_url} className="">
//                     download
//                   </a>
//                 </div>
//               </>
//             ),
//         }
//         allDatas.push(row)
//     })
//     return allDatas;
// }

export const formatDate = (date, separator=' ') => {
	if (!date) return '';
	Date.prototype.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	Date.prototype.monthNumber = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
	Date.prototype.getMonthName = function () {
		return this.monthNames[this.getMonth()];
	};
	Date.prototype.getMonthNumber = function() {
		return this.monthNumber[this.getMonth()];
	};
	
	var formStr = date.replace(/ /g,"T");
	var date = new Date(formStr);
	const monthNumber = date.getMonthNumber();
	let day = date.getDate();
	const monthName = date.getMonthName();
	let year = date.getFullYear();
	year = year == 121 ? 21 : year;
	day = day < 10 ? "0"+day : day;
	let res = day + separator + monthName + separator + year;
	if (separator === '-') res = year+'-'+monthNumber+'-'+day;
	return res;
}

export const slugify = str =>(str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
);