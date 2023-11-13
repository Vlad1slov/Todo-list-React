function Person({ id, firstName, lastName, email, img }) {
    return (
        <div className="card">
            {id}.{" "}
            <h3>
                {firstName} {lastName}
            </h3>
            <h4>{email} </h4> <img src={img} />
        </div>
    );
}

export default Person;
