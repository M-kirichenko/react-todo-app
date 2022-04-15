import axios from 'axios';

export default class Api {
  errMsg = "Coudn't fetch";

  constructor() {
    this.apibase = 'http://localhost:8000/api/todos';
  }

  msg(res) {
    if (res.status === 200) return res.data;
    throw new Error(`${this.errMsg} ${this.apibase}`);
  }

  async all() {
    const res = await axios.get(this.apibase);
    return this.msg(res);
  }

  async make(todo) {
    const res = await axios.post(this.apibase, todo);
    return this.msg(res);
  }

  async update(id, todo) {
    const res = await axios.patch(`${this.apibase}/${id}`, todo);
    return this.msg(res);
  }

  async delete(id) {
    const res = await axios.delete(`${this.apibase}/${id}`);
    return this.msg(res);
  }

  async getOne(id) {
    const res = await axios.get(`${this.apibase}/${id}`);
    return this.msg(res);
  }
}
