import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import '../css/styles.css';
import './functions.js';
import phoneFormat from "./functions.js";
import NurseTable from "./nurse.table";





export default function NurseGroup(props) {

    // const [nurses, setNurses] = React.useState([]);
    const nurses = [{
        name: "John Doe",
        id: "2323232",
        phone: "4169882106",
      },
        { name:"John Doe",
          id:"2323232",
          phone:"4169882106",
        },
        { name:"John Doe",
          id:"2323232",
          phone:"4169882106",

        }]
    React.useEffect(() => {

    })

    return (<>
        <Card className="container group-parent my-2 py-2">
            {nurses.map((nurse) => {
                return (<>
                <NurseTable id={nurse.id} name={nurse.name} email={nurse.email} phone={nurse.phone}/>
            </>)
            })}
        </Card>
    </>);
}