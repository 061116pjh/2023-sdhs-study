// function MyReact(){
//   const options = {
//     currentStateKey: 0,
//     renderCount: 0,
//     states: [],
//     root: null,
//     rootComponent: null,
//   }

//   function useState(initState){
//     const {currentStateKey: key, states} = options;
//     if(states.length === key) states.push(initState);
  
//     const state = states[key];
//     const setState = (newState) => {
//       if(newState === state || JSON.stringify(newState) === JSON.stringify(state)) return;
//       states[key] = newState;
//       _render();
//     }
//     options.currentStateKey += 1;
//     return [state, setState];
//   }
//   function render(rootComponent, root) {
//     options.root = root;
//     options.rootComponent = rootComponent;
//     _render();
//   }
  
//   const _render = debounceFrame(()=>{
//     const {root, rootComponent} = options;
//     if(!root || !rootComponent) return;
//     root.innerHTML = rootComponent();
//     options.currentStateKey = 0;
//     options.renderCount += 1;
//   });
//   return {useState, render};
// }

// const {useState, render} = MyReact();

// function CounterAndMeow(){
//   const [count, setCount] = useState(1);
//   const [cat, setCat] = useState('야옹!');
//   function countMeow(newCount){
//     setCount(newCount);
//     setCat('야옹! '.repeat(newCount));
//   }
//   window.increment = () => countMeow(count + 1);
//   window.decrement = () => countMeow(count - 1);
//   return `
//     <div>
//       <p>고양이가 ${count}번 울어서 ${cat} </p>
//       <button onclick="increment()">증가</button>  
//       <button onclick="decrement()">감소</button>  
//     </div>
//   `;
// }
// function debounceFrame (callback) {
//   let nextFrameCallback = -1;
//   return () => {
//     cancelAnimationFrame(nextFrameCallback);
//     nextFrameCallback = requestAnimationFrame(callback)
//   }
// };
// const App = () => `
//   <div>
//     ${CounterAndMeow()}
//   </div>
// `;

// render(App, document.querySelector("#app"));

// // let currentStateKey = 0; // useState가 실행 된 횟수
// //     const states = []; // state를 보관할 배열

// //     function useState(initState){
// //       const key = currentStateKey; // key를 복사하여 따로 할당
// //       if(states.length === key) states.push(initState); // initState로 초기값 할당

// //       const state = states[key]; // state 할당
// //       const setState = (newState) => {
// //         if(newState === state) return;
// //         if(JSON.stringify(newState) === JSON.stringify(state)) return;
// //         // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
// //         states[key] = newState;
// //         render(); // render를 실행한다.
// //       }
// //       currentStateKey += 1;
// //       return [ state, setState ];
// //     };
// //     function Counter(){
// //       // 첫번째 인자로 count라는 값을 받아오고
// //       // 두번째 인자로 setCount라는 값을 받아온다
// //       // 위에서 작성한 useState함수에 initState로 1을 전달한다.
// //       const [count, setCount] = useState(1);

// //       // setCount로 count에 +1을 해주는
// //       // increment라는 함수를 만들어준다.
// //       window.increment = () => setCount(count + 1);
// //       // function increment(){}

// //       // tag를 return 한다.
// //       return`
// //         <div>
// //           <strong>count: ${count}</strong>
// //           <button onclick="increment()">증가</button>
// //         </div>
// //       `;
// //     }
// //     function Cat () {
// //       const [cat, setCat] = useState('고양이');

// //       window.meow = () => setCat(cat + ' 야옹!');

// //       return `
// //         <div>
// //           <strong>${cat}</strong>
// //           <button onclick="meow()">고양이의 울음소리</button>
// //         </div>
// //       `;
// //     }
    
// //     function CounterAndMeow(){
// //       const [count, setCount] = useState(1);
// //       const [cat, setCat] = useState('야옹!');

// //       function countMeow(newCount){
// //         setCount(newCount);
// //         setCat('야옹!'.repeat(newCount));
// //       }
// //       window.increment = () => countMeow(count + 1);
// //       window.decrement = () => countMeow(count - 1);

// //       return `
// //         <div>
// //           <p>고양이가 ${count}번 울어서 ${cat} </p>
// //           <button onclick="increment()">증가</button>  
// //           <button onclick="decrement()">감소</button>  
// //         </div>
// //       `;
// //     }

// //     function debounceFrame(callback){
// //       let nextFrameCallback = -1;
// //       return () => {
// //         cancelAnimationFrame(nextFrameCallback);
// //         nextFrameCallback = requestAnimationFrame(callback);
// //       }
// //     }

// //     let renderCount = 0;
// //     const render = debounceFrame(() => {
// //       const $app = document.querySelector("#app");
// //       $app.innerHTML = `
// //         <div>
// //           renderCount:  ${renderCount}
// //           ${CounterAndMeow()}
// //         </div>
// //       `;
// //       renderCount += 1;
// //       currentStateKey = 0;
// //     });
// //     render();