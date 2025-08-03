const ct = [
    {
        num: "5+",
        name: "Experience"
    },{
        num: "450+",
        name: "Professionals Trained"
    },{
        num: "600+",
        name: "Training Sessions"
    },{
        num: "7+",
        name: "Live Courses"
    }
];

export default function Counter() {
    return <div className="counter">
        {
            ct.map((e, i)=>{
                return <div className="ct">
                    <div className="num">{e.num}</div>
                    <div className="name">{e.name}</div>
                </div>
            })
        }
    </div>
}