import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "../../Data/apiclient";
import { Cart, UserData } from "../../Globals";

export default function LogoutButton(props) {
  const navigate = useNavigate();
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/logout";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const LogoutFunction = async function () {
    const result = await m.mutateAsync();
    if (result.data.success) {
      UserData.value = {};
      Cart.value = [];
      navigate("/login");
    }
  };

  return (
    <Link {...props} onClick={LogoutFunction}>
      Log out
    </Link>
  );
}
