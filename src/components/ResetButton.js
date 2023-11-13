import Counter from "./Counter";
import Button from "./Button";
import { useState } from "react";

const ResetButton = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <Counter count={count} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            {count > 0 && (
                <div>
                    <button
                        style={{ backgroundColor: "lightgreen" }}
                        onClick={resetCount}
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
};

export default ResetButton;
