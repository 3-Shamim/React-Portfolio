import React, {Fragment} from "react";
import "./history_title.scss";

const HistoryTitle = ({title, icon}) => {
    return (
        <Fragment>
            <div className="history-title">
                <span>{icon}</span>
                <h4>{title}</h4>
            </div>
        </Fragment>
    );
}

export default HistoryTitle;