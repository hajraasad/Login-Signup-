import useFetch from "./useFetch";
const CustomHook = () => {
    const [data, abc] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );


};
export default CustomHook;