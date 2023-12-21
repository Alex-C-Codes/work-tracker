import React, { useState } from "react";

export default function Calculator() {
    const [sla_on_time, setSLAOnTime] = useState('');
    const [sla_behind_time, setSLABehindTime] = useState('');
    // const [sla_final, setSLAFinal] = useState('');
    var sla_final;

    function calculate() {
        var total = sla_on_time + sla_behind_time;
        sla_final = sla_on_time / total * 100;

        return sla_final;
    }

    return (
        <div>
            <h2>Tracker</h2>
            <table className="calculator-table">
                <thead>
                    <tr>
                        <th>Tasks On Time of SLA</th>
                        <th>Tasks Behind SLA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input 
                                type="number"
                                placeholder="Tasks Completed on Time or Ahead of SLA"
                                id="sla-on-time"
                                name="sla_on_time"
                                value={sla_on_time}
                                onChange={(event) => setSLAOnTime(event.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type="number"
                                placeholder="Tasks Completed Behind SLA"
                                id="sla-on-time"
                                name="sla_on_time"
                                value={sla_behind_time}
                                onChange={(event) => setSLABehindTime(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <button type="submit" name="calculate" value={sla_final} onClick={(event) => setSLAFinal(event.target.value)}>Calculate</button> */}

            <button type="submit" name="calculate" value="Calculate" onClick={calculate}>Calculate</button>

            <div style={{marginTop:'20px'}}>
                {calculate()}
                <ul>
                    <li>SLA%: {sla_final}</li>
                </ul>
            </div>
        </div>
    )
}