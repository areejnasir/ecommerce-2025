const Limit = ({ setLimitVal }: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // Directly call setLimitVal from props with the selected value
        setLimitVal(Number(e.target.value));  // Use Number to convert to an integer
    };

    return (
        <div className="flex items-center">
            <label className="mr-2 font-bold" htmlFor="limit">Limit:</label>
            <select
                id="limit"
                className="w-[60px] p-2 rounded-sm border-2 border-gray-300 flex justify-center items-center outline-none"
                onChange={handleChange}
            >
                <option value="2">2</option>
                <option value="5">5</option>
            </select>
        </div>
    );
};

export default Limit;
