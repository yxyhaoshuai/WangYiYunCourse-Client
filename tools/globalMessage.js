//全局提示success、error、warning
import {message} from "antd";
export const globalMessage = (method="method",content="content") => {
    if (method === "success"){
        message.success({
            content: content,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    } else if (method === "error"){
        message.error({
            content: content,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    } else if ( method === "warning"){
        message.warning({
            content: content,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    }

};