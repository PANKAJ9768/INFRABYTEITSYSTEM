import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  :root {
    --brand1: #667eea;
    --brand2: #764ba2;
    --text: #333;
    --muted: #666;
    --bg: #ffffff;
    --bg-soft: #f8f9fa;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--text);
    background: var(--bg);
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    -webkit-tap-highlight-color: transparent;
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

  /* Button Styles */
  .btn-primary, .btn-secondary, .btn-outline {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
    border-radius: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--brand1), var(--brand2));
    color: #fff;
    box-shadow: var(--shadow-md);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  .btn-secondary {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
  }

  .btn-secondary:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }

  .btn-outline {
    border: 2px solid #fff;
    color: #fff;
    background: transparent;
  }

  .btn-outline:hover {
    background: rgba(255,255,255,0.12);
  }

  /* Mobile Touch Improvements */
  @media (max-width: 768px) {
    .btn-primary, .btn-secondary, .btn-outline {
      width: 100%;
      max-width: 300px;
      padding: 14px 28px;
      font-size: 1rem;
    }
  }

  /* Prevent horizontal scroll */
  body, html, #root {
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* Focus states for accessibility */
  button:focus-visible,
  a:focus-visible {
    outline: 3px solid var(--brand1);
    outline-offset: 2px;
  }
`;
