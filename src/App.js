import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    // BEM
    <div className="app">
      😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇 🥰 😍 🤩 😘 😗 😚 😙 😋 😛 😜 🤪 😝 🤑 🤗 🤭 🤫 🤔 🤐 🤨 😐 😑 😶 😏 😒 🙄 😬 🤥 😌 😔 😪 🤤 😴 😷 🤒 🤕 🤢 🤮 🤧 🥵 🥶 🥴 😵 🤯 🤠 🥳 😎 🤓 🧐 😕 😟 🙁 😮 😯 😲 😳 🥺 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 😤 😡 😠 🤬 😈 👿
      <div className="app__videos">
        <Video
          url=""
          channel=""
          song=""
          likes={222}
          messages={55}
          description=""
          shares={34}
        />
        <Video
          url=""
          channel=""
          song=""
          likes={55}
          messages={45}
          description=""
          shares={11}
        />
        <Video
          url=""
          channel=""
          song=""
          likes={555}
          messages={67}
          description=""
          shares={89}
        />
        <Video
          url=""
          channel=""
          song=""
          likes={90}
          messages={77}
          description=""
          shares={23}
        />
      </div>
    </div>
  );
}

export default App;
