class UserListService {
  #api = 'https://jsonplaceholder.typicode.com/users';

  getResource = async (url = this.#api) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  transformUserList = (userList) => {
    return userList.map(item => {
      return {
        id: item.id,
        name: item.name,
        city: item.address.city,
        company: item.company.name,
      }
    });
  }

}

export default UserListService;
