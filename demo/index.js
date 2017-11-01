import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from '../src/index';

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)' }),
            };
        },
    },
    about: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: '1994 Alternate Reality Game is my hub on the virtual net. Here you can find any information about me that you might want.\n If you are not familiar with the linux command line you can type `help` to display a list of basic commands. You can also type `bio` to come along on a more curated experience. If you know what you are doing, feel free to explore the file system.'})}
        }
    },
    bio: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd, 
                history: history.concat({ value: 'Logan Saether is a programmer from Phoenix, Arizona. He writes English, JavaScript, Rust, Solidity and develops for the full stack. He is interested in blockchains and cryptocurrencies. Type `more` to keep going.' })}
        }
    },
    more: {
        exec: ({ structure, history, cwd }) => { 
            return { structure, cwd,
                history: history.concat({ value: 'Type `blog` to be redirected to his writings. Type `github` to be redirected to his code.' })}
        }
    },
    github: {
        exec: ({ strucutre, history, cwd }) => {
            window.open('https://github.com/lsaether/')
        }
    }
};

const history = [
    { value: 'Welcome to the website of Logan Saether.' },
    { value: 'Type `about` and enter to begin' },
];

const structure = {
    '.hidden': {
        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
        dir2: {
            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
        },
        '.secrets': { content: 'I\'m still afraid of the dark...' },
    },
    public: {
        file1: { content: 'The is the content for file1 in the <public> directory.' },
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
};

const Root = <Terminal history={history} structure={structure} extensions={extensions} />;
ReactDOM.render(Root, document.getElementById('app'));
