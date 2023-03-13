import React from "react";
import twitterImg from './twitter.svg';
import Logo from './take.svg';
import Bg from './bg.webp';



function PsiloDao() {

  const openTwitter = () => {
    window.open("https://twitter.com/PsiloDAO");
  }
  const x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  function generateMixed(n) {
      let res = "";
      for (let i = 0; i < n; i++) {
          let id = Math.floor(Math.random() * 80);
          res += x[id];
      }
      return res;
  }

  function tweet() {
      const text = "This is my digital signature for early registration at @PsiloDAO.";
      const hash = "ID: " + generateMixed(6);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%0a%0a${encodeURIComponent(hash)}`;
      window.open(tweetUrl, '_blank');
  }


  return (
    <>
      <header>
        <div className="head-wrapper">
          <div className="combo">
            <img src={Logo}  alt="logo" />
            <h1>Psilo DAO</h1>
          </div>
          <div className="follow" onClick={openTwitter}>
            <img src={twitterImg}  alt="twitter" />
            <h6>Follow Us</h6>
          </div>
        </div>
      </header>
      <div className="wrap">
        <div className="launching">
          <ul>
            <li>• Launching Soon</li>
          </ul>
        </div>
        <div className="Title">
          <h1>Unlock your earning potential with PsiloDAO.
</h1>
        </div>
        <div className="paragraph">
          <p id="info">
            The Smart choice for <b>maximizing</b> your ETH returns.
          </p>
        </div>
        <div className="bouton">
          <button onClick={tweet}>Join Early Access</button>
        </div>
      </div>
    </>
  );
}

export default PsiloDao;
