import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        dispatch({
            type: 'ADD_POSTS',
            payload: json
        })
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <header className="App-header">
            <h1>{counter}</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title} ==== {post.body}</li>
                ))}
            </ul>
        </header>
    )
}

function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">

      <button
        onClick={ () => {
          dispatch({type:'INC'})
        }}
      >
        inc
      </button>

      <button
        onClick={() => {
          dispatch({type: 'DEC'})
        }}
       >
        dec
      </button>

      <button
      onClick={ () => {
        dispatch({type:'CLEAR'})
        }}
      >
          clear
      </button>

      <button
      onClick={ () => {
        dispatch({type:'TYPE'})
        }}
      >
          type
      </button>

      <NestedChild/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
