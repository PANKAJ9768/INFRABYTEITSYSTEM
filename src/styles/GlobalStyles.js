import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  :root {
    --brand1: #667eea;
    --brand2: #764ba2;
    --text: #333;
    --muted: #666;
    --bg: #ffffff;
    --bg-soft: #f8f9fa;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background: var(--bg);
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  .section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
    .container {
      padding: 0 16px;
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--brand1), var(--brand2));
    color: #fff;
    padding: 12px 24px;
    border-radius: 24px;
    display: inline-block;
    transition: .2s;
    border: none;
    cursor: pointer;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  .btn-outline {
    border: 2px solid #fff;
    color: #fff;
    padding: 10px 22px;
    border-radius: 24px;
    display: inline-block;
    transition: .2s;
    background: transparent;
    cursor: pointer;
  }

  .btn-outline:hover {
    background: rgba(255,255,255,.12);
  }
`;
