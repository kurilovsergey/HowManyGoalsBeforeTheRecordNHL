import s from './StatTable.module.css'

export const StatTable = (props) => {

    let PlayersStat = [
        {
            player: "Wayne Gretzky",
            player_russ: "Уэйн Гретцки",
            // teams: "EDM, LAK, STL, NYR",
            gp: "1487",
            goals: "894",
            country: "🇨🇦",
            rank: 0
        },
        {
            player: "Gordie Howe",
            player_russ: "Горди Хоу",
            // teams: "DET, HFD",
            gp: "1767",
            goals: "801",
            country: "🇨🇦",
            rank: 0
        },
        {
            player: "Jaromir Jagr",
            player_russ: "Яромир Ягр",
            // teams: "PIT, WSH, NYR, PHI, DAL, BOS, NJD, FLA, CGY",
            gp: "1733",
            goals: "766",
            country: "🇨🇿",
            rank: 0
        },
        {
            player: "Alex Ovechkin",
            player_russ: "Александр Овечкин",
            // teams: "WSH",
            gp: props.gamesOvi,
            goals: props.goalOvi,
            country: "🇷🇺",
            rank: 0
        },
        {
            player: "Brett Hull",
            player_russ: "Бретт Халл",
            // teams: "CGY, STL, DAL, DET, PHX",
            gp: 1269,
            goals: 741,
            country: "🇨🇦",
            rank: 0
        }
    ];


    let Rank = () => {
        let i = 1;

        PlayersStat.forEach((item, index, arr) => {
            if (index > 0 && item.goals == arr[index - 1].goals) {
                item.rank = i - 1;
            } else {
                item.rank = i;
                i++;
            }
        }
        )
    }

    PlayersStat.sort((a, b) => a.goals < b.goals ? 1 : -1);
    Rank();


    return (
        <>
            <table className={s.table}>
                <thead>
                    {props.isRuss ?
                        <tr>
                            <th>{"№"}</th>
                            <th>{"Игрок" }</th>
                            {/* <th>TEAM(S)</th> */}
                            <th>{"Игр"}</th>
                            <th>{"Шайб"}</th>
                            <th>{"Страна"}</th>
                        </tr> :
                        <tr>
                            <th>{"RANK"}</th>
                            <th>{"PLAYER"}</th>
                            {/* <th>TEAM(S)</th> */}
                            <th>{"GP"}</th>
                            <th>{"GOALS"}</th>
                            <th>{"COUNTRY"}</th>
                        </tr>
                    }
                </thead>
                <tbody>

                    {PlayersStat.map((i, index) =>
                        <tr key={index} className={i.player == "Alex Ovechkin" ? s.Ovi : null}>
                            <td>{i.rank}</td>
                            <td>{props.isRuss ? i.player_russ : i.player}</td>
                            {/* <td>{i.teams}</td> */}
                            <td>{i.gp}</td>
                            <td>{i.goals}</td>
                            <td>{i.country}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}