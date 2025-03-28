import './tailCSS.css';
import {useState} from 'react';

function App() {
    const [color, setColor] = useState('beige');

    return(
        <div className={'w-full h-screen duration-200'} style={{backgroundColor: color}}>
            <div className={'fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' }>
                <div className={'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'}>
                    <button id={"BEIGE"} onClick={()=> setColor("BEIGE")}
                    className={'outline-none px-4 py-1 rounded-full shadow-lg text-black'}>BEIGE!</button>
                    <button id={"CYAN"} onClick={()=> setColor("CYAN")}
                    className={'outline-none px-4 py-1 rounded-full shadow-lg text-black'}>CYAN!</button>
                    <button id={"ORANGE"} onClick = {() => setColor("ORANGE")}
                    className={'outline-none px-4 py-1 rounded-full shadow-lg text-black'}>ORANGE!</button>

                </div>

            </div>

        </div>
    );
}

export default App;

