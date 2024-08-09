import React, {useState} from 'react'

const chat = () => {

    const [input,setInput] = useState('');
    const [messages, setMessages] = useState([{ role: "system", content: "You are a helpful assistant." }]);
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            const newMessage = {role: "user", content: input.trim()};
            setMessages([...messages, newMessage]);
            setInput(''); 
        }
    }


    return (
        <div className='mt-3 p-4'>
            <div className='mb-1 text-center'>
                <h1>Chat with AI Assistant</h1>
            </div>
            <div className="chat-section">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-bubble ${message.role === 'system' ? 'chat-start' : 'chat-end'}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <form className="flex w-full max-w-md absolute bottom-3" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type here" 
                    className="input border-solid border-2 w-full" 
                    value={input}
                    onChange={handleInputChange}
                />
                <button type="submit" className="submit-btn">Send</button>
            </form>
        </div>
    )
}

export default chat
