import { BsCartX } from "react-icons/bs";
import CustomModal from "../Prototypes/CustomModal";
import { useSignal } from "@preact/signals-react";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Cart } from "../../Globals";

export default function CartHandler() {
  const Show = useSignal(false);
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/createOrder";
      console.log("posting to ", url);
      return await apiClient.post(url, Cart.value);
    },
  });

  async function createOrder() {
    const result = await m.mutateAsync();
  }
  return (
    <>
      <CustomModal
        Header={Cart.value.ResName}
        ButtonText={<BsCartX fontSize={"1.5em"} />}
        Show={Show}
        onCancel={() => {
          Show.value = false;
        }}
        submit={() => {
          createOrder();
        }}
      >
        {/* Loop meals here ibrahim */}
      </CustomModal>
    </>
  );
}
