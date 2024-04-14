import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";

export default function GetAllComments({ resId, status }) {
  const queryClient = useQueryClient();
  const allComments = useSignal([]);
  // const myUrl = useSignal("");

  // if (status == "positive") {
  //   myUrl.value = "positiveComments";
  // } else if (status == "negative") {
  //   myUrl.value = "negativeComments";
  // } else {
  //   myUrl.value = "neutralComments";
  // }
  // postiveComments
  //negativeComments
  //neutralComments
  const m = useMutation({
    mutationKey: ["allComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/dashboard/${status}/${resId}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit = async function () {
    const result = await m.mutateAsync();
    allComments.value = result;
    queryClient.invalidateQueries({ queryKey: ["allComments"] });
  };

  return <div></div>;
}
