import React, {useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'description'},
    {id: 2, title: 'Python 2', body: 'description'},
    {id: 3, title: 'Python 3', body: 'description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Посты про Javascript'/>
      <PostList posts={posts2} title='Посты про Python'/>
    </div>
  );

}

export default App;
