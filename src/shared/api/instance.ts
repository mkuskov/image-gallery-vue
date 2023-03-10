import axios from "axios";

export const instance = axios.create({
  headers: {"X-Master-Key", "$2b$10$6zPD17o0u8kKhqH6XM16IO4X8OUfdVyTd8nRmgTPTr0g3RbU7a9HC"}
});
