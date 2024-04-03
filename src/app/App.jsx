/* eslint-disable react/prop-types */
/** Main App Components
 * By: lucarl07
 */

// Importing CSS from App.css:
import './App.css';

const PersonInfo = (props) => {
    return (
        <div className='personInfo'>
            <div className='personImage'></div>
            <article>
                <h1>{props.fullName}</h1>
                <p>{props.location}</p>
            </article>
        </div>
    );
}

const Quote = (props) => {
    return (
        <p className='quote'>
            &quot;{props.quote}&quot;
        </p>
    );
}

const AnchorButton = (props) => {
    return (
        <button className='btn'>
            <a href={props.href}>
                {props.name}
            </a>
        </button>
    );
}

const SocialMedia = () => {
    return (
        <div className='socialMedia'>
            <ul className='btnList'>
                <li className='listItem'>
                    <AnchorButton name='GitHub' href='https://github.com/lucarl07' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Frontend Mentor' href='https://www.frontendmentor.io/profile/lucarl07' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Linkedin' href='#' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Twitter' href='#' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Instagram' href='https://www.instagram.com/07luizjr?igsh=NTNscWlwbTRkOGZu' />
                </li>
            </ul>
        </div>
    );
}

// Complete output:
const App = () => {
    return (
        <section className='float'>
            <PersonInfo fullName="Luiz Carlos dos Santos Júnior" location="Maceió, Alagoas" />
            <Quote quote="Front-end developer and avid reader." />
            <SocialMedia />
        </section>
    );
}

export default App;