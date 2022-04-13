import React from "react";


const projects=[
    {
        "title": "Solana NFT Gallery",
        "description": "DESCRIPTION GOES HERE",
        "thumbnail": require("../images/nft-viewer.png"),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": false,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false
    },
    {
        "title": "Web3 Election dApp",
        "description": "This project was developed using React and Solidity- additional tools used were Truffle, Ganache, ethers.js and Metamask. The election voting dApp will accept a single vote from an authorized address and return an immutable vote talley. The vote talley cannot be altered and unauthorized accounts cannot record a vote. In developing this dApp I first wrote a smart contract in Solidity, deployed it to the Kovan testnet, then developed a frontend for the end-user to interact with. The contract does contain code that disallows authorized users to submit more than one vote, but that logic has been commented out in development.",
        "thumbnail": require('../images/web3voteappthumb.png'),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": true,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": true
    },
    {
        "title": "CLI Rust Calculator",
        "description": "DESCRIPTION GOES HERE",
        "thumbnail": require('../images/rust_calc_thumb.png'),
        "html": false,
        "css": false,
        "javascript": false,
        "react": false,
        "solidity": false,
        "rust":true,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false
    },
    {
        "title": "Teacher Notes App",
        "description": "DESCRIPTION GOES HERE",
        "thumbnail": require("../images/teacher_notes_thumb.png"),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": false,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false
    },
    {
        "title": "Web3 Random Password Generator",
        "description": "This app was created using React and was submitted to the Fall 2021 Chainlink Hackathon. It's a simple random password generator but it's randomness is derived from the Chainlink VRF. It calls a smart contract written in Solidity and deployed on the Kovan testnet. By using the Chainlink VRF the randomness of the password can be verified by a blockchain transaction. This verifiable randomness has tremendous application use cases in game logic and anywhere users are affected from a random event. The project provided 4 main challenges: 1. create a responsive app with React 2.write and deploy a smart contract with Solidity 3. use Ethers.io and Metamask to communicate between the Ethereum blockchain and the app 4. call the Chainlink VRF and return the result to the app. I was successful in meeting all my initial goals. Additional instructions and links to Kovan test ether in Github readme",
        "thumbnail": require('../images/web3thumb.png'),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": true,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": true
    },
    {
        "title": "Trout Counter",
        "description": "I collaborated with Wackypuppy as they were launching a website for the trout farm that is operated by my former employer. I was tasked to create a component in JavaScript that updates in realtime the current number of wild fish that have been saved from becoming fish food by using an all vegetarian feed. The site is now live with the counter active in the 'Protecting Our Oceans' section.",
        "thumbnail": require('../images/troutCounterThumb.png'),
        "html": false,
        "css": false,
        "javascript": true,
        "react": false,
        "solidity": false,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false
    },
    {
        "title": "API Dashboard",
        "description": "Chrome extension for personal use which calls on several different APIs to display curated, personalized information and graphics each time a new tab is opened in Chrome.",
        "thumbnail": require('../images/apiDashboard.png'),
        "html": true,
        "css": true,
        "javascript": true,
        "react": false,
        "solidity": false,
        "rust":false,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false
    },
    {
        "title": "In Progress...",
        "description": "DESCRIPTION GOES HERE",
        "thumbnail": require('../images/crud_app.png'),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": false,
        "rust":false,
        "node":true,
        "express": true,
        "mongoDB":true,
        "url": false,
        "code": false,
        "video": false
    }

]

const about={
    "photo":require("../images/portrait7.png"),
    "description":"My name is Douglas Bernstein and I am a frontend developer from Berkeley CA with a passion for building delightful, responsive, and performative user interfaces.\n  By building on the experiences that have brought me success leading teams and implementing systems the last 20 years, I love to formulate ideas and efficient solutions to complex problems. Presently my main interests are in developing blockchain applications that go beyond cryptocurrencies and expose the secure nature and flexibility of dApps.\n  If you have any questions or comments about the projects featured here, please feel free to reach out- I'd love to hear from you!"
    
}

export default  {projects, about} ;