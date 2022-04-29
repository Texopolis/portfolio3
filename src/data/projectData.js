

const projects=[
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
        "metamask": true,
        "url": "https://web3vote.netlify.app/",
        "code": "https://github.com/Texopolis/voteapp",
        "video": false,
    },
    {
        "title": "Solana NFT Gallery",
        "description": "The Solana NFT Viewer project was created to display all NFTs held in any wallet on the Solana blockchain. You are able to enter a Solana wallet address in the search bar and once the data is returned from the blockchain, the NFTs held in that wallet will be displayed. Wallets are searched directly from the blockchain (not third party or centralized servers) ensuring up to date and accurate information. You can then 'favorite' any NFT which will reorder the entire collection and display the favorited NFTs first. Clicking on any NFT will take you to Solscan.io to display more info about that particular NFT.\nIf a NFT is part of a collection, the title will be edited and the NFT number in the collection will be displayed under the favorite icon.\nIncluded is a button to generate a random Solana address in case you don't have access to a wallet address.",
        "thumbnail": require("../images/nft-viewer.png"),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": false,
        "rust":false,
        "url": "https://solananftviewer.netlify.app",
        "code": "https://github.com/Texopolis/solanaNFTviewer",
        "video": false
    },
    {
        "title": "CLI Rust Calculator",
        "description": "This is a simple command line interface calculator written entirely in Rust. This is my first project using Rust exclusively- I am currently teaching myself Rust as I believe it will increase my ability to develop frontends for Solana applications as my understanding of Rust programs (contracts) increases.",
        "thumbnail": require('../images/rust_calc_thumb.png'),
        "html": false,
        "css": false,
        "javascript": false,
        "react": false,
        "solidity": false,
        "rust":true,
        "metamask":false,
        "url": false,
        "code": "https://github.com/Texopolis/calculator",
        "video": false
    },
    {
        "title": "Notes App",
        "description": "This application makes a call to an API where student information is kept. The returning information is styled and displayed with search functionality added. Each student 'card' is expandable and will display additional details. A user is also able to add a note to each entry and then search by entries.",
        "thumbnail": require("../images/teacher_notes_thumb.png"),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": false,
        "rust":false,
        "url": "https://class-notes-app.netlify.app/",
        "code": "https://github.com/Texopolis/notesApp",
        "video": false
    },
    {
        "title": "Web3 Random Password Generator",
        "description": "This app was created using React and was submitted to the Fall 2021 Chainlink Hackathon. It's a simple random password generator but it's randomness is derived from the Chainlink VRF. It calls a smart contract written in Solidity and deployed on the Kovan testnet. By using the Chainlink VRF the randomness of the password can be verified by a blockchain transaction. This verifiable randomness has tremendous application use cases in game logic and anywhere users are affected from a random event.\n The project provided 4 main challenges: 1. create a responsive app with React 2.write and deploy a smart contract with Solidity 3. use Ethers.io and Metamask to communicate between the Ethereum blockchain and the app 4. call the Chainlink VRF and return the result to the app. I was successful in meeting all my initial goals. Additional instructions and links to Kovan test ether in Github readme",
        "thumbnail": require('../images/web3thumb.png'),
        "html": true,
        "css": true,
        "javascript": true,
        "react": true,
        "solidity": true,
        "rust":false,
        "metamask": true,
        "url": "https://web3passgenerator.netlify.app",
        "code": "https://github.com/Texopolis/passgen",
        "video": false
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
        "url": "https://mcfarlandsprings.com/",
        "code": "https://github.com/Texopolis/McFarland-Springs-counter-component",
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
        "url": "https://texopolis.github.io/apiDashboard/",
        "code": "https://github.com/Texopolis/apiDashboard",
        "video": false
    },
    {
        "title": "In Progress...",
        "description": "This is a full-stack CRUD travel application in development that allows a user to create, read, edit and delete a reservation from a database. Each reservation entry includes a location name, date of arrival and departure, type of accommodation, number of guests and the price.",
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
    "description":"My name is Douglas Bernstein and I am a frontend developer from Berkeley, CA with a passion for building delightful, responsive, and performative user interfaces.\n  By building on the experiences that have brought me success leading teams and implementing systems the last 20 years, I love to formulate ideas and efficient solutions to complex problems. Presently my main interests are in developing blockchain applications that go beyond cryptocurrencies and expose the secure nature and flexibility of decentralized applications.\n  My free time is consumed with furniture woodworking projects (anything that involves building with my hands), gardening and walking my spaghetti obsessed dog. \n  If you have any questions or comments about the projects featured here, please feel free to reach out- I'd love to hear from you!"
    
}

export default  { projects, about } ;