
const Heading = ({children} : {children: React.ReactNode}) => {
    return (
        <h1 className="text-3xl font-bold mt-1">
            {children}
        </h1>
    );
};

export default Heading;