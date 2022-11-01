import "../styles/CharacterSheet.css";

export default function CharacterSheet() {
  return (
    <div className="character-sheet-header">
      <div className="ability-stats">
        <div className="ability-score">
          <p>Strength</p>
          <div className="ab-score-box">
              <div className="ab-score">
                18
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              4
            </div>
          </div>
        </div>
        <div className="ability-score">
          <p>Dexterity</p>
          <div className="ab-score-box">
              <div className="ab-score">
                12
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              1
            </div>
          </div>
        </div>
        <div className="ability-score">
          <p>Constitution</p>
          <div className="ab-score-box">
              <div className="ab-score">
                18
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              4
            </div>
          </div>
        </div>
        <div className="ability-score">
          <p>Intelligence</p>
          <div className="ab-score-box">
              <div className="ab-score">
                12
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              1
            </div>
          </div>
        </div>
        <div className="ability-score">
          <p>Wisdom</p>
          <div className="ab-score-box">
              <div className="ab-score">
                14
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              3
            </div>
          </div>
        </div>

        <div className="ability-score">
          <p>Charisma</p>
          <div className="ab-score-box">
              <div className="ab-score">
                13
              </div>
          </div>
          <div className="ab-mod-box">
            <div className="ab-modifier">
              1
            </div>
          </div>
        </div>
      </div>

      <div className="proficiency-bonus"></div>

      <div className="walking-speed"></div>

      <div className="inspiration"></div>

      <div className="hit-points"></div>
    </div>
  );
}
