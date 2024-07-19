let CurrentTime = ()=>{
    let time = new Date();
    return(
    <p>
        this the current time: {time.toLocaleDateString()} - {""}
        {time.toLocaleTimeString()}</p>
);
    };
    export default CurrentTime;