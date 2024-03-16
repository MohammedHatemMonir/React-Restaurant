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
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">Upload CV</label>
            <div class="preview-zone hidden">
            </div>
            <div class="dropzone-wrapper"  
            onDrop={handleDrop}>
              <div class="dropzone-desc">
                {!file.value && <p>Choose a file or drag it here.</p>}

                {file.value && <>
                <AttachIcon fontSize = "3em"/>
                <br></br>
                {file.value.name}
                </>}
              </div>
              <input type="file" name="img_logo" class="dropzone"  onChange={handleFileInputChange}/>
            </div>
          </div>
        </div>

    </>
  );
}