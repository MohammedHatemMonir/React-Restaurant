import { signal } from "@preact/signals-react";
import AttachIcon from "../Icons/AttachIcon";



export default function FileUpload({file=signal(), 
                                    allowedTypes=['image/jpeg', 'image/png', 'application/pdf'], 
                                    onFileDrop = () => {}, 
                                    onFileChange = () => {},
                                    onFileRejected = () => {}}){




            const handleDrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const droppedFiles = e.dataTransfer.files;

                if(droppedFiles && allowedTypes.includes(droppedFiles[0].type)){
                file.value = droppedFiles[0];
                onFileDrop();
                }else{
                    onFileRejected();
                }
            };

            const handleFileInputChange = (e) => {
                const uploadedFiles = e.target.files;
                if(uploadedFiles && allowedTypes.includes(uploadedFiles[0].type)){
                file.value = uploadedFiles[0];
                onFileChange();
                }else{
                    onFileRejected();
                }
            };
            
  return (
        <>
        <div className="col-md-12">
          <div className="form-group">
            <label className="control-label">Upload CV</label>
            <div className="preview-zone hidden">
            </div>
            <div className="dropzone-wrapper"  
            onDrop={handleDrop}>
              <div className="dropzone-desc">
                {!file.value && <p>Choose a file or drag it here.</p>}

                {file.value && <>
                <AttachIcon fontSize = "3em"/>
                <br></br>
                {file.value.name}
                </>}
              </div>
              <input type="file" name="img_logo" className="dropzone"  onChange={handleFileInputChange}/>
            </div>
          </div>
        </div>

    </>
  );
}