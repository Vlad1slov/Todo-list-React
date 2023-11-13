import styles from "../styles/info.module.css";

const InfoComponent = () => {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className="my-button">Click me in the Info comp</button>
        </div>
    );
};

export default InfoComponent;
