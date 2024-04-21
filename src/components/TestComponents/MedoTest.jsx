import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomModal from '../Prototypes/CustomModal';
import { useMutation } from 'react-query';
import { apiClient } from '../../Data/apiclient';
import { Button } from 'react-bootstrap';
import FileUpload from '../FileUpload';
import { useSignal } from '@preact/signals-react';

const MedoTest = () => {
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {


      if(!file.value){ console.log("no file"); return;}

      const base64 = await convertBase64(file.value);
      console.log("base64",base64);
      console.log("trying to load");
      let url = "/uploadImage";
      console.log("posting to ", url);
      return await apiClient.post(url, {image: base64});
    },
  });

  function uploadImage(){
    console.log("uploading image");
    m.mutateAsync();
  }










  // const text = "meal -best" = [1, 3, 0]                     

  // const text2 = "love meal enjoy" = [2, 1, 4]       
  
  
  // const wordIndex = {"meal": 1,"love": 2,"best":3 ,"enjoy": 4}



  // model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])












  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };



const file = useSignal();
console.log("file",file.value);

  return (
    <>
    <Button onClick={() => {uploadImage()}}>Upload</Button>
        <div>
        <FileUpload file={file} />      
    </div>
    </>
  );
}

export default MedoTest;
