import { useEffect, useState} from "react";

export const UseEffectPrac = () => {
    const [count, setcount] = useState(10);
useEffect(() =>{
console.log("inside useEffect");
}, [count]);

return (
<div>
  <h1>useEffect Hook</h1>
  <div>Count : {count}</div>
  <button onClick={() => setcount(count + 1)}>Increment</button>
</div>
);


}