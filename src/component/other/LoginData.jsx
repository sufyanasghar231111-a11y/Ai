
export const users = [
  {
    id: 1,
    name: "Sufyan Asghar",
    email: "sufyanasghar231111@gmail.com",
    password: "123",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@example.com",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Ali Raza",
    email: "ali@example.com",
    password: "ali@123",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Fatima Noor",
    email: "fatima@example.com",
    password: "fatima456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    password: "ahmed789",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

export function setLocal(){
    localStorage.setItem('users',JSON.stringify(users))
}
export function getLocal(){
    let localData =JSON.parse(localStorage.getItem('users'))
    return {localData}
}
