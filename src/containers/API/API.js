import Axios from '../../axios';

class API {

    get = (props) => {
        /*
          Method for:                    Get API
          Parameters Required:           url
          Optional Parameters Required:  None
          Callbacks:                     callback
          Output:                        calls callback with response.data returns the same
        */

        return Axios.get(props.url)
            .then(response => {
                if (props.callback) props.callback(response.data);
                return response.data;
            })
            .catch(error => {
                console.log(error);
                if (error && error.response && error.response.status === 500) {
                    console.log('Server Error');
                }
            })
    }
}

export default API;