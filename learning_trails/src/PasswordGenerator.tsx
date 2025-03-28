import './tailCSS.css';
import {useState, useCallback, useEffect, useRef, Ref} from 'react';


function PasswordGenerator(){
    const [lengthForPassword, setLengthForPassword] = useState(8);
    const [areCharactersAllowed, setAreCharactersAllowed] = useState<boolean>(true);
    const [areNumbersAllowed, setAreNumbersAllowed] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const passwordRef: Ref<HTMLInputElement> = useRef(null);


    const generatePassword = useCallback(()=> {
        let pass:string  = "";
        let str:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(areNumbersAllowed) str += "0123456789";
        if(areCharactersAllowed) str += "!@#$%^&*()_+";

        for(let i:number = 0; i < lengthForPassword; i++ ){
           const char:number = Math.floor(Math.random() * str.length + 1);
           pass += str.charAt(char);
        }

        setPassword(pass);
    }, [lengthForPassword, areNumbersAllowed, areCharactersAllowed]);

    useEffect(()=> {
        generatePassword();
    }, [generatePassword, lengthForPassword, areNumbersAllowed, areCharactersAllowed])

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    }
    return(
        <div className={'w-full h-screen bg-blue-950'}>
            <div className={'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'}>
                  <h1 className={'text-3xl font-bold mb-2 text-center text-white'}>
                    Password Generator
                      <div className={'flex shadow rounded-lg overflow-hidden mb-4'}>
                          <input type={'text'} value={password} className={'outline-none w-full py-1 px-3'} placeholder={'Password'} readOnly ref={passwordRef}/>
                          <button onClick={copyToClipboard}
                              className={'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300 shadow-amber-50'}>COPY!</button>
                      </div>
                      <div className={'flex items-center gap-x-1'}>
                          <input type={'range'} min={6} max={100} value={lengthForPassword} className={'cursor-pointer'} onChange={(e)=> setLengthForPassword(parseInt(e.target.value))}
                          name={""} id={""}/>
                          <label htmlFor={"length"}>Length: {lengthForPassword}</label>
                      </div>
                      <div className={'flex items-center gap-x-1'}>
                          <input type={'checkbox'} name={''} id={''}
                                 defaultChecked={areNumbersAllowed}
                                 onChange={() => setAreNumbersAllowed(!areNumbersAllowed)}
                          />
                          <label htmlFor={'Numbers Allowed!'}
                                 className={'text-1xl'}>Numbers Allowed!</label>
                      </div>
                      <div className={'flex items-center gap-x-1'}>
                          <input type={'checkbox'} name={''} id={''}
                                 defaultChecked={areCharactersAllowed}
                                 onChange={() => setAreCharactersAllowed(!areCharactersAllowed)}
                          />
                          <label htmlFor={'Characters Allowed!'}
                                 className={'text-1xl'}>Characters Allowed!</label>
                      </div>
                  </h1>

            </div>
        </div>
    );
}

export default PasswordGenerator;