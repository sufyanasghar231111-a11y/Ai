
export const users = [
  {
    id: 1,
    name: "Sufyan Asghar",
    email: "sufyanasghar231111@gmail.com",
    password: "123",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  }
];

export function setLocal(){
    localStorage.setItem('users',JSON.stringify(users))
}
export function getLocal(){
    let localData =JSON.parse(localStorage.getItem('users'))
    return {localData } || [];
}
