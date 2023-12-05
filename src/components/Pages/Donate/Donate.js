import {  React } from 'react';
import './Donate.css'
import Navbar from '../../Navbar';
import { FaClipboard } from 'react-icons/fa';
import { useState } from 'react'

const Donate = () => {

    const handleCopy = () => {
        const shareableContent = '9035947052';

        const textarea = document.createElement('textarea');
        textarea.value = shareableContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Number Copied!')
    };

    const handleCopyOne = () => {
        const shareableContent = '9035947052';

        const textarea = document.createElement('textarea');
        textarea.value = shareableContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Number Copied!')
    };

    const [isHover, setIsHover] = useState(false);
    

    return ( 
        <div className='Donate'>
            <Navbar />

            <div className='donate-content'>
                <div className='donate-card'>
                    <div className='donate-card_text'>
                        <h2>Pay through:</h2>
                        
                        <span>
                            <h4>OPAY</h4>
                            <p>
                                <button onClick={handleCopyOne} onMouseEnter={e => setIsHover(!isHover)} onMouseLeave={e => setIsHover(!isHover)}>
                                    <FaClipboard />
                                </button>

                                9035947052
                            </p>
                        </span>

                        <span>
                            <h4>Stanbic</h4>
                            <p>
                                <button onClick={handleCopy} onMouseEnter={e => setIsHover(!isHover)} onMouseLeave={e => setIsHover(!isHover)}>
                                    <FaClipboard />
                                </button>
                                0045789990
                            </p>
                        </span>
                    </div>
                </div>

                <div className='donate-info'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.
                    </p>
                </div>
            </div>

            {isHover && (
                <div className='hoverdiv'>
                    <p>Copy the account number</p>
                </div>    
            )}

        </div>
     );
}
 
export default Donate;