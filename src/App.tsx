import "./App.css";
import styled from "styled-components";
import {
  Discord,
  Facebook,
  Instagram,
  Linkedin,
  Reddit,
  Twitter,
  Medium,
} from "@icons-pack/react-simple-icons";
import { SiReadthedocs } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <StyledScope>
      <StyledMain>
        <img src="assets/images/logo.png" alt="Heroes Uprising Logo" />
        <h2>Here are the Heroes Uprising Official Link</h2>
        <section>

          

          {/* Email */}
          <a
            href="mailto:contactus@heroesuprising.com?subject=GM%2C%20Heroes%20Uprising%20Team!&body=LFG%20Heroes!"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-style"
              size="lg"
            />{" "}
            Contact Us
          </a>

          {/* Email */}
          <a
            href="mailto:partnerwithus@heroesuprising.com?subject=GM%2C%20Heroes%20Uprising%20Team!&body=LFG%20Heroes!"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-style"
              size="lg"
            />{" "}
            Partner With Us
          </a>

           {/* Whitepaper */}
           <a
            href="https://docs.heroesuprising.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiReadthedocs color="#fff" size={24} className="icon-style" /> Whitepaper
          </a>

          {/* Pitch Deck */}
          <a
            href="https://heroesuprising.com/docs/HeroesUprising.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiReadthedocs color="#fff" size={24} className="icon-style" /> Pitch Deck
          </a>

          {/* Discord Server */}
          <a
            href="https://discord.gg/f3pJ7by9yv"
            target="_blank"
            className="icon-style"
            rel="noreferrer noopener"
          >
            <Discord color="#fff" size={24} className="icon-style" /> Discord
          </a>
          

          {/* Facebook Page */}
          <a
            href="https://www.facebook.com/HeroesUprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook color="#fff" size={24} className="icon-style" /> Facebook
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/HeroesUprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter color="#fff" size={24} className="icon-style" /> Twitter
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/heroes-uprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin color="#fff" size={24} className="icon-style" /> LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/officialheroesuprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram color="#fff" size={24} className="icon-style" />
            Instagram
          </a>

          {/* Reddit */}
          <a
            href="https://www.reddit.com/user/HeroesUprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Reddit color="#fff" size={24} className="icon-style" /> Reddit
          </a>
          {/* Medium */}
          <a
            href="https://medium.com/@heroesuprising"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Medium color="#fff" size={24} className="icon-style" /> Medium
          </a>

         


        </section>
        <p > &copy; Copyright 2023 - Heroes Uprising</p>
      </StyledMain>
    </StyledScope>
  );
}

const StyledScope = styled.div`
background: rgb(0,0,0);
background: -moz-radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%);
background: -webkit-radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1); 
`;

const StyledMain = styled.main`
  padding: 10vw;
  box-sizing: border-box;
  background-color: rgba(0,0,0,3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100;
  min-height: 100vh;

  color: white;

  img {
    width: 100%;
    max-width 270px;
    margin-bottom: 2em;
  }

  h1 {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 2em;
    margin-top: 0.5em;
    margin-bottom: 0.1em;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    text-align: center;
  }
  
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
  }

  a {
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background-color: rgb(255,135,0);
    border-radius: 20px;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
    border: 1px solid transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-10px);
      border: 1px solid white;
    }
  }

  .icon-style {
    margin-right: 10px;
  }
  
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
    }
  }
`;

export default App;
