import { BsCartX } from "react-icons/bs";
import CustomModal from "../Prototypes/CustomModal";
import { useSignal } from "@preact/signals-react";


export default function CartHandler() {


    const Show = useSignal(false);

return(<>


                <CustomModal
                    Header={"Cart Modal"}
                    ButtonText={<BsCartX fontSize={"1.5em"} />}
                    Show={Show}
                    onCancel={() =>{ Show.value = false;}}
                    // submit={} 
                    > 
                    
                        </CustomModal>

</>);
}