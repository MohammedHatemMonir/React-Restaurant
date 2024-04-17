import { BsCartX } from "react-icons/bs";
import CustomModal from "../Prototypes/CustomModal";
import { useSignal } from "@preact/signals-react";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Cart } from "../../Globals";

export default function CartHandler() {
  const Show = useSignal(false);
  const count = useSignal(1);

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
    console.log("Created order", result);
  }

  return (
    <CustomModal
      Header={Cart.value.ResName}
      ButtonText={<BsCartX fontSize={"1.5em"} />}
      Show={Show}
      onCancel={() => {
        Show.value = false;
      }}
      submit={() => {
        createOrder();
        Show.value = false;
      }}
    >
      {/* Loop meals here ibrahim */}

      {Cart.value.meals.map((meal, index) => (
        <div
          key={index}
          className="mb-3 border-bottom pb-3 d-flex justify-content-between align-items-center"
        >
          <p className="font-weight-bold">{meal.name}</p>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-sm btn-secondary mr-2"
              onClick={() => {
                if (count.value > 1) {
                  count.value--;
                }
              }}
            >
              -
            </button>
            {/* <span>{meal.quantity}</span> */}
            <span>{count.value}</span>
            <button
              className="btn btn-sm btn-secondary ml-2"
              onClick={() => count.value++}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </CustomModal>
  );
}
