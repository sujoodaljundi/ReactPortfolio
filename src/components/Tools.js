import React from 'react';

const Tools = () => {
  return (
    <section id="tools_section">
      <h2 className="tools-title">My Tools</h2>
      <p className="tools-description">Here are some of the tools I use in my projects:</p>
      <div className="tools-container">
        <div className="tool-card">
          <img src={process.env.PUBLIC_URL + '/assets/VSCODE.png'} alt="Visual Studio Code" />
          <div className="tool-content">
            <div className="tool-name">Visual Studio Code</div>
            <div className="tool-description">A powerful code editor for web development.</div>
          </div>
        </div>
        <div className="tool-card">
          <img src={process.env.PUBLIC_URL + '/assets/gitbash.png'} alt="Git Bash" />
          <div className="tool-content">
            <div className="tool-name">Git Bash</div>
            <div className="tool-description">A command-line tool for version control.</div>
          </div>
        </div>
        <div className="tool-card">
          <img src={process.env.PUBLIC_URL + '/assets/figma.png'} alt="Figma" />
          <div className="tool-content">
            <div className="tool-name">Figma</div>
            <div className="tool-description">A collaborative interface design tool.</div>
          </div>
        </div>
      </div>
      <div className="tools-container">    
        <div className="tool-card">
          <img src={process.env.PUBLIC_URL + '/assets/trello.png'} alt="trello" />
          <div className="tool-content">
            <div className="tool-name">Trello</div>
            <div className="tool-description">Collaboration and Workflow Organization.</div>
          </div>
        </div>
        <div className="tool-card">
          <img src={process.env.PUBLIC_URL + '/assets/wamp.png'} alt="trello" />
          <div className="tool-content">
            <div className="tool-name">Trello</div>
            <div className="tool-description">Collaboration and Workflow Organization.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
