import axios from "axios";
import router from "./router";

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            error.response.data.message === "Token has expired" &&
            localStorage.getItem("access_token")
        ) {
            axios
                .post(
                    "/api/auth/refresh",
                    {},
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                "access_token"
                            )}`,
                        },
                    }
                )
                .then((res) => {
                    localStorage.access_token = res.data.access_token;
                    error.config.headers.Authorization = `Bearer ${res.data.access_token}`;
                    return api.request(error.config);
                });
        }

        if (
            error.response?.status === 401 &&
            router.currentRoute.value.name !== "user.login"
        ) {
            localStorage.removeItem("access_token");

            router.push({ name: "user.login" });
        }

        return Promise.reject(error);
    }
);

export default api;
