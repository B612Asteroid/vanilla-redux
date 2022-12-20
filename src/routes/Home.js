import React, { useState } from "react"
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";


function Home({ toDos, addToDo }) {
    const [ text, setText ] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        addToDo(text);
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => <ToDo { ...toDo } key={toDo.id} />)}
            </ul>
        </>
    )
}

function mapStateToProps(state, ownProps) { // redux가 준 것 + router가 준 것
    return { toDos: state }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(add(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);