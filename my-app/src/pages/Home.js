import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

import {
    useAccount,
} from 'wagmi'


const Home = ({ web3, contract, match }) => {


    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    

    return (


        <main className="
            p-4 rounded-lg 
            
            milky-glass
            border-2 border-solid border-neutral-200
            
        ">
            <h1 className="
            	p-2 font-saria text-8xl font-bold text-center blue-glow-text
            ">Animal Certificate</h1>
            <span className="
                flex flex-row
                p-2 w-full
                justify-center
                items-center
            ">
                <span className="
                    text-3xl w-fit break-keep
                ">🚀🌟</span>
                <h2 className="
                    font-saria text-2xl text-center blue-glow-text
                ">
                    Introducing <b>PawsPassport</b>: Your Furry Friend's Ticket to the Digital Age!
                </h2>

                <span className="
                    text-3xl w-fit break-keep
                ">🌟🚀</span>
            
            </span>

            <div>
                <p>Count: {count}; Provider: {null}</p>
                <button className="crypto_button" onClick={() => dispatch(increment())}>Increment</button>
                <button className="crypto_button" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>

            <div className="mx-8 my-12 flex justify-center">
                <div class="flex flex-col w-full max-w-md">
                    <label class="text-sm mb-1">Find a certificate</label>
                    <div class="relative">
                        <div class="relative">
                            <input type="text"  placeholder="0x..." class="bg-transparent text-white text-2xl w-full border-b border-white focus:border-gray-300 focus:outline-none"></input>
                            <button onClick={() => console.log("depricated.")} class="absolute right-0 top-0 mt-2 text-sm underline hover:no-underline">[Find...]</button>
                        </div>
                    </div>
                    <Link to="/animals" class="text-lg underline mt-4">[Find all...]</Link>
                </div>
            </div>

            <div class="mx-8 mt-12">
                <h2 class="text-2xl font-medium text-white mb-4"><span class="mr-2">&#9658;</span>Mission:</h2>
                <p class="text-lg">
                    🌟 Welcome to the FUTURE of pet care! 🌟
                    
                    There are currently {0} pets Certified through our service. <br />

                    Get you certificate <Link >TODAY</Link> <br />
                </p>
            </div>

        </main>



    );
};

export default Home;
