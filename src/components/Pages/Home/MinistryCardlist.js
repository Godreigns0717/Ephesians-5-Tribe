import {FaCross, FaStar} from 'react-icons/fa';
import './MinistryCard.css'

const MinistryCardlist = ({mcards, title}) => {
    return(
        <div className='ministry_card-list'>
            {mcards.map((mcard) => (
                <div className='ministry_card-preview'>
                    <h2 className='mcd__heading'>{ mcard.title}</h2>
                    <p>{ mcard.body}</p>
                    <h4 className='mcd__minister'>Head minister: { mcard.minister }</h4>
                    <p className='mcd__icon'>
                        <FaStar />
                        <FaStar />
                        <FaCross className='cross' />
                        <FaStar />
                        <FaStar />
                    </p>

                    <a href='#' className='mcd__learn-more'>Learn More</a>
                </div>
            ))
            }
        </div>
    )
}

export default MinistryCardlist;