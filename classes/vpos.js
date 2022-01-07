import md5 from 'md5';
import axios from "axios";

export const sendData = (public_key, private_key, cart_id, amount, currency, mode, zimple='', additional_data = '') => {
    
    const time = new Date();

    let description = "Compra # " + cart_id
    let shop_process_id = time.getTime() + cart_id
    // console.log(shop_process_id)
    let token = md5(private_key + shop_process_id + amount + currency )
    let page_success = 'success/';
    let page_cancel = 'cancel/';
    let urlbase = 'www.google.com/';
    let data = {
        public_key:  public_key,
        operation: {
            token: token,
            shop_process_id: shop_process_id,
            amount: amount,
            currency: currency,
            additional_data: additional_data,
            description: description,
            return_url:  urlbase + page_success + cart_id + '&shop_id=' + shop_process_id,
            cancel_url:  urlbase + page_cancel + shop_process_id,
            zimple: zimple
        }
    };
    let url;

    if(mode == 'si') {
        url = 'https://vpos.infonet.com.py:8888/vpos/api/0.3/single_buy';
    } else {
        url = 'https://vpos.infonet.com.py/vpos/api/0.3/single_buy';
    }

    // const buffer = bancardRequest(url, data);
    if(!buffer){
        console.log('no paso nada');
    } else {
        console.log('respuesta correcta')
        
        console.log(buffer)
        // console.log(JSON.parse(buffer))
    }
}



export const addNewCard = async (public_key, private_key, card_id, user_id, user_mail, mode ) => {

    let token = md5(private_key + card_id + user_id + 'request_new_card');
    let page_success = 'success/';
    let page_cancel = 'cancel/';
    let urlbase = 'www.google.com/';
    let res;

    let data = {
        public_key:  public_key,
        operation: {
            token: token,
            card_id: card_id,
            user_id: user_id,
            user_cell_phone: 981211030,
            user_mail: user_mail,
            return_url:  urlbase + '&to=' + card_id
        }
    };

    let url;
    if(mode == 'si') {
        url = 'https://vpos.infonet.com.py:8888/vpos/api/0.3/cards/new';
    } else {
        url = 'https://vpos.infonet.com.py/vpos/api/0.3/cards/new';
    }

    await axios({ 
        method: "post",
        url: url,
        data:  JSON.stringify(data),
        config: { 
            headers: {
            "Content-Type": "application/json",
            "Content-Length": JSON.stringify(data).length
        } },
    })
    .then(response => {
        // console.log(response.data)
        res = response.data;
    })
    .catch(error => {
        console.log(error);
    });
    console.log('res => ', res)
    return res;
}

// bancardRequest = async (url, data) => {
//     let res;
//     await axios({ 
//         method: "post",
//         url: url,
//         data:  JSON.stringify(data),
//         config: { 
//             headers: {
//             "Content-Type": "application/json",
//             "Content-Length": JSON.stringify(data).length
//         } },
//     })
//     .then(response => {
//         console.log(response.data)
//         res = response.data;
//     })
//     .catch(error => {
//         console.log(error);
//     });
//     return res;
// };



    