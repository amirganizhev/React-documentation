import React, {useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про Javascript'/>
    </div>
  );

}

export default App;
