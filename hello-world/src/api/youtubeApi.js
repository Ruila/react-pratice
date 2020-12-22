import _axios from "axios"

const axios = (baseURL) => {
    //建立一個自定義的axios
    const instance = _axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&id=UCMUnInmOkrWN4gof9KlhNmQ&key=AIzaSyDTYKiAZ33YnLej2kOuVPkckWz5RVSycJg" || 'http://localhost:3003', //JSON-Server端口位置
            timeout: 1000,
        });

     return instance;
}

export {axios};
export default axios();