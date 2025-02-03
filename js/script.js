* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1a1b26;
    font-family: 'Fira Code', monospace;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a9b1d6;
}

.terminal {
    width: 90%;
    max-width: 900px;
    height: 80vh;
    background-color: #1a1b26;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    overflow: hidden;
}

.terminal-header {
    background-color: #1f2335;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.terminal-buttons {
    display: flex;
    gap: 8px;
}

.terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.close { background-color: #ff5f56; }
.minimize { background-color: #ffbd2e; }
.maximize { background-color: #27c93f; }

.terminal-content {
    padding: 20px;
    height: calc(80vh - 32px);
    overflow-y: auto;
}

.input-line {
    display: flex;
    margin-top: 10px;
}

.prompt {
    color: #7aa2f7;
    margin-right: 10px;
}

#command-input {
    background: none;
    border: none;
    color: #a9b1d6;
    font-family: 'Fira Code', monospace;
    font-size: 1em;
    flex: 1;
    outline: none;
}

.output-line {
    margin: 5px 0;
    line-height: 1.5;
}

.pixel-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    image-rendering: pixelated;
    vertical-align: middle;
    margin-right: 10px;
}