import React, { useEffect } from "react";

function GemzChatAI() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="fprs_fairlaunch">
          <div className="fprs_fairlaunch_title">
            <h3>GEMZSTONE CHAT AI</h3>
          </div>
          <div className="fprs_fairlaunch_contents">
            <iframe
              src="https://my-openai-chat.vercel.app/"
              width="100%"
              height={400}
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
          <div className="fprs_fairlaunch_btns">
            <a href="#">PINKSALE FAIRLAUNCH BSC</a>
            <a
              href="https://docs.google.com/spreadsheets/d/1tKCk53Hm8qUtlNhl9pVEDfG4bNfygKtvIEWPrCYy0qM/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              CHECK WHITELIST SHEET
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GemzChatAI;
