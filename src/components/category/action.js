import axios from 'axios';

export const mainPageApi=()=>{
    return(
    axios({
        method:'GET',
        url:'https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob',
        header:{
            "Content-Type": "application/json",
             "charset":"utf-8"
        }
    })
    )
}