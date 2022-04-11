export default class Api {
  errMsg = "Coudn't fetch";
  constructor(apiUrl) {
    this._apibase = apiUrl;
  }
  
  all = async() => {
    const res = await fetch(this._apibase);
    
    if(res.ok) return res.json();
    else throw new Error(`${this.errMsg} ${this._apibase}`);
  }

  make = async(todo) => {
    const res = await fetch(this._apibase, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    
    if(res.ok ) return res.json();
    else throw new Error(`${this.errMsg} ${this._apibase}`);
  }
}