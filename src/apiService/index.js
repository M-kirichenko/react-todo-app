import axios from 'axios'; 

export default class Api {
  errMsg = "Coudn't fetch";
  constructor(apiUrl) {
    this._apibase = apiUrl;
  }
  
  all = async() => {
    const res = await axios.get(this._apibase);

    if(res.status === 200) return res.data;
    else throw new Error(`${this.errMsg} ${this._apibase}`);
  }

  make = async(todo) => {
    const res = await axios.post(this._apibase, todo);
    
    if(res.status === 200) return res.data;
    else throw new Error(`${this.errMsg} ${this._apibase}`);
  }
}