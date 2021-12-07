import s from './StatTable.module.css'

export const StatTable = (props) => {
 
let PlayersStat = [
    {
        player: "Wayne Gretzky",
        teams: "EDM, LAK, STL, NYR",
        gp: "1487",
        goals: "894",
        country: "🇨🇦"
    },
    {
        player: "Gordie Howe",
        teams: "DET, HFD",
        gp: "1767",
        goals: "801",
        country: "🇨🇦"
    },
    {
        player: "Jaromir Jagr",
        teams: "PIT, WSH, NYR, PHI, DAL, BOS, NJD, FLA, CGY",
        gp: "1733",
        goals: "766",
        country: "🇨🇿"
    },
    {
        player: "Alex Ovechkin",
        teams: "WSH",
        gp: props.gamesOvi,
        goals: props.goalOvi,
        country: "🇷🇺" 
    },
    {
        player: "Brett Hull",
        teams: "CGY, STL, DAL, DET, PHX",
        gp: 1269,
        goals: 741,
        country: "🇨🇦"
    }
];

PlayersStat.sort((a, b) => a.goals < b.goals ? 1 : -1);
    
 return (
  <>
   <table className={s.table}>
	<thead>
		<tr>
			<th>RANK</th>
			<th>PLAYER</th>
			<th>TEAM(S)</th>
            <th>GP</th>
            <th>GOALS</th>
            <th>COUNTRY</th>
		</tr>
	</thead>
	<tbody>

             {PlayersStat.map((i, index) => 
                	<tr key={i} className={i.player=="Alex Ovechkin" && s.Ovi}>
                        <td>{index+1}</td>
                        <td>{i.player}</td>
                        <td>{i.teams}</td>
                        <td>{i.gp}</td>
                        <td>{i.goals}</td>
                        <td>{i.country}</td>
                    </tr>
            )} 
		{console.log(PlayersStat)}
		
	</tbody>
</table>
  </>
 )
}