import axios from 'axios';

export default class Api {
  errMsg = "Coudn't fetch";

  constructor(apiUrl) {
    this.apibase = apiUrl;
  }

  async all() {
    const res = await axios.get(this.apibase);

    if (res.status === 200) return res.data;
    throw new Error(`${this.errMsg} ${this.apibase}`);
  }

  async make(todo) {
    const res = await axios.post(this.apibase, todo);

    if (res.status === 200) return res.data;
    throw new Error(`${this.errMsg} ${this.apibase}`);
  }

  async update(id, todo) {
    const res = await axios.patch(`${this.apibase}/${id}`, todo);

    if (res.status === 200) return res.data;
    throw new Error(`${this.errMsg} ${this.apibase}`);
  }
}
