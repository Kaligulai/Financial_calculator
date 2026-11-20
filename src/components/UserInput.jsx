
export default function UserInput({ onChange, userInput }) {
  

    return (
    <section id="user-input">
      <div className="input-group">
        <p>
        <label htmlFor="initialInvestment">Initial Investment ($)</label>
        <input type="number" id="initialInvestment" required value={userInput["initialInvestment"]} onChange={(e) => onChange("initialInvestment", parseFloat(e.target.value))} />
        </p>
        <p>
        <label htmlFor="annualContribution">Annual Contribution ($)</label>
        <input type="number" id="annualContribution" required value={userInput["annualInvestment"]} onChange={(e) => onChange("annualInvestment", parseFloat(e.target.value))} />
        </p>
          <p>
        <label htmlFor="expectedReturn">Expected Return (%)</label>
        <input type="number" id="expectedReturn" required value={userInput["expectedReturn"]} onChange={(e) => onChange("expectedReturn", parseFloat(e.target.value))} />
        </p>
        <p>
        <label htmlFor="duration">Duration (years)</label>
        <input type="number" id="duration" required value={userInput["duration"]} onChange={(e) => onChange("duration", parseFloat(e.target.value))} />
        </p>
      </div>
    </section>
  );
}