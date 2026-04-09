import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocal, setLocal, users } from './LoginData'

export const provideContext = createContext()
function AuthProvider({ children }) {
  // localStorage.clear()
  let [userInput, setUserInput] = useState([])

  let [user, setUser] = useState(() => {
    let store = localStorage.getItem('logInUser')
    return store ? JSON.parse(store) : null
  })
  let [save, setSave] = useState([])
  let [log, setLog] = useState(false)
  let [chat, setChat] = useState('')
  let [content, setContent] = useState(() => {
    let store = localStorage.getItem('content')
    return store ? JSON.parse(store) : [
      {sender: 'user', message: ''},
      {sender: 'bot', message: ''}]})
      
  let [hide, setHide] = useState(() => {
    try {
      let store = localStorage.getItem('hide')
      return store ? JSON.parse(store) : true
    } catch (e) {
      return true;
    }
  })
  let [logOut, setLogOut] = useState(false)
  let [erroremail, setErroremail] = useState(false)
  let [errorpass, setErrorpass] = useState(false)
  let [signpass, setSignpass] = useState(false)
  let [signemail, setSignemail] = useState(false)
  let [name, setName] = useState(false)
  useEffect(() => {
    setLocal();
    let { localData } = getLocal()
    setUserInput(localData)
  }, [])
  let [input, setInput] = useState({
    name: '',
    email: '',
    password: ""
  })
  function handleForm(e) {
    e.preventDefault();
    let newUser = {
      name: input.name,
      email: input.email,
      password: input.password,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
    setSave([...save, newUser])
    if (input.name && input.email && input.password) {
      setUser(newUser);
    }
    setLog(true)
    setInput({
      name: '',
      email: '',
      password: ''
    })
    if (!input.name) {
      setName(true)
    }
    if (!input.email) {
      setSignemail(true)
    }
    if (!input.password) {
      setSignpass(true)
    }
      setUserInput(prev =>[...prev,newUser])
      let storeUser=JSON.parse(localStorage.getItem('users')) || []
      storeUser.push(newUser)
      localStorage.setItem('users',JSON.stringify(storeUser))
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    if (input.name) {
      setName(false)
    }
    if (input.email) {
      setSignemail(false)
    }
    if (input.password) {
      setSignpass(false)
    }
  }
  function handleLogOut() {
    localStorage.removeItem('logInUser')
    localStorage.removeItem('content')
    localStorage.removeItem('hide')
    
    setUser(null)
    setLogOut(false)
  }
  function getBotMessage(chat) {
  const message = chat.toLowerCase().trim();

  // ---------- GREETINGS ----------
  if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
    return "Hey there 👋! How’s your day going?";
  }
 else if (message.includes("provide an overview of your capabilities")) {
  return "I assist with answering questions, problem solving, and providing clear guidance across various topics.";
}
else if (message.includes("how can you support my learning")) {
  return "I can explain concepts, suggest resources, and guide structured practice to improve your skills effectively.";
}
else if (message.includes("can you help with web development")) {
  return "Yes, I can guide you through frontend and backend concepts with practical examples and best practices.";
}
  else if (message.includes("good morning")) return "Good morning ☀️ Hope you have an amazing day!";
  else if (message.includes("good night")) return "Good night 🌙 Sleep well!";
  else if (message.includes("good evening")) return "Good evening 🌆 How was your day?";

  // ---------- BASIC TALK ----------
  else if (message.includes("how are you")) {
    return "I'm doing great 😄 Thanks for asking! How about you?";
  }
  else if (message.includes("your name")) {
    return "I'm your friendly chatbot 🤖, always here to help!";
  }
  else if (message.includes("bye") || message.includes("goodbye")) {
    return "Goodbye 👋 Take care and come back anytime!";
  }
  else if (message.includes("thank")) {
    return "You're always welcome 😊";
  }

  // ---------- GENERAL ----------
  else if (message.includes("who made you")) {
    return "I was created by a developer just like you 💻 Pretty cool right?";
  }
  else if (message.includes("what can you do")) {
    return "I can chat, answer questions, tell jokes, and keep you company 🤖";
  }
  else if (message.includes("help")) {
    return "You can ask me about coding, life, jokes, time, or anything simple 🙂";
  }

  // ---------- TIME / DATE ----------
  else if (message.includes("time")) return `Current time is ⏰ ${new Date().toLocaleTimeString()}`;
  else if (message.includes("date")) return `Today's date is 📅 ${new Date().toLocaleDateString()}`;
  else if (message.includes("day")) return new Date().toLocaleString('en-US', { weekday: 'long' });

  // ---------- EMOTIONS ----------
  else if (message.includes("sad")) return "I'm here for you ❤️ Things will get better.";
  else if (message.includes("happy")) return "That’s awesome 😄 Keep smiling!";
  else if (message.includes("bored")) return "Let’s fix that 😎 Want a joke or a game?";
  else if (message.includes("tired")) return "You should take some rest 😴";

  // ---------- JOKES ----------
  else if (message.includes("joke")) return "Why do programmers hate stairs? Because they are always debugging 🐛😂";
  else if (message.includes("funny")) return "I try my best 😄 Want another joke?";

  // ---------- PROGRAMMING ----------
  else if (message.includes("javascript")) return "JavaScript is the language of the web 🌐";
  else if (message.includes("react")) return "React makes building UI super fast ⚛️";
  else if (message.includes("css")) return "CSS makes everything look beautiful 🎨";
  else if (message.includes("html")) return "HTML is the backbone of every webpage 🏗️";
  else if (message.includes("backend")) return "Backend handles logic, database, and servers ⚙️";
  else if (message.includes("frontend")) return "Frontend is what users see 👀";

  // ---------- TECH ----------
  else if (message.includes("ai")) return "AI is changing the world 🤖🚀";
  else if (message.includes("robot")) return "Robots are getting smarter every day!";
  else if (message.includes("internet")) return "The internet connects the whole world 🌍";
  else if (message.includes("phone")) return "Phones are powerful mini computers 📱";

  // ---------- LIFE ----------
  else if (message.includes("study")) return "Stay focused 📚 Small steps every day!";
  else if (message.includes("exam")) return "Good luck 🍀 You got this!";
  else if (message.includes("success")) return "Success comes with consistency 💪";
  else if (message.includes("fail")) return "Failure is just a lesson in disguise 📉";

  // ---------- FOOD ----------
  else if (message.includes("food")) return "Food is life 🍕 What's your favorite?";
  else if (message.includes("pizza")) return "Pizza is always a good idea 🍕";
  else if (message.includes("burger")) return "Burgers are delicious 🍔";
  else if (message.includes("tea")) return "Tea is relaxing 🍵";
  else if (message.includes("coffee")) return "Coffee = energy boost ☕";

  // ---------- HOBBIES ----------
  else if (message.includes("game")) return "Games are fun 🎮 What do you play?";
  else if (message.includes("music")) return "Music makes everything better 🎵";
  else if (message.includes("movie")) return "Movies are a great escape 🎬";
  else if (message.includes("travel")) return "Traveling opens your mind ✈️";

  // ---------- RELATION ----------
  else if (message.includes("friend")) return "Friends make life better 🤝";
  else if (message.includes("family")) return "Family is everything ❤️";
  else if (message.includes("love")) return "Love makes life beautiful ❤️";

  // ---------- HEALTH ----------
  else if (message.includes("health")) return "Take care of your health 🏥";
  else if (message.includes("water")) return "Stay hydrated 💧";
  else if (message.includes("sleep")) return "Good sleep = good life 😴";

  // ---------- ANIMALS ----------
  else if (message.includes("cat")) return "Cats are cute and funny 🐱";
  else if (message.includes("dog")) return "Dogs are loyal and loving 🐶";

  // ---------- COLORS ----------
  else if (message.includes("color")) return "Colors make the world beautiful 🎨";
  else if (message.includes("blue")) return "Blue feels calm 💙";
  else if (message.includes("red")) return "Red is full of energy ❤️";

  // ---------- SPORTS ----------
  else if (message.includes("cricket")) return "Cricket is very popular 🏏";
  else if (message.includes("football")) return "Football is exciting ⚽";
  else if (message.includes("sports")) return "Sports keep you active 💪";

  // ---------- RANDOM FUN ----------
  else if (message.includes("sun")) return "The sun gives us energy ☀️";
  else if (message.includes("moon")) return "The moon looks beautiful at night 🌙";
  else if (message.includes("space")) return "Space is full of mysteries 🚀";
  else if (message.includes("earth")) return "Earth is our home 🌍";

  // ---------- SMART REPLIES ----------
  else if (message.includes("why")) return "That’s a deep question 🤔 Want to explain more?";
  else if (message.includes("how")) return "Let me think 🤖 Can you be more specific?";
  else if (message.includes("what")) return "Can you explain a bit more so I can help better?";

  // ---------- DEFAULT ----------
  else {
    return "Hmm 🤔 I didn’t understand that. Try asking something else!";
  }
}
  let [typing, setTyping] = useState(false)
  function handleChatSubmit(e) {
    e.preventDefault();
    setContent((prev) => [...prev, { sender: 'user', message: chat }])
    setChat('')
    if(chat){
      setHide(false)
      setTyping(true)
      setTimeout(() => {
        setContent((prev) => [...prev, { sender: 'bot', message: getBotMessage(chat) }])
        setTyping(false)
      }, 1000)
    }
  }
  function handleDelete() {
    setContent([{
      sender: 'user', message: ''
    },
    { sender: 'bot', message: '' }
    ])
    setHide(true)
  }
  return (
    <provideContext.Provider value={{ userInput, setUserInput, input, setInput, handleForm, handleChange, log, setLog, save, setSave, logOut, setLogOut, handleLogOut, user, setUser, handleChatSubmit, chat, setChat, content, setContent, hide, setHide, typing, setTyping, handleDelete, erroremail, setErroremail, errorpass, setErrorpass, name, setName, signemail, setSignemail, signpass, setSignpass }}>
      {children}
    </provideContext.Provider>
  )
}

export default AuthProvider