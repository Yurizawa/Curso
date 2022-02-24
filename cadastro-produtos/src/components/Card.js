import react from "react";

export default (props) => (
    <div className="Card">
        <div className="card-header">
            {props.header}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)

