import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomModal from '../Prototypes/CustomModal';

const MedoTest = () => {


  function okayBtn(){


    console.log("okay BTNNN");
  }

  function cancelBtn(){

    console.log("Cancel BTN")
  }
  return (
    <div>
        <CustomModal Header={"This is a test header"} ButtonText={"Click to open  "}onSubmit={okayBtn} onCancel={cancelBtn}>
          testtt

          </CustomModal>
    </div>
  );
}

export default MedoTest;
