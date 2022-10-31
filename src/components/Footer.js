import github from '../github.svg'
import linkedin from '../linkedin.svg'

export default function Footer() {
    return (
        <footer>

            <div className='socials'>

                <a href='https://www.linkedin.com/in/rodolpho-nikerson/' target='_blank' rel='noreferrer'>
                    <img className='linkedin' src={linkedin} alt='linkedin logo' />
                </a>
                <a href='https://github.com/rodnikerson' target='_blank' rel='noreferrer'>
                    <img className='github' src={github} alt='github logo' />
                </a>

            </div>

        </footer>
    )
}