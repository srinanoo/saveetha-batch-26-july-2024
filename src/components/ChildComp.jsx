function ChildComp(props) {
    // console.log(props);
    return (
        <>
            <h1>Child Component</h1>
            {/* <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student Data: {props.data.id}</p> */}
        </>
    )
}

function Child1Comp(props) {
    let active = true;
    // console.log(props);

    return (
        <>
            <h2>Child 1 Component</h2>
            {
                active
                    ?
                    <p>True</p>
                    :
                    <p>False</p>
            }
        </>
    )
}

export default ChildComp;
export { Child1Comp };