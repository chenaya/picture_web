import React from "react";

// const About = () => {
//   return <div style={{ minHeight: "100vh" }}>About</div>;
// };

const About = () => {
  return (
    <div className="about">
      <h1 className="title">關於本網站</h1>

      <p className="paragraph">
        本網站是一個圖片搜尋平台，使用 <strong>React</strong>{" "}
        前端框架開發，並串接 <strong>Pexels API</strong>
        來提供圖片資源。使用者可以透過關鍵字搜尋圖片，瀏覽圖片細節，並支援下載功能。
      </p>

      <h2 className="subtitle">主要功能</h2>
      <ul className="ulList">
        <li>圖片搜尋功能</li>
        <li>點擊圖片可查看大圖</li>
        <li>下載高畫質圖片</li>
      </ul>

      <h2 className="subtitle">使用技術</h2>
      <ul className="ulList">
        <li>React – 負責前端框架開發</li>
        <li>Pexels API – 提供圖片資料</li>
        {/* <li>Axios – 處理資料串接</li> */}
      </ul>

      <h2 className="subtitle">開發者</h2>
      <p className="paragraph">
        本網站由個人獨立開發，作為學習 React 與 API 串接的實作練習作品。
        <br />
        歡迎造訪 GitHub：
        <a
          href="https://github.com/chenaya/picture_web"
          target="_blank"
          rel="noopener noreferrer"
        >
          chenaya/picture_web
        </a>
      </p>

      <p className="note">*圖片資源由 Pexels 提供，僅供展示與學習用途。</p>
    </div>
  );
};

export default About;
