const liveTime = () => {
    const clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
    const app = React.createElement('div', {}, clock);
    
    ReactDOM.render(
        app,
        document.getElementById('react-app-root')
    );
};

setInterval(liveTime, 1000);